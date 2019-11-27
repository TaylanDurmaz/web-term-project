import styled from "styled-components";

export default styled.div`
  .ant-card {
    .ant-card-cover {
      .card-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }
    }
    .ant-card-meta-title {
      white-space: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    height: 300px;
    overflow: hidden;
  }
`;
