import React from "react";
import Table from "../../components/Table";
import { usePaintings } from "../../state/painting/hooks";

const Paintings: React.FC = () => {
  const paintings = usePaintings();

  return <Table data={paintings} />;
};

export default Paintings;
