
//prendere form
const form = document.getElementById("myForm");
console.log(form)


//prendere container
const container = document.querySelector(".container");
console.log(container)

//funzione per scegliere numero celle del grid
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = document.getElementById("Numero").value;
    //trasformo in numero la costante
    const numeroInt = parseInt(numero);
    console.log(typeof(numero));
    console.log(typeof(numeroInt));
    console.log(numeroInt);

    //se diverso da numero, alert
    if (isNaN(numeroInt)) {
        alert("Attento! Assicurati di inserire un numero!")
    } else {
          if (container.hasChildNodes()) {
        //if (document.getElementsByClassName("row") != null) {
            //sistemare rimozione rows
            console.log("row già creato")
            for (let i = 1; i <= numeroInt; i++) {
            const row = document.createElement("div");
            container.appendChild(row);
            row.classList.add("row");
            //verifica
            console.log(row);
    
            //ciclo per box
        for (let i = 1; i <= numeroInt; i++) {
            const a = document.createElement("div");
            row.appendChild(a);
            a.classList.add("gridBox");
            a.addEventListener("mouseenter", () => {
                a.classList.add("active");
            })
            a.addEventListener("mouseleave", () => {
                a.classList.remove("active");
                a.classList.add("pixel");
            })
        }}
        } else {
            console.log("row non creati")
        for (let i = 1; i <= numeroInt; i++) {
            const row = document.createElement("div");
            container.appendChild(row);
            row.classList.add("row");
            //verifica
            console.log(row);
    
            //ciclo per box
        for (let i = 1; i <= numeroInt; i++) {
            const a = document.createElement("div");
            row.appendChild(a);
            a.classList.add("gridBox");
            a.addEventListener("mouseenter", () => {
                a.classList.add("active");
            })
            a.addEventListener("mouseleave", () => {
                a.classList.remove("active");
                a.classList.add("pixel");
            })
        }
        } 

        }
    }
})
//creare grid 16 x 16
/*
    //ciclo per row
    for (let i = 1; i < 17; i++) {
    const row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row");
    //ciclo per box
    for (let i = 1; i < 17; i++) {
        const a = document.createElement("div");
        row.appendChild(a);
        a.classList.add("gridBox");
        a.addEventListener("mouseenter", () => {
            a.classList.add("active");
        })
        a.addEventListener("mouseleave", () => {
            a.classList.remove("active");
            a.classList.add("pixel");
        })
        
    }
   }
*/
