import { StyledButton } from "./styles";

function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button;
