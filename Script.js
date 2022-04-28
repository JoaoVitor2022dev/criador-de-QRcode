const InputValue = document.querySelector('#imputValue'); 
const btnValue = document.querySelector('#btnValue'); 
const imgQrCode = document.querySelector('#imgQrCode'); 
const wrapper = document.querySelector('.wrapper'); 
let  valueDefault; 

//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example to

btnValue.addEventListener('click', () => {
  let qrcodeValue = InputValue.value.trim();
  if(!qrcodeValue || qrcodeValue === valueDefault ) return; 
}) 
