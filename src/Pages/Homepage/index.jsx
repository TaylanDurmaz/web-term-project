import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Spin } from "antd";
import { Card, Title } from "../../Components/Common";
import SummaryCard from "../../Components/SummaryCard";
import HomepageStyles from "./styles";
import { fetchHotTopicList } from "../../redux/topics/api";
import { fetchUpcomingEventsList } from "../../redux/events/api";
import TopicCard from "../../Components/TopicCard";

const Homepage = () => {
  const [hotTopics, sethotTopics] = useState([]);
  const [loadingHotTopics, setLoadingHotTopics] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loadingUpcomingEvents, setLoadingUpcomingEvents] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  async function getHotTopics() {
    const response = await dispatch(fetchHotTopicList());
    sethotTopics(response.data);
    setLoadingHotTopics(false);
  }
  async function getUpcomingEvents() {
    const response = await dispatch(fetchUpcomingEventsList());
    setUpcomingEvents(response.data);
    setLoadingUpcomingEvents(false);
  }

  useEffect(() => {
    getHotTopics();
    getUpcomingEvents();
  }, []);

  return (
    <HomepageStyles>
      <Card className="summary-container" loading={loadingHotTopics}>
        <div className="summary-container-top">
          <Title nomargin>Hot Topics</Title>
          <Button type="primary" onClick={() => history.push("/forum")}>
            See All
          </Button>
        </div>
        {hotTopics.map((topic, idx) => (
          <TopicCard topic={topic} key={`topic-card${idx}`} />
        ))}
      </Card>

      <Card className="summary-container" loading={loadingUpcomingEvents}>
        <div className="summary-container-top">
          <Title nomargin>Upcoming Events</Title>
          <Button type="primary" onClick={() => history.push("/events")}>
            See All
          </Button>
        </div>
        {upcomingEvents.map((event, idx) => (
          <SummaryCard
            key={`event-card-${idx}`}
            title={event.name}
            desc={event.desc}
            time={event.time}
            place={event.place}
            image={event.imageUrl}
            owner={event.owner.name}
          />
        ))}
      </Card>
    </HomepageStyles>
  );
};

export default Homepage;
