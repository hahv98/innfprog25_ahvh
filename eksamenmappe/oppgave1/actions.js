import {role, staff} from "./register.js";

// Definer roller | Relatert til funksjon 5
const ADMIN = [role[0], role[1], role[2]];   // Rektor, Dekan, Vaktmester
const TEACH = [role[3], role[4]];            // Professor, Lektor


//Funksjon 1 - Lage ansatt-kort
    function createStaffCard(index) {   
        const person = staff[index];

        const card = document.createElement("article");
        card.className = "card";
        card.setAttribute("data-index", index);

        const name = document.createElement("h3");
        name.textContent = `${person.fornavn} ${person.etternavn}`;

        const role = document.createElement("p");
        role.innerHTML = `<b>Stilling:</b> ${person.stilling}`;

        const office = document.createElement("p");
        office.innerHTML = `<b>Kontor:</b> ${person.kontor}`;

        const email = document.createElement("p");
        email.innerHTML = `<b>E-post:</b> <a href="mailto:${person.epost}">${person.epost}</a>`;

        const kursWrapper = document.createElement("div");
        const kursTitle = document.createElement("b");
        kursTitle.textContent = "Kursansvar:";
        kursWrapper.appendChild(kursTitle);

        // Kursliste
        if (person.kursansvar.length > 0) {
            const ul = document.createElement("ul");
            person.kursansvar.forEach(k => {
                const li = document.createElement("li");
                li.textContent = k;
                ul.appendChild(li);
            });
            kursWrapper.appendChild(ul);
        } else {
            const none = document.createElement("p");
            none.className = "no-course"
            none.textContent = "Ingen kursansvar";
            kursWrapper.appendChild(none);
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Slett ansatt";
        deleteBtn.className = "delete-btn";
        // Vi setter data-index på knappen. Den kan også hentes fra card (se deleteStaff)
        deleteBtn.setAttribute("data-delete-index", index);

        // Bygg struktur
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(office);
        card.appendChild(email);
        card.appendChild(kursWrapper);
        card.appendChild(deleteBtn);

        return card;
    }



//Funksjon 2 - Print ut alle ansatte
    function renderAllStaff(containerId) {  
        const container = document.getElementById(containerId)

        container.innerHTML = ""; // Tøm container

        staff.forEach((_, index) => {
            const card = createStaffCard(index);
            container.appendChild(card);
        });
    }
    renderAllStaff("staff-list");



//Funksjon 3 - Filtrer liste etter stilling
    function filterByRole(role) {   
        const staffcontainer = document.getElementById("staff-list");
        staffcontainer.innerHTML = ""; // tøm

        const filterstilling =
            role === "all"
                ? staff
                : staff.filter(person => person.stilling === role);

        filterstilling.forEach(person => {
            const card = createStaffCard(staff.indexOf(person));
            staffcontainer.appendChild(card);
        });
    }
    document.addEventListener("click", e => {
        if (e.target.matches("button[data-role]")) {
            const role = e.target.getAttribute("data-role");
            filterByRole(role);
        }
    });
    // Startvisning
    filterByRole("all");



//Funksjon 4 - Samler en liste av alle kurs 
    function renderAllCourses(containerId) {    
        const container = document.getElementById(containerId);
        container.innerHTML = ""; // tøm

        // Finn ALLE kurs fra ansatte som har kursansvar
        const allCourses = staff
            .flatMap(person => person.kursansvar)   // tar ut alle kurs i én liste
            .filter(k => k && k.length > 0);        // fjern tomme arrays

        // Fjern duplikater
        const uniqueCourses = [...new Set(allCourses)].sort();

        // Lag tittel
        const title = document.createElement("h3");
        title.textContent = "Alle kursansvar";
        container.appendChild(title);

        // Lag liste
        const ul = document.createElement("ul");

        uniqueCourses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = course;
            ul.appendChild(li);
        });

        container.appendChild(ul);
    }
    renderAllCourses("kurs-liste")



//Funksjon 5 - Filtrer liste etter administrasjon eller undervisere
    function filterStaff(type) {    //filtrering etter admin eller undervisere
        let filtered = staff;

        if (type === "admin") {
            filtered = staff.filter(p => ADMIN.includes(p.stilling));
        }
        else if (type === "teach") {
            filtered = staff.filter(p => TEACH.includes(p.stilling));
        }

        renderStaff(filtered);
    }

    // Hjelpefunksjon
    function renderStaff(list) {    
        const container = document.getElementById("staff-list");
        container.innerHTML = "";

        list.forEach((person) => {
            const card = createStaffCard(staff.indexOf(person));
            container.appendChild(card);
        });
    }
    document.getElementById("btn-all").addEventListener("click", () => filterStaff("all"));
    document.getElementById("btn-admin").addEventListener("click", () => filterStaff("admin"));
    document.getElementById("btn-teach").addEventListener("click", () => filterStaff("teach"));

    // Start med alle ansatte
    filterStaff("all");



//Funksjon 6 - Lage ansattkort av bruker input i HTML
    function createStaffFromInput() {   
        // 1. Hent inputverdier
        const fornavn = document.getElementById("inp-fornavn").value;
        const etternavn = document.getElementById("inp-etternavn").value;
        const epost = document.getElementById("inp-epost").value;
        const kontor = document.getElementById("inp-kontor").value;
        const stilling = document.getElementById("inp-stilling").value;
        const kursRaw = document.getElementById("inp-kurs").value;

        // Gjør kurs til array (kun hvis professor/lektor)
        const kursansvar =
            (stilling === "Professor" || stilling === "Lektor")
                ? kursRaw.split(",").map(k => k.trim()).filter(k => k.length > 0)
                : [];

        // 2. Lag nytt ansatt-objekt
        const newPerson = {
            fornavn,
            etternavn,
            epost,
            kontor,
            stilling,
            kursansvar
        };

        // 3. (Valgfritt) skyv inn i staff-array
        staff.push(newPerson);

        // 4. Lag DOM-element via samme funksjon som andre kort
        const card = createStaffCard(staff.length - 1);

        return card;
    }
    document.getElementById("new-staff-form").addEventListener("submit", e => {
        e.preventDefault(); // hindre side-refresh

        const card = createStaffFromInput();

        const output = document.getElementById("new-staff-output");
        output.innerHTML = "";     // valgfritt: tøm containeren
        output.appendChild(card);  // vis kortet
    });


   
//Funksjon 7 - Slette en ansatt
    function deleteStaff(index) {
    // Sjekk for å unngå sletting av udefinerte elementer
    if (index >= 0 && index < staff.length) {
        // Bruk splice(startindeks, antall_elementer_som_skal_fjernes)
        staff.splice(index, 1); 

        // Oppdater visningen
        renderAllStaff("staff-list"); 
        
        // Valgfritt: Oppdater kurslisten også (hvis den slettede hadde kursansvar)
        renderAllCourses("kurs-liste");
    }
}

    // Hendelseslytter for sletteknapper
    document.addEventListener("click", e => {
        // Sjekk om klikket element er en sletteknapp
        if (e.target.matches(".delete-btn")) {
            // Hent indeksen fra data-delete-index attributtet
            const indexToDelete = parseInt(e.target.getAttribute("data-delete-index"));
            
            if (!isNaN(indexToDelete)) {
                deleteStaff(indexToDelete);
            }
        }
    });
/* HTML Button inputs
<button id="btn-all">Alle</button>
<button id="btn-admin">Administrasjon</button>
<button id="btn-teach">Undervisere</button>
<button data-role="Rektor">Rektor</button>
<button data-role="Dekan">Dekan</button>
<button data-role="Vaktmester">Vaktmester</button>
<button data-role="Professor">Professor</button>
<button data-role="Lektor">Lektor</button>

    Print outputs:
<form id="new-staff-form">
        <input type="text" id="inp-fornavn" placeholder="Fornavn" required>
        <input type="text" id="inp-etternavn" placeholder="Etternavn" required>
        <input type="email" id="inp-epost" placeholder="E-post" required>
        <input type="text" id="inp-kontor" placeholder="Kontor" required>

        <select id="inp-stilling" required>
            <option value="">Velg stilling</option>
            <option value="Rektor">Rektor</option>
            <option value="Dekan">Dekan</option>
            <option value="Vaktmester">Vaktmester</option>
            <option value="Professor">Professor</option>
            <option value="Lektor">Lektor</option>
        </select>

        <input type="text" id="inp-kurs" placeholder="Kursansvar (komma-separert)">
        
        <button type="submit">Legg til ansatt</button>
    </form>

    <div id="new-staff-output"></div>



    <div id="staff-list"></div>
    <div id="kurs-liste"></div> */