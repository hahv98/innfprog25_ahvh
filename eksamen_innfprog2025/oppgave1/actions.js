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


showStaff(staff)

//Design før samling til en funksjon
// $("[data-filter='alle']").click(function(){
//     showStaff(staff)
// })
// $("[data-filter='administrasjon']").click(function(){
//     const filtered = staff.filter(e => admin.includes(e.stilling))
//     showStaff(filtered)
// })
// $("[data-filter='undervisere']").click(function(){
//     const filtered = staff.filter(e => teach.includes(e.stilling))
//     showStaff(filtered)
// })