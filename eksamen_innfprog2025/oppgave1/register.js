/*register.js ble opprettet ved hjelp av AI. se referanseliste, merket
OpenAI (2025). ChatGPT (08.desember versjon) */


// Array med stillingstitler
export const role = [
    "Rektor",       // role[0]
    "Dekan",        // role[1]
    "Vaktmester",   // role[2]
    "Professor",    // role[3]
    "Lektor"        // role[4]
];

// Array med ansatte
export const staff = [
    // 1 Rektor
    {
        stilling: role[0],
        etternavn: "Solheim",
        fornavn: "Ingrid",
        epost: "ingrid.solheim@prog.no",
        kontor: "R-001",
        kursansvar: []
    },

    // 2 Dekaner
    {
        stilling: role[1],
        etternavn: "Aas",
        fornavn: "Margrete",
        epost: "margrete.aas@prog.no",
        kontor: "D-101",
        kursansvar: []
    },
    {
        stilling: role[1],
        etternavn: "Nygaard",
        fornavn: "Tobias",
        epost: "tobias.nygaard@prog.no",
        kontor: "D-102",
        kursansvar: []
    },

    // 3 Vaktmestere
    {
        stilling: role[2],
        etternavn: "Holt",
        fornavn: "Kenneth",
        epost: "kenneth.holt@prog.no",
        kontor: "V-001",
        kursansvar: []
    },
    {
        stilling: role[2],
        etternavn: "Fjell",
        fornavn: "Ronny",
        epost: "ronny.fjell@prog.no",
        kontor: "V-002",
        kursansvar: []
    },
    {
        stilling: role[2],
        etternavn: "Sørensen",
        fornavn: "Lene",
        epost: "lene.sorensen@prog.no",
        kontor: "V-003",
        kursansvar: []
    },

    // 5 Professorer
    {
        stilling: role[3],
        etternavn: "Eriksen",
        fornavn: "Harald",
        epost: "harald.eriksen@prog.no",
        kontor: "P-201",
        kursansvar: ["Algoritmer", "Datastrukturer"]
    },
    {
        stilling: role[3],
        etternavn: "Borge",
        fornavn: "Silje",
        epost: "silje.borge@prog.no",
        kontor: "P-202",
        kursansvar: ["Maskinlæring"]
    },
    {
        stilling: role[3],
        etternavn: "Tangen",
        fornavn: "Oskar",
        epost: "oskar.tangen@prog.no",
        kontor: "P-203",
        kursansvar: ["Kunstig intelligens", "Etikk i teknologi"]
    },
    {
        stilling: role[3],
        etternavn: "Vik",
        fornavn: "Mona",
        epost: "mona.vik@prog.no",
        kontor: "P-204",
        kursansvar: ["Operativsystemer"]
    },
    {
        stilling: role[3],
        etternavn: "Hagen",
        fornavn: "Elias",
        epost: "elias.hagen@prog.no",
        kontor: "P-205",
        kursansvar: ["Databaseutvikling", "SQL Fordypning"]
    },

    // 10 Lektorer
    {
        stilling: role[4],
        etternavn: "Liland",
        fornavn: "Henrik",
        epost: "henrik.liland@prog.no",
        kontor: "L-401",
        kursansvar: ["Grunnleggende JavaScript"]
    },
    {
        stilling: role[4],
        etternavn: "Nymo",
        fornavn: "Astrid",
        epost: "astrid.nymo@prog.no",
        kontor: "L-402",
        kursansvar: ["Webdesign"]
    },
    {
        stilling: role[4],
        etternavn: "Helle",
        fornavn: "Jonas",
        epost: "jonas.helle@prog.no",
        kontor: "L-403",
        kursansvar: ["HTML & CSS", "Responsiv utvikling"]
    },
    {
        stilling: role[4],
        etternavn: "Bjørnstad",
        fornavn: "Tiril",
        epost: "tiril.bjornstad@prog.no",
        kontor: "L-404",
        kursansvar: ["UX-design"]
    },
    {
        stilling: role[4],
        etternavn: "Hovland",
        fornavn: "Sander",
        epost: "sander.hovland@prog.no",
        kontor: "L-405",
        kursansvar: ["Webutvikling 1"]
    },
    {
        stilling: role[4],
        etternavn: "Amundsen",
        fornavn: "Kaja",
        epost: "kaja.amundsen@prog.no",
        kontor: "L-406",
        kursansvar: ["Programmering 1"]
    },
    {
        stilling: role[4],
        etternavn: "Ødegaard",
        fornavn: "Martin",
        epost: "martin.odegaard@prog.no",
        kontor: "L-407",
        kursansvar: ["JavaScript fordypning"]
    },
    {
        stilling: role[4],
        etternavn: "Tveit",
        fornavn: "Helene",
        epost: "helene.tveit@prog.no",
        kontor: "L-408",
        kursansvar: ["Databaser"]
    },
    {
        stilling: role[4],
        etternavn: "Fosse",
        fornavn: "Daniel",
        epost: "daniel.fosse@prog.no",
        kontor: "L-409",
        kursansvar: ["Python 1"]
    },
    {
        stilling: role[4],
        etternavn: "Myrdal",
        fornavn: "Ella",
        epost: "ella.myrdal@prog.no",
        kontor: "L-410",
        kursansvar: ["Frontend prosjekt"]
    }
];
