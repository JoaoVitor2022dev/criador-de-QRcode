const inputValue = document.querySelector('#inputValue'); 
const btnValue = document.querySelector('#btnValue'); 
const imgQRcode = document.querySelector('#imgQRcode'); 
const wrapper = document.querySelector('.wrapper'); 
let valueDeFault; 


/*https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example */


btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    if(!qrcodeValue || qrcodeValue === valueDeFault ) return;  
    valueDeFault = qrcodeValue;
    btnValue.innerText = 'Gerand QR code...' 
    imgQRcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    imgQRcode.addEventListener('load',() => {
        wrapper.classList.add('active'); 
        btnValue.innerText = 'Gerar QRcode'
    })
})
