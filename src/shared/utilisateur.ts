// Interface TypeScript pour Utilisateur
export interface Utilisateur {
  id_utilisateur: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string | null;
  adresse: string | null;
  date_inscription: Date;
  id_role: number;
}

export interface CreateUtilisateurDto {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  adresse?: string;
  id_role: number;
}

export interface UpdateUtilisateurDto {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  adresse?: string;
  id_role?: number;
}