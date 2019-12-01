import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Row, Input, Col, message } from "antd";
import Styles from "./styles";
import { signUp } from "../../../redux/auth/api";

const SignUpModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    phoneNumber: ""
  });
  const [loading, setLoading] = useState(false);

  const onSubmitSignUp = async () => {
    setLoading(true);
    try {
      await dispatch(signUp(form));
      message.success("You have signed up successfully");
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
      title="Sign Up"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={onSubmitSignUp}
          loading={loading}
          disabled={loading}
        >
          Create
        </Button>
      ]}
    >
      <Styles>
        <Row type="flex">
          <Col span={8}>
            <p>Email:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("email", e)} />
          </Col>
          <Col span={8}>
            <p>Password:</p>
          </Col>
          <Col span={16}>
            <Input
              type="password"
              onChange={e => setFormState("password", e)}
            />
          </Col>
          <Col span={8}>
            <p>Name:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("name", e)} />
          </Col>
          <Col span={8}>
            <p>Surname:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("surname", e)} />
          </Col>
          <Col span={8}>
            <p>Phone Number:</p>
          </Col>
          <Col span={16}>
            <Input onChange={e => setFormState("phoneNumber", e)} />
          </Col>
        </Row>
      </Styles>
    </Modal>
  );
};

export default SignUpModal;
