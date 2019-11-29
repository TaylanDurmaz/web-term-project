import styled from "styled-components";
import { Card as CardAntd } from "antd";

export const Title = styled.p`
  font-size: ${props => props.theme.fonts.title};
  margin-bottom: ${props => props.nomargin && "0px"};
`;

export const Card = styled(CardAntd)`
  width: ${props => props.fullwidth && "100%"};
  margin: 10px 0px !important;
  border-radius: 10px !important;
  overflow: ${props => props.overflow};

  ${props =>
    props.hoverable &&
    `&:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;
  }`}
`;
