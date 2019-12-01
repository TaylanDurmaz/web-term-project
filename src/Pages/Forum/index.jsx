import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button, message } from "antd";
import { Title } from "../../Components/Common";
import TopicCard from "../../Components/TopicCard";
import CreateTopicModal from "./CreateTopicModal";
import { fetchTopicList } from "../../redux/topics/api";
import Styles from "./styles";

const Forum = () => {
  const [loading, setLoading] = useState(true);
  const [createTopicVisible, setCreateTopicVisible] = useState(false);
  const topicList = useSelector(state => state.topics.topicList);
  const dispatch = useDispatch();

  const closeModal = () => {
    setCreateTopicVisible(false);
  };

  useEffect(() => {
    async function cdm() {
      try {
        await dispatch(fetchTopicList());
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
        <Title>Forum</Title>
        <Button type="primary" onClick={() => setCreateTopicVisible(true)}>
          Ask
        </Button>
      </Row>

      {topicList.map((topic, idx) => (
        <TopicCard topic={topic} key={`topic-card${idx}`} />
      ))}

      <CreateTopicModal visible={createTopicVisible} onClose={closeModal} />
    </Styles>
  );
};

export default Forum;
