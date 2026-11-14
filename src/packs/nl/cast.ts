import type { Cast } from "@/core/language-pack";

/** Who speaks in the Dutch listening material: one fitting voice per character. */
export const cast: Cast = {
  narrator: "f",
  gender: {
    // People with names keep their voice across the course.
    Agnieszka: "f", Ahmed: "m", Aleksander: "m", Annemiek: "f", Arjun: "m", Bilal: "m", Bram: "m", Chen: "m",
    Daan: "m", Daniel: "m", Esther: "f", Eva: "f", Fatima: "f", Fenna: "f", Giulia: "f", Giuseppe: "m", Grace: "f",
    Hanna: "f", Hiroshi: "m", Hugo: "m", Ilse: "f", Isabel: "f", Jelle: "m", Jesse: "m", Julia: "f", Kees: "m",
    Kofi: "m", Kwame: "m", Linda: "f", Lotte: "f", Luca: "m", Lucas: "m", Mariana: "f", Mark: "m", Marta: "f",
    Mehmet: "m", "Meneer De Jong": "m", "Mevrouw De Vries": "f", Mila: "f", Nina: "f", Noa: "f", Noor: "f",
    Pieter: "m", Priya: "f", Rafael: "m", Ria: "f", Ruben: "m", Samir: "m", Sanne: "f", Saskia: "f", Sem: "m",
    Shanti: "f", Tim: "m", Wei: "any", Wim: "m", Wouter: "m", Yara: "f", Zainab: "f", Zeynep: "f",
    // Roles.
    Agent: "m", Ambtenaar: "m", Apotheker: "f", Assistente: "f", Bakker: "any", Bandje: "f", Buurman: "m",
    Clublid: "f", Docent: "f", Gids: "m", Kassa: "f", Klant: "any", Manager: "m", Medewerker: "any", Meisje: "f",
    Moeder: "f", Monteur: "m", Nieuwslezer: "any", Ober: "m", Omroep: "any", Receptionist: "f", Reiziger: "any",
    Restaurant: "f", Spreker: "m", Tandarts: "m", Vader: "m", Verhuurder: "m", Verkoper: "any", Vrouw: "f",
    Weervrouw: "f",
  },
  generic: [
    "Agent", "Ambtenaar", "Apotheker", "Assistente", "Bakker", "Bandje", "Clublid", "Docent", "Gids", "Kassa",
    "Klant", "Manager", "Medewerker", "Meisje", "Monteur", "Nieuwslezer", "Ober", "Omroep", "Receptionist",
    "Reiziger", "Restaurant", "Spreker", "Tandarts", "Verhuurder", "Verkoper", "Vrouw", "Weervrouw",
  ],
  overrides: {
    "de-afvalkalender/Medewerker": "f",
  },
};
