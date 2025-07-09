const qr = new QRious({
  element: document.getElementById("qrCanvas"),
  size: 250,
  value: ""
});

const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const qrLabel = document.getElementById("qrLabel");
const downloadBtn = document.getElementById("downloadBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");

generateBtn.addEventListener("click", () => {
  const value = qrText.value.trim();
  if (!value) {
    alert("Please enter text or a URL.");
    return;
  }
  qr.value = value;
  qrLabel.textContent = `QR for: ${value}`;
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
