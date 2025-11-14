// Interface TypeScript pour Catégorie
export interface Categorie {
  id_categorie: number;
  nom_categorie: string;
}

export interface CreateCategorieDto {
  nom_categorie: string;
}

export interface UpdateCategorieDto {
  nom_categorie?: string;
}