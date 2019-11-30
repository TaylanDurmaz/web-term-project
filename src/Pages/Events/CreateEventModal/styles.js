import styled from "styled-components";

export default styled.div`
  .ant-col {
    margin-top: 10px;
  }

  .ant-calendar-picker {
    width: 100%;
  }
  .upload-button {
    display: flex;
    flex-direction: row-reverse;
    margin-top: ${props => props.theme.spaces.normal};
  }
`;
