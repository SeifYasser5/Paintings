import React from "react";
import { Dictionary } from "../../utils/types";
import { Img, TableCell, TableContainer, TableHeaderCell } from "./styles";

interface TableProps {
  data: Dictionary[];
}

const Table: React.FunctionComponent<TableProps> = ({ data }) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  if (data.length === 0) return null;

  return (
    <TableContainer>
      <thead>
        <tr>
          {headers.map((header) => (
            <TableHeaderCell key={header}>{header}</TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.keys(row).map((key) => (
              <TableCell key={key}>
                {key === "image" ? (
                  <Img src={row[key]} alt="Painting" />
                ) : (
                  row[key]
                )}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
