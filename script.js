let btn=document.getElementById('btn');
let qrinp=document.getElementById('qr');
let qrimg=document.getElementById('qrImg');
btn.addEventListener('click',()=>{
    let inputvalue=qrinp.value;
    if(inputvalue==""){
        alert("Please enter some text!");
        return;
    }
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrimg.src=url;
    qrImg.style.display = "block";
    setTimeout(() => {
        qrimg.src = "";
        qrimg.style.display = "none";
        qrinp.value = ""; // Clear the input value
    }, 2*1000);
})