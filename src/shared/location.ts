/**
 * Énumération pour les statuts de location
 */
export enum LocationStatut {
  EN_COURS = 'En cours',
  TERMINEE = 'Terminée',      
  EN_RETARD = 'En retard'
}

export interface Location {
  id_location: number;
  id_utilisateur: number;
  id_exemplaire: number;
  id_reservation: number | null;
  date_location: Date;
  date_retour_prevue: Date;
  date_retour_reelle: Date | null;
  montant_location: number;
  penalites_retard: number | null;
  statut: LocationStatut;
}

export interface CreateLocationDto {
  id_utilisateur: number;
  id_exemplaire: number;
  date_retour_prevue: Date;
  montant_location: number;
  id_reservation?: number;
}

export interface UpdateLocationDto {
  date_retour_prevue?: Date;
  date_retour_reelle?: Date;
  montant_location?: number;
  penalites_retard?: number;
  statut?: LocationStatut;
}