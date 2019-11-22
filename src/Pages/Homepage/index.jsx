import React from "react";
import { Row, Col, Button, List, Badge } from "antd";
import { Card, Title } from "../../Components/Common";
import SummaryCard from "../../Components/SummaryCard";
import { DUMMY_EVENTS, DUMMY_TOPICS } from "../../DUMMY_DATAS";
import HomepageStyles from "./styles";
import USER_PHOTO from "../../static/user-photo.jpg";

const Homepage = () => {
  return (
    <HomepageStyles>
      <Card className="summary-container">
        <div className="summary-container-top">
          <Title nomargin>Hot Topics</Title>
          <Button type="primary"> See All</Button>
        </div>
        <Row gutter={20} type="flex">
          <List
            bordered
            dataSource={DUMMY_TOPICS}
            renderItem={topic => (
              <List.Item>
                <Badge count={5} overflowCount={99}>
                  <img
                    className="list-user-photo"
                    src={USER_PHOTO}
                    alt="user"
                  />
                </Badge>
                <span className="list-item-content">{topic.title}</span>
              </List.Item>
            )}
          />
        </Row>
      </Card>

      <Card className="summary-container">
        <div className="summary-container-top">
          <Title nomargin>Upcoming Events</Title>
          <Button type="primary"> See All</Button>
        </div>

        <Row gutter={20} type="flex">
          {DUMMY_EVENTS.map(event => (
            <Col span={6}>
              <SummaryCard
                image={event.image}
                title={event.title}
                desc={event.desc}
              />
            </Col>
          ))}
        </Row>
      </Card>
    </HomepageStyles>
  );
};

export default Homepage;
