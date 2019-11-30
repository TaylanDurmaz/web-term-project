import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Input, Icon, Button, message } from "antd";
import { Card } from "../../Components/Common";
import SignUpModal from "./SignUpModal";
import LoginStyles from "./styles";
import BAU_PNG from "../../static/bau.png";
import { tryLogin } from "../../redux/auth/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setLoading(true);
    try {
      await dispatch(tryLogin({ email, password }));
    } catch (error) {
      message.error("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <LoginStyles>
      <Row type="flex" justify="center">
        <Col xs={20} md={16}>
          <Card>
            <div className="image-container">
              <img src={BAU_PNG} alt="BAU" />
            </div>

            <Row className="form-container" type="flex" justify="center">
              <Col xs={24} md={18} lg={14}>
                <Input
                  className="input-field"
                  onChange={e => setEmail(e.target.value)}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              </Col>
              <Col xs={24} md={18} lg={14}>
                <Input
                  className="input-field"
                  onChange={e => setPassword(e.target.value)}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Col>
              <Col xs={24} md={18} lg={14}>
                <Button
                  type="primary"
                  className="submit-button"
                  loading={loading}
                  onClick={onSubmit}
                >
                  Login
                </Button>
              </Col>
              <Col xs={24} md={18} lg={14}>
                <Button
                  className="sign-up-button"
                  onClick={() => setSignUpVisible(true)}
                >
                  Sign Up
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <SignUpModal
        visible={signUpVisible}
        onClose={() => setSignUpVisible(false)}
      />
    </LoginStyles>
  );
};

export default Login;
