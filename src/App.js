import React, { useState } from "react";
// import QRcode from "./components/QRcode";
import Generator from "./components/Genetator";

export const QrCodeContext = React.createContext();

const App = () => {
  const [result, setResult] = useState("");

  const scanned = value => {
    setResult(value);
  };

  return (
    <QrCodeContext.Provider value={{ result, scanned }}>
      {/* <QRcode /> */}
      <Generator />
    </QrCodeContext.Provider>
  );
};

export default App;
