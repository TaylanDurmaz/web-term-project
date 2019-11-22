import React from "react";
import { Row, Col, Button, List, Badge } from "antd";
import { Card, Title } from "../../Components/Common";
import { DUMMY_CLUB } from "../../DUMMY_DATAS";

const StudentClubs = () => {
  return (
    <Card className="summary-container">
      <Row type="flex">
        <Col span={8}>
          <img className="club-logo" src={DUMMY_CLUB.logo} alt="club-logo" />
        </Col>
      </Row>
    </Card>
  );
};

export default StudentClubs;
