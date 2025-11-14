// Interface TypeScript pour Location

export enum LocationStatut {
  EN_COURS = 'en_cours',
  TERMINEE = 'terminee',      
  EN_RETARD = 'en_retard'
}

export interface Location {
  id_location: number;
  id_utilisateur: number;
  id_exemplaire: number;
  date_location: Date;
  date_retour_prevue: Date;
  date_retour_reelle: Date | null;
  statut: LocationStatut;
}

export interface CreateLocationDto {
  id_utilisateur: number;
  id_exemplaire: number;
  date_retour_prevue: Date;
}

export interface UpdateLocationDto {
  date_retour_prevue?: Date;
  date_retour_reelle?: Date;
  statut?: LocationStatut;
}