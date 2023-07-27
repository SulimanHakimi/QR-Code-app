let button = document.getElementById("btn");
let restart = document.getElementById("restart");
let qrImg = document.getElementById("qrImg");
let allPage = document.getElementById("all");
let img = document.getElementById("img");


button.addEventListener("click", ()=>{
    let input = document.getElementById("input").value;
    allPage.style.display = "none";
    qrImg.style.display = "flex";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input}`;
});
restart.addEventListener("click",()=>{
    allPage.style.display = "flex";
    qrImg.style.display = "none";
    document.getElementById("input").value = "";


})