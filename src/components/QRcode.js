import React, { useRef, useContext } from "react";
import QrReader from "react-qr-scanner";
import { QrCodeContext } from "../App";

const QrCode = () => {
  const { result, scanned } = useContext(QrCodeContext);
  const ref = useRef("qrcode");

  return (
    <>
      <QrReader
        ref={ref}
        delay={100}
        style={{
          height: 320,
          width: 320
        }}
        onError={err => console.log(err)}
        onScan={data => scanned(data)}
        legacyMode={true}
      />
      <input
        type="button"
        value="Submit QR Code"
        onClick={() => ref.current.openImageDialog()}
      />
      <p>{result}</p>
    </>
  );
};

export default QrCode;
