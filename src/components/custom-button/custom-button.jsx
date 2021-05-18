/** @format */

import { ButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default CustomButton;
