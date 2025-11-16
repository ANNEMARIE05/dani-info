export type Projet = {
  id: number;
  titre: string;
  categorie: string;
  description: string;
  statut: "réalisé" | "en_cours";
  image: string;
  lien?: string;
};


