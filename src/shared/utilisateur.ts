/**
 * Interface représentant un utilisateur
 */
export interface Utilisateur {
  id_utilisateur: number;
  nom: string;
  prenom: string;
  email: string;
  password_hash: string;
  telephone: string | null;
  rue: string | null;
  numero: string | null;
  code_postal: string | null;
  localite: string | null;
  ville: string | null;
  date_inscription: Date;
  id_role: number;
}

export interface CreateUtilisateurDto {
  nom: string;
  prenom: string;
  email: string;
  password_hash: string;
  id_role: number;
  telephone?: string;
  rue?: string;
  numero?: string;
  code_postal?: string;
  localite?: string;
  ville?: string;
}

export interface UpdateUtilisateurDto {
  nom?: string;
  prenom?: string;
  email?: string;
  password_hash?: string;
  telephone?: string;
  rue?: string;
  numero?: string;
  code_postal?: string;
  localite?: string;
  ville?: string;
  id_role?: number;
}