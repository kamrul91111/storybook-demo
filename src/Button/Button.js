import styled from "@emotion/styled";

export const Button = styled.button`
  color: white;
  padding: 10px;
  border-radius: 5px;
  background-color: black;
  margin: 5px;
  cursor: pointer;
`;

// extending the Button component
export const PrimaryButton = styled(Button)`
  background-color: darkgreen;
`;

// extending the Button component, also takes props which dynamically changes its backround color
export const DangerButton = styled(Button)`
  background-color: ${props => (props.hovered === true ? "red" : "darkred")};
`;
