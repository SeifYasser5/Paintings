import styled from "styled-components";

export const TableContainer = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
`;

export const TableHeaderCell = styled.th`
  padding: 1vh 1vw;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.primary};
  color: white;
`;

export const Img = styled.img`
  max-height: 8vh;
  padding: 1vh 1vw;
`;

export const TableCell = styled.td`
  padding: 1vh 1vw;
  border: 1px solid ${({ theme }) => theme.primary};
`;
