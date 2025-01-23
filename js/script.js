const typermechamo = document.querySelectorAll(".olanome");

function textomechamo (){
    typermechamo.forEach(typerheadermechamo =>{
        const mostramechamo = typerheadermechamo.innerHTML.split("");
        typerheadermechamo.innerHTML = ("");
     
        mostramechamo.forEach((letra, index)=>{
         setTimeout(()=>{
            typerheadermechamo.innerHTML += letra;
         }, 75 * index)
        });
     });
}
textomechamo ();

setInterval(textomechamo, 2000);

