import styled from "styled-components";

export default styled.div`
  .summary-container {
    background: #fff;

    .summary-container-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .ant-list-item {
      height: 50px;
      white-space: nowrap;

      .list-user-photo {
        height: 35px;
        width: 35px;
        border-radius: 4px;
      }
      .list-item-content {
        margin-left: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .ant-list {
      width: 100%;
    }
  }
`;
