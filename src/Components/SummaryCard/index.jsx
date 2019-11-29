import React from "react";
import PropTypes from "prop-types";
import { Card } from "../Common";
import SummaryCardStyles from "./styles";

const { Meta } = Card;

const SummaryCard = ({ image, title, desc, onClick, className }) => {
  return (
    <SummaryCardStyles className={className}>
      <Card
        hoverable
        cover={<img className="card-image" alt="car-img" src={image} />}
        onClick={onClick}
        fullwidth
      >
        <Meta title={title} description={desc} />
      </Card>
    </SummaryCardStyles>
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
  onClick: () => {}
};

export default SummaryCard;