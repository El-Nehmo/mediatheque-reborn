/**
 * Énumérations pour les moyens et statuts de paiement
 */
export enum PaiementMoyen {
  CARTE = 'Carte',
  ESPECES = 'Espèces',
  VIREMENT = 'Virement',
  EN_LIGNE = 'En ligne'
}

export enum PaiementStatut {
  VALIDE = 'Validé',
  EN_ATTENTE = 'En attente',
  ECHOUE = 'Échoué'
}

/**
 * Interface représentant un paiement
 */
export interface Paiement {
  id_paiement: number;
  id_location: number;
  montant: number;
  date_paiement: Date;
  moyen: PaiementMoyen;
  statut: PaiementStatut;
}

/**
 * Interface pour créer un nouveau paiement
 */
export interface CreatePaiementDto {
  id_location: number;
  montant: number;
  moyen: PaiementMoyen;
}

/**
 * Interface pour mettre à jour un paiement
 */
export interface UpdatePaiementDto {
  montant?: number;
  moyen?: PaiementMoyen;
  statut?: PaiementStatut;
}