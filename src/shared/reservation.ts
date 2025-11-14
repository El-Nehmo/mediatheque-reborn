// Interface TypeScript pour Réservation

export enum ReservationStatut {
  EN_ATTENTE = 'en_attente',
  CONFIRMEE = 'confirmee',
  ANNULEE = 'annulee'
}

export interface Reservation {
  id_reservation: number;
  id_utilisateur: number;
  id_exemplaire: number;
  date_reservation: Date;
  statut: ReservationStatut;
}

export interface CreateReservationDto {
  id_utilisateur: number;
  id_exemplaire: number;
}

export interface UpdateReservationDto {
  statut?: ReservationStatut;
}
