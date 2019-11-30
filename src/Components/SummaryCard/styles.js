import styled from "styled-components";

export default styled.div`
  .card-image {
    max-height: 150px;
    max-width: 150px;
    border-radius: 5px;
    margin-right: 10px;
  }

  .card-title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .card-detail {
    margin-bottom: 10px;
  }
`;
