import styled from "styled-components";

export default styled.div`
  margin-bottom: 20px;

  .topic {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;
  }
  .message-owner {
    font-weight: bold;
  }

  .comment {
    .ant-card-body {
      padding: 10px;
    }
  }

  .input-section {
    margin-top: 20px;
    display: flex;
    height: 100%;
    .comment-input {
      border-radius: 4px 0px 0px 4px;
    }
    .ant-btn {
      height: initial !important;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;
