import {staff, admin, teach, role} from "./register.js";


const container = document.getElementById("staff-list")
let filtered = staff



function showStaff(staff) {
    container.innerHTML = ""

    staff.map(e => {
        const card = document.createElement("article")
        card.className = "card"

        card.innerHTML = `
            <h3>${e.fornavn} ${e.etternavn}</h3>
            <p><b>Stilling:</b> ${e.stilling}</p>
            <p><b>Kontor:</b> ${e.kontor}</p>
            <p><b>E-post:</b> <a href="mailto:${e.epost}">${e.epost}</a></p>
            ${e.kursansvar ? `<p><b>Kursanvsar:</b> ${e.kursansvar}</p>` : "<em>Ingen kursansvar</em>"}`

        container.appendChild(card)
    })
}


//Gjort samtidig med #OPPG3

function filterStaff(type){
    if(type === "alle"){
        return showStaff(staff)
    }
    else if(type === admin){
        filtered = staff.filter(e => admin.includes(e.stilling))
    }
    else if(type === teach){
        filtered = staff.filter(e => teach.includes(e.stilling))
    }
    else if(role.includes(type)){
        filtered = staff.filter(e => e.stilling === type)
    }

    showStaff(filtered)
}



$("[data-filter = 'alle']").click(() => showStaff(staff))
$("[data-filter = 'administrasjon']").click(() => filterStaff(admin))
$("[data-filter = 'undervisere']").click(() => filterStaff(teach))
$("[data-filter]").click(function(){
    filterStaff($(this).data("filter"))
})

//#OPPG3 - Legge til og fjerne en ansatt via HTML

function roleMenu(){
    //Meny for hvilken stilling
    const select = document.getElementById("rolelist")

    for(let i = 0; i < role.length; i++){
        let opt = role[i]
        let el = document.createElement("option")
        el.textContent = opt;
        el.value = opt
        select.appendChild(el)
    }

    //Legge til ny ansatt
    document.getElementById("addemp").onclick = function() {
        const newStaff = {
            stilling: document.getElementById("rolelist").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            kontor: document.getElementById("kontor").value,
            epost: document.getElementById("epost").value,
            kursansvar: document.getElementById("kurs").value,
    }

    staff.push(newStaff)
    showStaff(staff)

    //Tøm etter registrering
    document.getElementById("fornavn").value = ""
    document.getElementById("etternavn").value = ""
    document.getElementById("kontor").value = ""
    document.getElementById("epost").value = ""
    document.getElementById("kurs").value = ""
    }
}
roleMenu()
//roleMenu funksjonen laget ved hjelp av ChatGPT(08.desember versjon) for opprydding og tydeliggjøring av koden.


// function roleMenu(){
//     const select = document.getElementById("rolelist")

//     for(let i = 0; i < role.length; i++){
//         let opt = role[i]
//         let el = document.createElement("option")
//         el.textContent = opt;
//         el.value = opt
//         select.appendChild(el)
//     }

//     document.getElementById("addemp").onclick = staff.push(p => {
//          p.fornavn = document.getElementById("fornavn").value
//         p.etternavn = document.getElementById("etternavn").value
//         p.kontor = document.getElementById("kontor").value
//         p.epost = document.getElementById("epost").value
//         p.kursansvar = document.getElementById("kurs").value
//     })
   
// }
// roleMenu()


showStaff(staff)
//funksjonen roleMenu ble laget ved hjelp av et foruminnlegg fra StackOverflow, for å gjøre enklere valget 
//av roller ved å bruke det allerede eksisterende arrayet som inneholder disse stillingene. Link finnes i referanselisten i mappedokumentet




//Gjort samtidig med #OPPG3

// function showAllKurs(staff, elementId){
//     const allKurs = staff
    
//     .flatMap(k => Array.isArray(k.kursansvar) ? k.kursansvar : [])
//     .filter((kurs, index, arr) => arr.indexOf(kurs) === index)
//     .sort()

//     document.getElementById(elementId).innerHTML = allKurs.map(kurs => `<li>${kurs}</li>`).join("")
// }
// showAllKurs(staff, "kursliste")


// const forminput = document.getElementsByClassName("addUser")
// //let filtered = staff

// function addUser() {
//     forminput.innerHTML = ""

//     role.map(e => {
//         const card = document.createElement("article")
//         card.className = "card"

//         card.innerHTML = `
//             <h3>${e.fornavn} ${e.etternavn}</h3>
//             <p><b>Stilling:</b> ${e.stilling}</p>
//             <p><b>Kontor:</b> ${e.kontor}</p>
//             <p><b>E-post:</b> <a href="mailto:${e.epost}">${e.epost}</a></p>
//             ${e.kursansvar ? `<p><b>Kursanvsar:</b> ${e.kursansvar}</p>` : "<em>Ingen kursansvar</em>"}`

//         container.appendChild(card)
//     })
// }

