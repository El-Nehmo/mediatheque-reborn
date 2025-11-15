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

export interface Paiement {
  id_paiement: number;
  id_location: number;
  montant: number;
  date_paiement: Date;
  moyen: PaiementMoyen;
  statut: PaiementStatut;
}

export interface CreatePaiementDto {
  id_location: number;
  montant: number;
  moyen: PaiementMoyen;
}

export interface UpdatePaiementDto {
  montant?: number;
  moyen?: PaiementMoyen;
  statut?: PaiementStatut;
}