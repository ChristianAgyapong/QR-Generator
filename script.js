const qr = new QRious({
  element: document.getElementById("qrCanvas"),
  size: 250,
  value: ""
});

const qrText = document.getElementById("qrText");
const qrSize = document.getElementById("qrSize");
const fgColor = document.getElementById("fgColor");
const bgColor = document.getElementById("bgColor");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const qrLabel = document.getElementById("qrLabel");
const downloadBtn = document.getElementById("downloadBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");

function generateQR() {
  const value = qrText.value.trim();
  if (!value) {
    alert("Please enter text or a URL.");
    return;
  }
  qr.set({
    value: value,
    size: parseInt(qrSize.value),
    foreground: fgColor.value,
    background: bgColor.value
  });
  qrLabel.textContent = `QR for: ${value}`;
}

generateBtn.addEventListener("click", generateQR);

qrSize.addEventListener("input", () => {
  qr.size = parseInt(qrSize.value);
});

fgColor.addEventListener("input", () => {
  qr.foreground = fgColor.value;
});

bgColor.addEventListener("input", () => {
  qr.background = bgColor.value;
});

clearBtn.addEventListener("click", () => {
  qrText.value = "";
  qr.value = "";
  qrLabel.textContent = "";
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qr.toDataURL();
  link.download = "qrcode.png";
  link.click();
});

copyLinkBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(qr.toDataURL()).then(() => {
    alert("QR code image copied to clipboard!");
  });
});
