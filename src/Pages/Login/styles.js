import styled from "styled-components";

export default styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.sider.linear1},
    ${props => props.theme.colors.sider.linear2}
  );

  .image-container {
    display: flex;
    justify-content: center;
  }
  .form-container {
    margin-top: ${props => props.theme.spaces.veryBig};
    .input-field {
      margin-top: ${props => props.theme.spaces.normal};
      height: 40px;
    }
    .submit-button {
      margin-top: ${props => props.theme.spaces.veryBig};
      width: 100%;
    }
    .sign-up-button {
      margin-top: ${props => props.theme.spaces.normal};
      width: 100%;
    }
  }
`;
