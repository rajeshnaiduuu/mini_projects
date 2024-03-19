
document.getElementById("button").onclick=function genaratorOTP(){
    let otp="";
    let digit="1234567890";
    for (let i=0;i<4;i++){
         otp += digit[Math.floor(Math.random()*10)];

    }
    document.getElementById("input2").value = otp;
}
