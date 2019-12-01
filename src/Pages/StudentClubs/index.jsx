import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button, Card } from "antd";
import { Title } from "../../Components/Common";
import SummaryCard from "../../Components/SummaryCard";
import CreateClubModal from "./CreateClubModal";
import { fetchClubList } from "../../redux/clubs/api";

const StudentClubs = () => {
  const [loading, setLoading] = useState(true);
  const [createClubVisible, setCreateClubVisible] = useState(false);
  const clubList = useSelector(state => state.clubs.clubList);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function cdm() {
      await dispatch(fetchClubList());
      setLoading(false);
    }
    cdm();
  }, []);

  return (
    <>
      <Row type="flex" justify="space-between">
        <Title>Student Clubs</Title>
        {user && user.role === 2 && (
          <>
            <Button type="primary" onClick={() => setCreateClubVisible(true)}>
              Add Club
            </Button>
            <CreateClubModal
              visible={createClubVisible}
              onClose={() => setCreateClubVisible(false)}
            />
          </>
        )}
      </Row>
      {loading ? (
        <Card loading={loading} />
      ) : (
        clubList.map((club, idx) => (
          <SummaryCard
            key={`club-card-${idx}`}
            className="club-card"
            title={club.name}
            desc={club.desc}
            image={club.logoUrl}
          />
        ))
      )}
    </>
  );
};

export default StudentClubs;
