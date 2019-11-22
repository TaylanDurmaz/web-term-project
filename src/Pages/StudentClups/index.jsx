import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { Title } from "../../Components/Common";
import SummaryCard from "../../Components/SummaryCard";
import Styles from "./styles";
import { DUMMY_CLUB as CLUB } from "../../DUMMY_DATAS";

const arr = Array.apply(null, Array(20));

const StudentClubs = () => {
  const history = useHistory();

  return (
    <Styles>
      <Title> Student Clubs </Title>
      <Row type="flex" gutter={40}>
        {arr.map(() => (
          <Col span={8}>
            <SummaryCard
              title={CLUB.name}
              image={CLUB.logo}
              desc={CLUB.desc}
              onClick={() => history.push("/clubs/detail")}
            />
          </Col>
        ))}
      </Row>
    </Styles>
  );
};

export default StudentClubs;
