var farePrice=localStorage.getItem("fareprice");
console.log(farePrice);
function dateofbirth() {
    var finalcharge = 0;
    var dob = "";
    dob = document.getElementById("dateOfBirth").value;
    console.log("Date : " + dob);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var birthyear = dob.slice(0, 4);
    var age = parseInt(currentYear) - parseInt(birthyear);
    document.getElementById("age").innerHTML=age;
    console.log("Age : " + age);
     if (age >= 60) {
       finalcharge = farePrice / 2;
       document.getElementById("finalcharge").innerHTML=finalcharge;
       document.getElementById("citizen").checked = true;
     }
    console.log("finalcharge : " + finalcharge);
}