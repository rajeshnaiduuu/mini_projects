var time=document.getElementsByClassName("timer")//taking the element from documnet

var timings=1; //instilise the timings 
var i=0; 
var myinterval=setInterval(Timeout,1000);//set time interval
function Timeout(){                          //and make function to move timer
var  Seconds=((timings*60-i)%60);             // this logic displays the seconds time
var   Minutes=parseInt(((timings*60-i)/60)); // it dispalys the minutes

    if(Seconds>=10){           // if it is in double digits it will work on only if block
        time[0].innerHTML=Minutes+":"+Seconds;
    }

    else{
        time[0].innerHTML=Minutes+":0"+Seconds;  //whennever it wil come single digit else block will excute and it adds the "0"
    }

    i++;   // it will increment the number s  
} 

