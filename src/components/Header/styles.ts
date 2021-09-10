import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-bottom: 5vh;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    margin: 0 2vw;
    font-size: 20px;
    font-weight: 600;
  }
`;
