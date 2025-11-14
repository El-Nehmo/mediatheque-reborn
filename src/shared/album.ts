// Interface TypeScript pour Album
export interface Album {
    id_album: number;
    titre: string;
    artiste: string; 
    maison_disque: string | null; 
    annee_sortie: number | null; 
}

export interface CreateAlbumDto {
    titre: string;
    artiste: string;
    maison_disque?: string;
    annee_sortie?: number;
}

export interface UpdateAlbumDto {
    titre?: string;
    artiste?: string;
    maison_disque?: string;
    annee_sortie?: number;
}