import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Row, Input, Col, message } from "antd";
import { createTopic, fetchTopicList } from "../../../redux/topics/api";

const { TextArea } = Input;

const CreateTopicModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmitClub = async () => {
    setLoading(true);
    try {
      await dispatch(createTopic(form));
      dispatch(fetchTopicList());
      message.success("Created successfully");
    } catch (error) {
      message.error(error.error);
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
          Create
        </Button>
      ]}
    >
      <Row type="flex">
        <Col span={8}>
          <p>Title:</p>
        </Col>
        <Col span={16}>
          <Input onChange={e => setFormState("title", e)} />
        </Col>
        <Col span={8}>
          <p>Message:</p>
        </Col>
        <Col span={16}>
          <TextArea rows={8} onChange={e => setFormState("message", e)} />
        </Col>
      </Row>
    </Modal>
  );
};

export default CreateTopicModal;
