// Interface TypeScript pour Exemplaire
export enum ExemplaireStatut {
  DISPONIBLE = 'disponible',
  LOUE = 'loue',        
  RESERVE = 'reserve'  
}

export enum ExemplaireEtat {
  NEUF = 'neuf',
  BON = 'bon',
  ACCEPTABLE = 'acceptable',
  MAUVAIS = 'mauvais'
}

export interface Exemplaire {
  id_exemplaire: number;
  id_album: number;
  code_barre: string;
  statut: ExemplaireStatut;
  etat: ExemplaireEtat;
  date_acquisition: Date;
}

export interface CreateExemplaireDto {
  id_album: number;
  code_barre: string;
  statut: ExemplaireStatut;
  etat: ExemplaireEtat;
}

export interface UpdateExemplaireDto {
  code_barre?: string;
  statut?: ExemplaireStatut;
  etat?: ExemplaireEtat;
}