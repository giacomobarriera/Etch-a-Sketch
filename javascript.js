
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
        //funzione per eliminare tutti i nodi di container
        while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

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
})
