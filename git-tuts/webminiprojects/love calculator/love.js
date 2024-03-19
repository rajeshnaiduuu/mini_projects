function love(){
   var name21= document.getElementById('name1').value;
    var name12=document.getElementById('name2').value;
    if( name12.length<=2){
        alert("enter more than 2 charcters")
    }
    if( name21.length<=2){
        alert("enter more than 2 charcters")
    }
    else{
        var random=Math.floor(Math.random()*100);
        document.getElementById('result').innerHTML=name12+" AND "+name21+"="+  random  + "%"  +  "OF LOVE :";
    }
}