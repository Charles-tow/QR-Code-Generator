import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

function App() {
  const [url, setUrl] = useState("");
  const [qrCodeImg, setQrCodeImg] = useState("");

  function handleImg(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      { width: 600, margin: 3 },
      function (err, url) {
        setQrCodeImg(url);
      }
    );
  }

  function handleQrCode(e) {
    setUrl(e.target.value);
    handleImg(e.target.value);
  }

  return (
    <div className="container">
      <h1>GERADOR DE QR CODE</h1>
      <QRCode value={url} />

      <input
        className="input"
        type="text"
        placeholder="Digite sua URL..."
        value={url}
        onChange={(e) => handleQrCode(e)}
      />

      <a href={qrCodeImg} download={url || "qrcode.png"}>
        Baixar imagem
      </a>
    </div>
  );
}

export default App;
