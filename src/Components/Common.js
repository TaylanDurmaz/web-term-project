import styled from "styled-components";
import { Card as CardAntd } from "antd";

export const Title = styled.p`
  font-size: ${props => props.theme.fonts.title};
  margin-bottom: ${props => props.nomargin && "0px"};
`;

export const Card = styled(CardAntd)`
  width: ${props => props.fullwidth && "100%"};
  margin: 10px !important;
  border-radius: 10px !important;
  overflow: ${props => props.overflow};

  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // &:hover {
  //   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
  // }
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
