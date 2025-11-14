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

/**
 * Interface représentant un exemplaire d'album
 */
export interface Exemplaire {
  id_exemplaire: number;
  id_album: number;
  num_inventaire: string;
  statut: ExemplaireStatut;
  etat: ExemplaireEtat;
  date_achat: Date;
}

/**
 * Interface pour créer un nouvel exemplaire
 */
export interface CreateExemplaireDto {
  id_album: number;
  num_inventaire: string;
  statut: ExemplaireStatut;
  etat: ExemplaireEtat;
}

/**
 * Interface pour mettre à jour un exemplaire
 */
export interface UpdateExemplaireDto {
  num_inventaire?: string;
  statut?: ExemplaireStatut;
  etat?: ExemplaireEtat;
}