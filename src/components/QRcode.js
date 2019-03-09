import React, {useState, useRef} from "react";
import QrReader from "react-qr-scanner";

const QrCode = () => {
  const [result, setResult] = useState("")
  const ref = useRef("qrcode")
  console.log(ref, ref.current);
  
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
        onScan={data => setResult(data)}
        legacyMode={true}
      />
      <input type="button" value="Submit QR Code" onClick={() => ref.current.openImageDialog()} />
      <p>{result}</p>
    </>
  );
};

export default QrCode;
