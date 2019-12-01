import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Icon, Badge, Popover } from "antd";
import { Card } from "../Common";
import Styles from "./styles";

const TopicCard = ({ topic }) => {
  const history = useHistory();

  const popoverContent = (
    <>
      <span style={{ fontWeight: "bold" }}>{`${topic.owner.name}: `}</span>
      <span>{topic.message}</span>
    </>
  );

  const badgeColor = count => {
    if (count >= 10) return "red";
    if (count >= 5) return "#00e216";

    return "#1EA5F9";
  };

  return (
    <Styles>
      <Popover content={popoverContent}>
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
              style={{ backgroundColor: badgeColor(topic.commentCount) }}
            >
              <Icon theme="twoTone" type="message" />
            </Badge>
            <span className="topic">{topic.title}</span>
          </Row>
        </Card>
      </Popover>
    </Styles>
  );
};

export default TopicCard;
