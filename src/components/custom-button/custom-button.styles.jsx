/** @format */
import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: ${({ primary }) => (primary ? "#000000" : "#555555")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#000000")};
  align-self: center;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 6em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: ${({ primary }) => (primary ? "#ffffff" : "#000000")};
  }

  &:hover {
    transition: 0.5s ease;
    transform: translateY(-2px);
  }
`;
