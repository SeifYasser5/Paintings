import styled from "styled-components";

export const ButtonBase = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.radius};
  color: white;
  padding: 1vh 1vw;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  :hover {
    background-color: white;
    color: ${({ theme }) => theme.primary};
  }
`;
