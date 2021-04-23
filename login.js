function login() { 
    var name=document.getElementById("name").value;
    var pass=document.querySelector("#pass").value;
    if(name.length===5 && pass.length===5)
    {
         alert("name : " + name +"\n " + " pass : " + pass);
         alert("login success");
        location.replace("cabtype.html");
    }
}
