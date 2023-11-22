import React, { useState } from "react";
import "./qr.css";
import QRCode from "qrcode";
import axios from "axios";

function GenerateQRButton(props) {
  const [qrCodeDataURL, setQRCodeDataURL] = useState(null);

  const generateQRCode = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://20.2.80.190:5100/api/guardian/CreateQRCode",
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      const qrToken = response.data.qrToken;
      const dataURL = await QRCode.toDataURL(qrToken);
      setQRCodeDataURL(dataURL);
    } catch (error) {
      console.error("Failed to generate QR code:", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeDataURL) return;

    const link = document.createElement("a");
    link.href = qrCodeDataURL;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="qr">
      <button className="generate-qr-button" onClick={generateQRCode}>
        Generate QR
      </button>
      {qrCodeDataURL && (
        <>
          <img src={qrCodeDataURL} alt="QR code" />
          <button className="download-qr-button" onClick={downloadQRCode}>
            Download QR
          </button>
        </>
      )}
    </div>
  );
}

export default GenerateQRButton;
