import React, { Component } from "react";
import QRcode from "./components/QRcode";

class App extends Component {
  render() {
    return (
      <>
        <h1>Qrcode</h1>
        <QRcode />
      </>
    );
  }
}

export default App;
