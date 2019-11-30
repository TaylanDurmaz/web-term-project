import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { Card } from "../Common";
import Styles from "./styles";

const SummaryCard = ({
  onClick,
  className,
  image,
  title,
  desc,
  time,
  place,
  owner
}) => {
  return (
    <Styles className={className}>
      <Card hoverable onClick={onClick} grow="true">
        <Row type="flex">
          <Col xs={24} md={8} lg={5}>
            <img className="card-image" src={image} alt="ClubLogo" />
          </Col>
          <Col xs={24} md={16} lg={19}>
            <p className="card-title"> {title}</p>
            <div className="card-detail">
              {owner && (
                <div>
                  <span style={{ fontWeight: "bold" }}>Club: </span>
                  <span>{owner}</span>
                </div>
              )}
              {time && (
                <div>
                  <span style={{ fontWeight: "bold" }}>Time: </span>
                  <span>{new Date(time).toLocaleString()}</span>
                </div>
              )}
              {place && (
                <div>
                  <span style={{ fontWeight: "bold" }}>Place: </span>
                  <span>{place}</span>
                </div>
              )}
            </div>
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
  owner: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  onClick: PropTypes.func
};
SummaryCard.defaultProps = {
  className: "",
  image: "",
  title: "",
  desc: "",
  owner: "",
  time: "",
  place: "",
  onClick: null
};

export default SummaryCard;
