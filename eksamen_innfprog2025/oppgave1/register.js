const staff = {
    rektor: [
        {
            etternavn: "Solheim", 
            fornavn: "Ingrid", 
            kontor: "R-001",  
            epost: "ingrid.solheim@prog.no", 
            avdeling: "" 
        }
    ],
    dekan: [
        { 
            etternavn: "Aas", 
            fornavn: "Morten", 
            kontor: "D-101",
            epost: "morten.aas@prog.no", 
            avdeling: "" 
        },
        { 
            etternavn: "Nergård", 
            fornavn: "Selma", 
            kontor: "D-102",
            epost: "selma.nergard@prog.no", 
            avdeling: "" 
        }
    ],
    vaktmester: [
        { 
            etternavn: "Eriksen", 
            fornavn: "Tom", 
            kontor: "V-201", 
            epost: "tom.eriksen@prog.no", 
            avdeling: "" 
        },
        { 
            etternavn: "Kahn",
            fornavn: "Nabila", 
            kontor: "V-202", 
            epost: "nabila.kahn@prog.no",
            avdeling: "" 
        },
        {
            kontor: "V-203", 
            fornavn: "Jonas", 
            etternavn: "Røed", 
            epost: "jonas.roed@prog.no",
            avdeling: ""
        } 
    ],
    professor: [
        { 
            etternavn: "Wendelstad", 
            fornavn: "Eirik", 
            kontor: "P-301", 
            epost: "eirik.wendelstad@prog.no", 
            avdeling: ["Informatikk", "programmering"]
        },
        { 
            etternavn: "Fosse", 
            fornavn: "Maria", 
            kontor: "P-302", 
            epost: "maria.fosse@prog.no",
            avdeling: "Pedagogikk", 
        },
        { 
            etternavn: "Tran", 
            fornavn: "Linh", 
            kontor: "P-303", 
            epost: "linh.tran@prog.no",
            avdeling: "Fysikk", 
        },
        { 
            etternavn: "Kleppe", 
            fornavn: "Gunnar", 
            kontor: "P-304", 
            epost: "gunnar.kleppe@prog.no",
            avdeling: "Historie", 
        }, 
        { 
            etternavn: "Bergmann", 
            fornavn: "Sofia", 
            kontor: "P-305", 
            epost: "sofia.bergmann@prog.no",
            avdeling: "Biologi", 
        }
    ],
    lektor: [
        {
            etternavn: "Nymo", 
            fornavn: "Astrid", 
            kontor: "L-401", 
            epost: "astrid.nymo@prog.no",
            avdeling: "Engelsk", 
        },
        { 
            etternavn: "Liland", 
            fornavn: "Henrik", 
            kontor: "L-402", 
            epost: "henrik.liland@prog.no",
            avdeling: ["Matematikk", "Kjemi"] 
        },
        { 
            etternavn: "Strand",
            fornavn: "Julie", 
            kontor: "L-403", 
            epost: "julie.strand@prog.no",
            avdeling: ["Samfunnsfag", "Geografi"] 
        },
        { 
            etternavn: "Borge",
            fornavn: "Samuel", 
            kontor: "L-404", 
            epost: "samuel.borge@prog.no",
            avdeling: "Programmering", 
        },
        { 
            etternavn: "Heggernes",
            fornavn: "Kari", 
            kontor: "L-405", 
            epost: "kari.heggernes@prog.no",
            avdeling: "Kunst og håndverk", 
        },
        { 
            etternavn: "Røine",
            fornavn: "Daniel", 
            kontor: "L-406", 
            epost: "daniel.roine@prog.no",
            avdeling: "Norsk", 
        },  
        { 
            etternavn: "Arctander",
            fornavn: "Nina", 
            kontor: "L-407", 
            epost: "nina.arctander@prog.no",
            avdeling: "Spansk", 
        },
        { 
            etternavn: "Jebe",
            fornavn: "Oskar", 
            kontor: "L-408", 
            epost: "oskar.jebe@prog.no",
            avdeling: "Fysikk", 
        },
        { 
            etternavn: "Vik", 
            fornavn: "Thea", 
            kontor: "L-409", 
            epost: "thea.vik@prog.no",
            avdeling: "Geografi", 
        },
        { 
            etternavn: "Halvorsen", 
            fornavn: "Emil", 
            kontor: "L-410", 
            epost: "emil.halvorsen@prog.no",
            avdeling: "Kjemi" 
        }
    ]
}



const allStaff = [
    ...staff.rektor,
    ...staff.dekan,
    ...staff.vaktmester,
    ...staff.professor,
    ...staff.lektor
]