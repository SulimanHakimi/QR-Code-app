const button = document.querySelector(".submitBtn");
const homeBtn = document.querySelector(".home");
const restart = document.getElementById("restart");
let input = document.getElementById("input");
let imagePage = document.querySelector(".imagePage");
let generatePage = document.querySelector(".generate");
let data = [];
let qrData = JSON.parse(localStorage.getItem("QrCode"));
button.addEventListener("click", () => {
  imagePage.innerHTML = "";
  if (input.value != "") {
    const qrCodSrc = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;
    imagePage.style.display = "flex";
    generatePage.style.display = "none";
    homeBtn.style.display = "block";
    data.push({
      qrCodSrc: qrCodSrc,
    });
    localStorage.setItem("QrCode", JSON.stringify(data));
    setData();
  } else {
    alert("input empty");
  }
});
restart.addEventListener("click", () => {
  localStorage.removeItem("QrCode");
  location.reload();
});

homeBtn.addEventListener("click", () => {
  imagePage.style.display = "none";
  generatePage.style.display = "flex";
  homeBtn.style.display = "none";
});
function setData() {
  let qrData = JSON.parse(localStorage.getItem("QrCode"));
  qrData.map((qr) => {
    imagePage.innerHTML += `<img src=${qr.qrCodSrc} alt="">`;
  });
}
