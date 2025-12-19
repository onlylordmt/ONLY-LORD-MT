const WHATSAPP_NUMBER = "59162276138";

function buyProduct(name, price){
const msg = `Hola, quiero comprar:
${name}
Precio: $${price} USD`;
window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank');
}

const modal = document.getElementById("productModal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-description");
const yt = document.getElementById("modal-youtube");
const buyBtn = document.getElementById("buy-btn");

function openProductDetail(name, price, description, ytID){
modal.style.display="flex";
title.textContent=name;
desc.textContent=`${description} | Precio: $${price} USD`;
yt.src=`https://www.youtube.com/embed/${ytID}`;
buyBtn.onclick=()=>buyProduct(name,price);
}

function closeProductDetail(){
modal.style.display="none";
yt.src="";
}

const customModal = document.getElementById("customModal");

function openCustomModal(){ customModal.style.display="flex"; }
function closeCustomModal(){ customModal.style.display="none"; }

function sendCustomForm(){
const name=document.getElementById("custom-name").value;
const det=document.getElementById("custom-details").value;
const msg=`Hola, quiero un multitrack personalizado:
${name}
${det}`;
window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank');
}

window.onclick=(e)=>{
if(e.target==modal) closeProductDetail();
if(e.target==customModal) closeCustomModal();
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
}
});
