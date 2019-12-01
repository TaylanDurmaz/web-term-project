import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  Row,
  Input,
  Col,
  message,
  Icon,
  Upload,
  DatePicker
} from "antd";
import { createEvent, fetchEventList } from "../../../redux/events/api";
import Styles from "./styles";

const { TextArea } = Input;

const CreateEventModal = ({ visible, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    place: "",
    time: ""
  });
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const club = useSelector(state => state.auth.user.ownerOf);
  const dispatch = useDispatch();

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 1;
    if (!isLt2M) {
      message.error("Image must smaller than 1MB!");
    }

    if (isJpgOrPng && isLt2M) {
      if (imageList.length > 0)
        message.warning("Photo is changed with the new one!");
      setImageList([file]);
    }
    return false;
  };

  const onSubmitClub = async () => {
    setLoading(true);
    try {
      const { name, desc, place, time } = form;
      const event = { name, desc, place, time };

      const formData = new FormData();
      formData.append("event", JSON.stringify(event));

      if (imageList.length > 0) {
        const image = imageList[0];
        formData.append("image", image);
      } else {
        throw new Error("Please upload a image");
      }

      await dispatch(createEvent(formData));
      dispatch(fetchEventList());
      message.success("Created successfully");
    } catch (err) {
      message.error(err.message);
    }
    setLoading(false);
  };

  const setFormState = (field, event) => {
    const { value } = event.target;
    setForm(state => ({ ...state, [field]: value }));
  };

  return (
    <Modal
      title="Create Event"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={onSubmitClub}
          loading={loading}
          disabled={loading}
        >
          Save
        </Button>
      ]}
    >
      <Styles>
        <p style={{ fontWeight: "bold" }}>{club.name}</p>
        <Row type="flex">
          <Col span={8}>
            <p>Event Name:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("name", e)} />
          </Col>

          <Col span={8}>
            <p>Place:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("place", e)} />
          </Col>

          <Col span={8}>
            <p>Event Description:</p>
          </Col>
          <Col span={16}>
            <TextArea rows={8} onChange={e => setFormState("desc", e)} />
          </Col>

          <Col span={8}>
            <p>Start Date & Time:</p>
          </Col>
          <Col span={16}>
            <DatePicker
              showTime
              allowClear={false}
              placeholder="Select Date & Time"
              onOk={date =>
                setForm(state => ({ ...state, time: date.toString() }))
              }
            />
          </Col>

          <Col span={24}>
            <div className="upload-button">
              <Upload
                fileList={imageList}
                beforeUpload={beforeUpload}
                onRemove={() => setImageList([])}
              >
                <Button>
                  <Icon type="plus" />
                  Upload Photo
                </Button>
              </Upload>
            </div>
          </Col>
        </Row>
      </Styles>
    </Modal>
  );
};

export default CreateEventModal;
