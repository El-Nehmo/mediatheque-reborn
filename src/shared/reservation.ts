/**
 * Énumération pour les statuts de réservation
 */
export enum ReservationStatut {
  ACTIVE = 'Active',
  ANNULEE = 'Annulée',
  TERMINEE = 'Terminée'
}

export interface Reservation {
  id_reservation: number;
  id_utilisateur: number;
  id_exemplaire: number;
  date_debut: Date;
  date_fin: Date;
  statut: ReservationStatut;
}

export interface CreateReservationDto {
  id_utilisateur: number;
  id_exemplaire: number;
  date_debut: Date;
  date_fin: Date;
}

export interface UpdateReservationDto {
  date_debut?: Date;
  date_fin?: Date;
  statut?: ReservationStatut;
}
