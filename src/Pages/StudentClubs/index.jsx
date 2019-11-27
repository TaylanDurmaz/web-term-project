import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import { Card } from "../../Components/Common";
import { fetchClubList } from "../../redux/clubs/api";
import { DUMMY_CLUB } from "../../DUMMY_DATAS";

const StudentClubs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const clubList = useSelector(state => state.clubs.clubList);

  useEffect(() => {
    async function cdm() {
      await dispatch(fetchClubList());
      setLoading(false);
    }
    cdm();
  }, []);

  return (
    <Card className="summary-container">
      {loading ? (
        <Spin />
      ) : (
        <Row type="flex">
          {clubList.map(club => (
            <Col span={8}>
              <Card title={club.name} desc={club.desc} />
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
};

export default StudentClubs;
