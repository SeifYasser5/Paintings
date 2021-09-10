import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: left;
`;

export const InputLabel = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.5vh;
`;

export const InputBase = styled.input<{ error?: boolean }>`
  box-sizing: border-box;
  border: 2px solid ${({ theme, error }) => (error ? "red" : theme.primary)};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1vh 1vw;

  ::placeholder {
    font-weight: 700;
  }
`;
