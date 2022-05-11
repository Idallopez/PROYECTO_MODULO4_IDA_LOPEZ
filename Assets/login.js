
let jsboton=document.getElementById("boton");
if(jsboton != null){
    jsboton.addEventListener("click", ()=>{
        
        let alertUser=document.getElementById("alertUser");
        let user=document.getElementById("user").value;
        let psw=document.getElementById("psw").value;
        if(user==="Admin" && psw==="Kuepa2022"){
            window.location = "dashboard.html";
        }
        else{
            alertUser.style.display="block";
    }
    });


 let btnOk=document.getElementById("btnOk");
 btnOk.addEventListener("click",()=>{
    alertUser.style.display="none";
 });
}
