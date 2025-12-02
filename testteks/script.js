const ansatte = [
    {
        navn: "Ola Berg",
        stilling: "Professor",
        kontor: "C310",
        epost: "ola.berg@hiof.no",
        kurs: "Programmering 1, Webutvikling",
        kategori: "undervisere"
    },
    {
        navn: "Lina Eriksen",
        stilling: "Professor",
        kontor: "C312",
        epost: "lina.eriksen@hiof.no",
        kurs: "Algoritmer og datastrukturer",
        kategori: "undervisere"
    },
    {
        navn: "Jonas Müller",
        stilling: "Professor",
        kontor: "C313",
        epost: "jonas.muller@hiof.no",
        kurs: "Kunstig intelligens, Maskinlæring",
        kategori: "undervisere"
    },
    {
        navn: "Henrik Nilsen",
        stilling: "Lektor",
        kontor: "D401",
        epost: "henrik.nilsen@hiof.no",
        kurs: "Webdesign, Responsiv utvikling",
        kategori: "undervisere"
    },
    {
        navn: "Ingrid Pettersen",
        stilling: "Dekan",
        kontor: "A200",
        epost: "ingrid.pettersen@hiof.no",
        kurs: "",
        kategori: "administrasjon"
    }
];

const container = document.getElementById("ansatt-container");

function visAnsatte(liste) {
    container.innerHTML = "";
    liste.forEach(a => {
        const kort = document.createElement("div");
        kort.className = "kort";

        kort.innerHTML = `
            <h3>${a.navn}</h3>
            <p><span class="bold">Stilling:</span> ${a.stilling}</p>
            <p><span class="bold">Kontor:</span> ${a.kontor}</p>
            <p><span class="bold">E-post:</span> <a href="mailto:${a.epost}">${a.epost}</a></p>
            ${a.kurs ? `<p><span class="bold">Kursansvar:</span> ${a.kurs}</p>` : "<em>Ingen kursansvar</em>"}
        `;

        container.appendChild(kort);
    });
}

visAnsatte(ansatte);

// ---------------- FILTERKNAPPER ----------------

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        if (filter === "alle") visAnsatte(ansatte);
        else visAnsatte(ansatte.filter(a => a.kategori === filter));
    });
});

document.querySelectorAll(".filter-stilling").forEach(btn => {
    btn.addEventListener("click", () => {
        const stilling = btn.dataset.stilling;
        visAnsatte(ansatte.filter(a => a.stilling === stilling));
    });
});
