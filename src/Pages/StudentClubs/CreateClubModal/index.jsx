import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Row, Input, Col, message, Icon, Upload } from "antd";
import { createClub, fetchClubList } from "../../../redux/clubs/api";
import Styles from "./styles";

const { TextArea } = Input;

const CreateClubModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    desc: "",
    ownerName: "",
    ownerSurname: "",
    ownerEmail: "",
    ownerPassword: "",
    ownerPhoneNumber: ""
  });
  const [logoList, setLogoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    if (isJpgOrPng && isLt2M) {
      if (logoList.length > 0)
        message.warning("Photo is changed with the new one!");
      setLogoList([file]);
    }
    return false;
  };

  const onSubmitClub = async () => {
    setLoading(true);
    try {
      const { name, desc } = form;
      const {
        ownerName,
        ownerSurname,
        ownerEmail,
        ownerPassword,
        ownerPhoneNumber
      } = form;
      const club = { name, desc };
      const owner = {
        ownerName,
        ownerSurname,
        ownerEmail,
        ownerPassword,
        ownerPhoneNumber
      };

      const formData = new FormData();
      formData.append("club", JSON.stringify(club));
      formData.append("owner", JSON.stringify(owner));

      if (logoList.length > 0) {
        const logo = logoList[0];
        formData.append("logo", logo);
      }

      await dispatch(createClub(formData));
      dispatch(fetchClubList());
      message.success("Created successfully");
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  const setFormState = (field, event) => {
    const { value } = event.target;
    setForm(state => ({ ...state, [field]: value }));
  };

  return (
    <Modal
      title="Create Club"
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
        <Row type="flex">
          <Col span={8}>
            <p>Club Name:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("name", e)} />
          </Col>
          <Col span={8}>
            <p>Club Description:</p>
          </Col>
          <Col span={16}>
            <TextArea rows={8} onChange={e => setFormState("desc", e)} />
          </Col>
          <Col span={24}>
            <div className="upload-button">
              <Upload
                fileList={logoList}
                beforeUpload={beforeUpload}
                onRemove={() => setLogoList([])}
              >
                <Button>
                  <Icon type="plus" />
                  Upload Photo
                </Button>
              </Upload>
            </div>
          </Col>
          <Col span={24}>
            <p style={{ fontWeight: "bold" }}>Owner Info</p>
          </Col>
          <Col span={8}>
            <p>Name:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("ownerName", e)} />
          </Col>
          <Col span={8}>
            <p>Surname:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("ownerSurname", e)} />
          </Col>
          <Col span={8}>
            <p>Email:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("ownerEmail", e)} />
          </Col>
          <Col span={8}>
            <p>Password:</p>
          </Col>
          <Col span={16}>
            <Input
              type="password"
              onChange={e => setFormState("ownerPassword", e)}
            />
          </Col>
          <Col span={8}>
            <p>Phone Number:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("ownerPhoneNumber", e)} />
          </Col>
        </Row>
      </Styles>
    </Modal>
  );
};

export default CreateClubModal;
