import { GlobalStyles } from "./global-styles";

const CustomProvider = ({ children, ...props }) => {
  return <GlobalStyles {...props}>{children}</GlobalStyles>;
};

export default CustomProvider;
