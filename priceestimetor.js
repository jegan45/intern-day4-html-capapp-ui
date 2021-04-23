// class priceestimetor {
    function calculateFarePrice(km,cabtype)
    {       
        var farePrice = 0;
        if(cabtype=="micro")
        {
            farePrice = km * 10;
            // gst = FarePrice + ((FarePrice * 7) / 100);            
        }
        else if(cabtype=="mini")
        {
            farePrice= km*15;
        }
        else{
            farePrice =km*20;
        }
        return farePrice;
    }
    function calculateGst(farePrice)
    {      
        var gst=0;
            gst = farePrice + ((farePrice * 7) / 100);
        return gst;
    }
    function getCabType() {
        //alert("cab");       
        var cab ="";
        cab= document.getElementById("cabtype").value;
        return cab;
    }
    function getKilometer() { 
        var km = 0;
        km = document.getElementById("km").value;
        return km;
    }
    function priceestimetor() {
        event.preventDefault();
        var cab = getCabType();
        console.log("cab : " + cab);
        var km = getKilometer();
        console.log("km : ", km);
        
       var FarePrice= calculateFarePrice(km,cab);
       console.log("fare : ", FarePrice);
       localStorage.setItem("fareprice", FarePrice);
        var GST= calculateGst(FarePrice);
        console.log("GST  ", GST);
        document.getElementById("fareprice").innerHTML = FarePrice;
        document.getElementById("gst").innerHTML = GST;
        //location.replace("peaktime.html");
    }
// }