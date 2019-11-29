import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Button, Icon, Badge, Popover } from "antd";
import { Card, Title } from "../../Components/Common";
import CreateTopicModal from "./CreateTopicModal";
import { fetchTopicList } from "../../redux/topics/api";
import Styles from "./styles";

const Forum = () => {
  const [loading, setLoading] = useState(true);
  const [createTopicVisible, setCreateTopicVisible] = useState(false);
  const topicList = useSelector(state => state.topics.topicList);
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    setCreateTopicVisible(false);
  };

  useEffect(() => {
    async function cdm() {
      await dispatch(fetchTopicList());
      setLoading(false);
    }
    cdm();
  }, []);

  return (
    <Styles>
      <Row type="flex" justify="space-between">
        <Title>Forum</Title>
        <Button type="primary" onClick={() => setCreateTopicVisible(true)}>
          Ask Anything?
        </Button>
      </Row>

      {topicList.map(topic => (
        <Popover content={topic.message}>
          <Card
            onClick={() =>
              history.push({
                pathname: "/forum/topic",
                state: { topic }
              })
            }
            hoverable
          >
            <Row type="flex" align="middle">
              <Badge
                showZero
                count={topic.commentCount}
                style={{ backgroundColor: "#1EA5F9" }}
              >
                <Icon theme="twoTone" type="message" />
              </Badge>
              <span className="topic">{topic.title}</span>
            </Row>
          </Card>
        </Popover>
      ))}

      <CreateTopicModal visible={createTopicVisible} onClose={closeModal} />
    </Styles>
  );
};

export default Forum;
