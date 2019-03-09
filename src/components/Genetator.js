import React from "react";
import { QRCode } from "react-qr-svg";

const Generator = () => {
  return (
    <>
      <QRCode
        level="Q"
        style={{ width: 256 }}
        value={JSON.stringify({
          id: 928328,
          name: "Jack"
        })}
      />
    </>
  );
};

export default Generator;
