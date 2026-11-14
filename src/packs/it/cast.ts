import type { Cast } from "@/core/language-pack";

/** Who speaks in the Italian listening material: one fitting voice per character. */
export const cast: Cast = {
  narrator: "f",
  gender: {
    Emma: "f", Giulia: "f", Karim: "m", Marco: "m", Rita: "f", Hiro: "m", Ingrid: "f", Ana: "f", Lucia: "f",
    Nonna: "f",
    // Roles.
    Segretaria: "f", Receptionist: "any", Cassiera: "f", Barista: "any", Cliente: "any", Spreker: "any",
  },
  generic: ["Segretaria", "Receptionist", "Cassiera", "Barista", "Cliente"],
};
