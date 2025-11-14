// Interface TypeScript pour Paiement
export enum PaiementMoyen {
  CARTE = 'carte',
  ESPECE = 'espece',
  VIREMENT = 'virement'
}

export enum PaiementStatut {
  EN_ATTENTE = 'en_attente',
  PAYE = 'paye',
  REMBOURSE = 'rembourse'
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