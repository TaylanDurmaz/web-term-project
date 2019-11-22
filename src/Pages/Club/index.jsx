import React from "react";
import { Row, Col, Tag, Popover } from "antd";
import { Card, Title } from "../../Components/Common";
import Styles from "./styles";
import { DUMMY_CLUB as CLUB } from "../../DUMMY_DATAS";

const arr = Array.apply(null, Array(20));

const StudentClubs = () => {
  const contactPersonContent = (
    <div className="contact-person">
      <span style={{ fontWeight: "bold" }}>Name: </span>
      <span>{`${CLUB.contactPerson.name} ${CLUB.contactPerson.surname}`}</span>
      <br />
      <span style={{ fontWeight: "bold" }}>Email: </span>
      <span>{CLUB.contactPerson.email}</span>
      <br />
      <span style={{ fontWeight: "bold" }}>Phone Number: </span>
      <span>{CLUB.contactPerson.phone}</span>
    </div>
  );

  return (
    <Styles>
      <Card>
        <Row type="flex">
          <Col span={6}>
            <img className="club-logo" src={CLUB.logo} />

            <Popover content={contactPersonContent}>
              <Tag color="blue" className="contact-person-tag">
                Contact Person
              </Tag>
            </Popover>
          </Col>
          <Col span={18}>
            <Title>{CLUB.name}</Title>

            <span>{CLUB.desc}</span>
          </Col>
        </Row>
      </Card>
    </Styles>
  );
};

export default StudentClubs;
