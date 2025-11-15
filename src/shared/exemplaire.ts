/**
 * Énumérations pour les statuts et états des exemplaires
 */
export enum ExemplaireStatut {
  DISPONIBLE = 'Disponible',
  LOUE = 'Loué',        
  RESERVE = 'Reservé',
  PERDU = 'Perdu'
}

export enum ExemplaireEtat {
  NEUF = 'Neuf',
  BON = 'Bon',
  USE = 'Usé',
  ENDOMMAGE = 'Endommagé'
}

export interface Exemplaire {
  id_exemplaire: number;
  id_album: number;
  num_inventaire: string;
  statut: ExemplaireStatut;
  etat: ExemplaireEtat;
  date_achat: Date;
}

export interface CreateExemplaireDto {
  id_album: number;
  num_inventaire: string;
  statut: ExemplaireStatut;
  etat: ExemplaireEtat;
}

export interface UpdateExemplaireDto {
  num_inventaire?: string;
  statut?: ExemplaireStatut;
  etat?: ExemplaireEtat;
}