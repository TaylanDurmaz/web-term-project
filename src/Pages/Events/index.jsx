import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button, message } from "antd";
import { Title, Card } from "../../Components/Common";
import SummaryCard from "../../Components/SummaryCard";
import CreateEventModal from "./CreateEventModal";
import { fetchEventList } from "../../redux/events/api";
import Styles from "./styles";

const Forum = () => {
  const [loading, setLoading] = useState(true);
  const [createEventVisible, setCreateEventVisible] = useState(false);
  const user = useSelector(state => state.auth.user);
  const eventList = useSelector(state => state.events.eventList);
  const dispatch = useDispatch();

  useEffect(() => {
    async function cdm() {
      try {
        await dispatch(fetchEventList());
        setLoading(false);
      } catch (error) {
        message.error(error.message);
      }
    }
    cdm();
  }, []);

  return (
    <Styles>
      <Row type="flex" justify="space-between">
        <Title>Events</Title>
        {user.role === 1 && (
          <Button type="primary" onClick={() => setCreateEventVisible(true)}>
            <span role="img" aria-label="party">
              Create Event 🎉
            </span>
          </Button>
        )}
      </Row>

      {loading ? (
        <Card loading={loading} />
      ) : (
        eventList.map((event, idx) => (
          <SummaryCard
            key={`event-card-${idx}`}
            title={event.name}
            desc={event.desc}
            time={event.time}
            place={event.place}
            image={event.imageUrl}
            owner={event.owner.name}
          />
        ))
      )}

      {user.role === 1 && (
        <CreateEventModal
          visible={createEventVisible}
          onClose={() => setCreateEventVisible(false)}
        />
      )}
    </Styles>
  );
};

export default Forum;
