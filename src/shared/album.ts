/**
 * Interface représentant un album musical
 */
export interface Album {
    id_album: number;
    titre: string;
    artiste: string; 
    maison_disque: string | null; 
    annee_sortie: number | null;
    nb_pistes: number | null;
    description: string | null;
    ean: string;
}

/**
 * Interface pour créer un nouvel album
 */
export interface CreateAlbumDto {
    titre: string;
    artiste: string;
    ean: string;
    maison_disque?: string;
    annee_sortie?: number;
    nb_pistes?: number;
    description?: string;
}

/**
 * Interface pour mettre à jour un album
 */
export interface UpdateAlbumDto {
    titre?: string;
    artiste?: string;
    maison_disque?: string;
    annee_sortie?: number;
    nb_pistes?: number;
    description?: string;
    ean?: string;
}