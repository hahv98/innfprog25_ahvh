export const role = 
[ "Rektor", "Dekan", "Vaktmester", "Professor", "Lektor" ]
// Rektor = role[0] | Dekan = role[1] | Vaktmester = role[2] | Professor = role[3] | Lektor = role[4]


export const staff = [
        {
            stilling: `${role[0]}`, kontor: "R-001", kursansvar: "", 
            etternavn: "Solheim", 
            fornavn: "Ingrid",   
            epost: "ingrid.solheim@prog.no", 
        },
        { 
            stilling: `${role[1]}`, kontor: "D-101", kursansvar: "",
            etternavn: "Aas", 
            fornavn: "Morten", 
            epost: "morten.aas@prog.no", 
        },
        { 
            stilling: `${role[1]}`, kontor: "D-102", kursansvar: "",
            etternavn: "Nergård", 
            fornavn: "Selma", 
            epost: "selma.nergard@prog.no",  
        },
        { 
            stilling: `${role[2]}`, kontor: "V-201", kursansvar: "",
            etternavn: "Eriksen", 
            fornavn: "Tom", 
            epost: "tom.eriksen@prog.no", 
        },
        { 
            stilling: `${role[2]}`, kontor: "V-202", kursansvar: "",
            etternavn: "Kahn",
            fornavn: "Nabila", 
            epost: "nabila.kahn@prog.no",
        },
        {
            stilling: `${role[2]}`, kontor: "V-203", kursansvar: "",
            etternavn: "Røed", 
            fornavn: "Jonas", 
            epost: "jonas.roed@prog.no",
        },
        { 
            stilling: `${role[3]}`, kontor: "P-301", kursansvar: ["Webutvikling", "Webdesign"],
            etternavn: "Wendelstad", 
            fornavn: "Eirik", 
            epost: "eirik.wendelstad@prog.no", 
        },
        { 
            
            stilling: `${role[3]}`, kontor: "P-302", kursansvar: ["Kunstig intelligens"],
            etternavn: "Fosse", 
            fornavn: "Maria",
            epost: "maria.fosse@prog.no",
        },
        { 
            stilling: `${role[3]}`, kontor: "P-303", kursansvar: ["Maskinlæring", "Datasikkerhet"],
            etternavn: "Tran",
            fornavn: "Linh",
            epost: "linh.tran@prog.no",
        },
        { 
            stilling: `${role[3]}`, kontor: "P-304", kursansvar: ["Databaser"],
            etternavn: "Kleppe",
            fornavn: "Gunnar", 
            epost: "gunnar.kleppe@prog.no" 
        }, 
        { 
            stilling: `${role[3]}`, kontor: "P-305", kursansvar: ["Operativsystemer"],
            etternavn: "Bergmann", 
            fornavn: "Sofia",
            epost: "sofia.bergmann@prog.no"
        },
        {
            stilling: `${role[4]}`, kontor: "L-401", kontor: "L-401", kursansvar: ["Programmering 1", "CSS og design"],
            etternavn: "Nymo", 
            fornavn: "Astrid",
            epost: "astrid.nymo@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-402", kursansvar: ["Responsiv utvikling"],
            etternavn: "Liland", 
            fornavn: "Henrik",
            epost: "henrik.liland@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-403", kursansvar: ["Grunnleggende JavaScript", "Python for web"],
            etternavn: "Strand",
            fornavn: "Julie",
            epost: "julie.strand@prog.no" 
        },
        { 
            stilling: `${role[4]}`, kontor: "L-404", kursansvar: ["UX-design"],
            etternavn: "Borge",
            fornavn: "Samuel",
            epost: "samuel.borge@prog.no" 
        },
        { 
            stilling: `${role[4]}`, kontor: "L-405", kursansvar: ["Frontend-utvikling"],
            etternavn: "Heggernes",
            fornavn: "Kari",
            epost: "kari.heggernes@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-406", kursansvar: ["CSS og design"],
            etternavn: "Røine",
            fornavn: "Daniel",
            epost: "daniel.roine@prog.no" 
        },  
        { 
            stilling: `${role[4]}`, kontor: "L-407", kursansvar: ["Systemutvikling", "Prosjektledelse"],
            etternavn: "Arctander",
            fornavn: "Nina",
            epost: "nina.arctander@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-408", kursansvar: ["Algoritmer og datastrukturer"],
            etternavn: "Jebe",
            fornavn: "Oskar",
            epost: "oskar.jebe@prog.no" 
        },
        { 
            stilling: `${role[4]}`, kontor: "L-409", kursansvar: ["Objektorientert programmering", "Webutvikling"],
            etternavn: "Vik", 
            fornavn: "Thea",
            epost: "thea.vik@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-410", kursansvar: ["Datakommunikasjon"],
            etternavn: "Halvorsen", 
            fornavn: "Emil",
            epost: "emil.halvorsen@prog.no"
        }
    ]


export const admin = [`${role[0]}`, `${role[1]}`, `${role[2]}`];
export const teach = [`${role[3]}`, `${role[4]}`];


