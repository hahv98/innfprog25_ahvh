import {staff, admin, teach, allKurs} from "./register.js";

document.getElementById("kursliste").innerHTML = allKurs.map(kurs => `<li>${kurs}</li>`).join("");

const container = document.getElementById("output")
function visAnsatte(list) {
    container.innerHTML = "";

    list.forEach(a => {
        const kort = document.createElement("div");
        kort.className = "kort";
        
        kort.innerHTML = `
            <h3>${a.fornavn} ${a.etternavn}</h3>
            <p><b>Stilling:</b> ${a.stilling}</p>
            <p><b>Kontor:</b> ${a.kontor}</p>
            <p><b>E-post:</b> <a href="mailto:${a.epost}">${a.epost}</a></p>
            ${a.avdeling ? `<p><b>Kursansvar:</b> ${a.avdeling}</p>` : "<em>Ingen kursansvar</em>"}
        `;

        container.appendChild(kort);
    });
}

function filter(type) {
    if (type === "alle") {
        visAnsatte(staff);
        return;
    }
    else if (type === "administrasjon") {
        const resultat = staff.filter(a => admin.includes(a.stilling));
        visAnsatte(resultat);
        return;
    }
    else if (type === "undervisere") {
        const resultat = staff.filter(a => teach.includes(a.stilling));
        visAnsatte(resultat);
        return;
    }
}
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        filter(btn.dataset.filter);
    });
});
visAnsatte(staff);