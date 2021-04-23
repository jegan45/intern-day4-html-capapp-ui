function peaktime()
{
    var amount=localStorage.getItem("fareprice");
    var total =0;
   var time=" ";
   time = document.getElementById("peaktime").value;
   var peaktime= parseInt( time.slice(0,2));
   if(peaktime>=15 && peaktime<=19)
   {
       total=parseInt(amount) + ((amount * 1.25)/100);
       document.getElementById("fare").innerHTML=total;
   }
}