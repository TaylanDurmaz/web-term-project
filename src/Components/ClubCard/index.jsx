import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { Card } from "../Common";
import Styles from "./styles";

const SummaryCard = ({ onClick, className, image, title, desc }) => {
  return (
    <Styles className={className}>
      <Card hoverable onClick={onClick} fullwidth="true">
        <Row type="flex">
          <Col xs={24} md={8} lg={5}>
            <img className="card-image" src={image} alt="ClubLogo" />
          </Col>
          <Col xs={24} md={16} lg={19}>
            <p className="card-title"> {title}</p>
            <span className="card-desc"> {desc}</span>
          </Col>
        </Row>
      </Card>
    </Styles>
  );
};

SummaryCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  onClick: PropTypes.func
};
SummaryCard.defaultProps = {
  image: "",
  title: "",
  desc: "",
  className: "",
  onClick: () => null
};

export default SummaryCard;
