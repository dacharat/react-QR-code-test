import React, { useState } from "react";
import { QRCode } from "react-qr-svg";
import styled from "styled-components";

const Border = styled.div`
  text-align: center;
`;
const Text = styled.h1`
  margin: 20px;
  text-align: center;
`;
const Input = styled.div`
  margin: 20px;
  text-align: center;
`;

const Generator = () => {
  const [id, setId] = useState(928328);
  const [table, setTable] = useState(0);

  const handleIdChange = value => {
    setId(value);
  };

  const handleTableChange = value => {
    setTable(value);
  };

  return (
    <Border>
      <Text>QRCode with JSON</Text>
      <QRCode
        level="Q"
        style={{ width: 256 }}
        value={JSON.stringify({
          id: id,
          table: table
        })}
      />
      <Input>
        id:
        <input
          placeholder="please input id"
          onChange={e => handleIdChange(e.target.value)}
          value={id}
        />
        table:
        <input
          placeholder="please input table"
          onChange={e => handleTableChange(e.target.value)}
          value={table}
        />
      </Input>
    </Border>
  );
};

export default Generator;
