/**
 * Énumération pour les statuts de réservation
 */
export enum ReservationStatut {
  ACTIVE = 'Active',
  ANNULEE = 'Annulée',
  TERMINEE = 'Terminée'
}

/**
 * Interface représentant une réservation
 */
export interface Reservation {
  id_reservation: number;
  id_utilisateur: number;
  id_exemplaire: number;
  date_debut: Date;
  date_fin: Date;
  statut: ReservationStatut;
}

/**
 * Interface pour créer une nouvelle réservation
 */
export interface CreateReservationDto {
  id_utilisateur: number;
  id_exemplaire: number;
  date_debut: Date;
  date_fin: Date;
}

/**
 * Interface pour mettre à jour une réservation
 */
export interface UpdateReservationDto {
  date_debut?: Date;
  date_fin?: Date;
  statut?: ReservationStatut;
}
