const wrapper = document.querySelector('.wrapper'),
qrInput = document.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerHTML = 'Generando codigo QR...'
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=175x175&bgcolor=EEEEEE&data=${qrValue}`;
    qrImg.addEventListener('load', () =>{
        wrapper.classList.add("active");
        generateBtn.innerHTML = 'Generar QR'
    });
});

qrInput.addEventListener('keyup', () =>{
    if(!qrInput.value){
        wrapper.classList.remove('active');
    }
})