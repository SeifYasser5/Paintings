import styled from "styled-components";

export const AddPaintingContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  border: 4px solid ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.radius};
  max-width: 40vw;
  margin: 0 auto;
  padding: 2vh 2vw;

  input {
    margin-bottom: 2vh;
    width: 100%;
  }
`;

export const Error = styled.div`
  color: red;
  font-weight: 600;
  margin-bottom: 2vh;
`;
