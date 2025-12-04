export const allKurs = [
    "Programmering 1", "Webutvikling", "Algoritmer og datastrukturer",
    "Kunstig intelligens", "Maskinlæring", "Databaser",
    "Operativsystemer", "Webdesign", "Responsiv utvikling",
    "Grunnleggende JavaScript", "UX-design", "Frontend-utvikling",
    "CSS og design", "Python for web", "Systemutvikling",
    "Objektorientert programmering", "Datakommunikasjon",
    "Datasikkerhet", "Prosjektledelse"
]
// Programmering 1 = allKurs[0]                   | Webutvikling = allKurs[1]       | Algoritmer og datastrukturer = allKurs[2]
// Kunstig intelligens = allKurs[3]               | Maskinlæring = allKurs[4]       | Databaser = allKurs[5]
// Operativsystemer = allKurs[6]                  | Webdesign = allKurs[7]          | Responsiv utvikling = allKurs[8]
// Grunnleggende JavaScript = allKurs[9]          | UX-design = allKurs[10]         | Frontend-utvikling = allKurs[11]
// CSS og design = allKurs[12]                    | Python for web = allKurs[13]    | Systemutvikling = allKurs[14]
// Objektorientert programmering = allKurs[15]    | Datakommunikasjon = allKurs[16]
// Datasikkerhet = allKurs[17]                    | Prosjektledelse = allKurs[18]

export const role = 
[ "Rektor", "Dekan", "Vaktmester", "Professor", "Lektor" ]
// Rektor = stilling[0] | Dekan = stilling[1] | Vaktmester = stilling[2] | Professor = stilling[3] | Lektor = stilling[4]


export const staff = [
        {
            stilling: `${role[0]}`, kontor: "R-001", avdeling: "", 
            etternavn: "Solheim", 
            fornavn: "Ingrid",   
            epost: "ingrid.solheim@prog.no", 
        },
        { 
            stilling: `${role[1]}`, kontor: "D-101", avdeling: "",
            etternavn: "Aas", 
            fornavn: "Morten", 
            epost: "morten.aas@prog.no", 
        },
        { 
            stilling: `${role[1]}`, kontor: "D-102", avdeling: "",
            etternavn: "Nergård", 
            fornavn: "Selma", 
            epost: "selma.nergard@prog.no",  
        },
        { 
            stilling: `${role[2]}`, kontor: "V-201", avdeling: "",
            etternavn: "Eriksen", 
            fornavn: "Tom", 
            epost: "tom.eriksen@prog.no", 
        },
        { 
            stilling: `${role[2]}`, kontor: "V-202", avdeling: "",
            etternavn: "Kahn",
            fornavn: "Nabila", 
            epost: "nabila.kahn@prog.no",
        },
        {
            stilling: `${role[2]}`, kontor: "V-203", avdeling: "",
            etternavn: "Røed", 
            fornavn: "Jonas", 
            epost: "jonas.roed@prog.no",
        },
        { 
            stilling: `${role[3]}`, kontor: "P-301", avdeling: `${allKurs[1]}, ${allKurs[7]}`,
            etternavn: "Wendelstad", 
            fornavn: "Eirik", 
            epost: "eirik.wendelstad@prog.no", 
        },
        { 
            
            stilling: `${role[3]}`, kontor: "P-302", avdeling: `${allKurs[3]}`,
            etternavn: "Fosse", 
            fornavn: "Maria",
            epost: "maria.fosse@prog.no",
        },
        { 
            stilling: `${role[3]}`, kontor: "P-303", avdeling: `${allKurs[4]}, ${allKurs[17]}`,
            etternavn: "Tran",
            fornavn: "Linh",
            epost: "linh.tran@prog.no",
        },
        { 
            stilling: `${role[3]}`, kontor: "P-304", avdeling: `${allKurs[5]}`,
            etternavn: "Kleppe",
            fornavn: "Gunnar", 
            epost: "gunnar.kleppe@prog.no" 
        }, 
        { 
            stilling: `${role[3]}`, kontor: "P-305", avdeling: `${allKurs[6]}`,
            etternavn: "Bergmann", 
            fornavn: "Sofia",
            epost: "sofia.bergmann@prog.no"
        },
        {
            stilling: `${role[4]}`, kontor: "L-401", kontor: "L-401", avdeling: `${allKurs[7]}, ${allKurs[12]}`,
            etternavn: "Nymo", 
            fornavn: "Astrid",
            epost: "astrid.nymo@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-402", avdeling: `${allKurs[8]}`,
            etternavn: "Liland", 
            fornavn: "Henrik",
            epost: "henrik.liland@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-403", avdeling: `${allKurs[9]}, ${allKurs[13]}`,
            etternavn: "Strand",
            fornavn: "Julie",
            epost: "julie.strand@prog.no" 
        },
        { 
            stilling: `${role[4]}`, kontor: "L-404", avdeling: `${allKurs[10]}`,
            etternavn: "Borge",
            fornavn: "Samuel",
            epost: "samuel.borge@prog.no" 
        },
        { 
            stilling: `${role[4]}`, kontor: "L-405", avdeling: `${allKurs[11]}`,
            etternavn: "Heggernes",
            fornavn: "Kari",
            epost: "kari.heggernes@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-406", avdeling: `${allKurs[12]}`,
            etternavn: "Røine",
            fornavn: "Daniel",
            epost: "daniel.roine@prog.no" 
        },  
        { 
            stilling: `${role[4]}`, kontor: "L-407", avdeling: `${allKurs[14]}, ${allKurs[18]}`,
            etternavn: "Arctander",
            fornavn: "Nina",
            epost: "nina.arctander@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-408", avdeling: `${allKurs[13]}`,
            etternavn: "Jebe",
            fornavn: "Oskar",
            epost: "oskar.jebe@prog.no" 
        },
        { 
            stilling: `${role[4]}`, kontor: "L-409", avdeling: `${allKurs[15]}, ${allKurs[1]}`,
            etternavn: "Vik", 
            fornavn: "Thea",
            epost: "thea.vik@prog.no"
        },
        { 
            stilling: `${role[4]}`, kontor: "L-410", avdeling: `${allKurs[16]}`,
            etternavn: "Halvorsen", 
            fornavn: "Emil",
            epost: "emil.halvorsen@prog.no"
        }
    ]


export const admin = [`${stilling[0]}`, `${stilling[1]}`, `${stilling[2]}`];
export const teach = [`${stilling[3]}`, `${stilling[4]}`];


