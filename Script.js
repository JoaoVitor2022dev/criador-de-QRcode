const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");  

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.qrValue;
    console.log(qrValue); 
    wrapper.classList.add("active"); 
}); 

const InputValue = document.querySelector('#imputValue'); 
const btnValue = document.querySelector('#btnValue'); 
