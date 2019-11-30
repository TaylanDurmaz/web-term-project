import styled from "styled-components";

export default styled.div`
  .ant-col {
    margin-top: 10px;
  }
  .upload-button {
    display: flex;
    flex-direction: row-reverse;
    margin-top: ${props => props.theme.spaces.normal};
  }
`;
