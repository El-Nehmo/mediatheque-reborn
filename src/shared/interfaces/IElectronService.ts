export default interface IElectronService {
    getAlbums(): Promise<any[]>;
    getAlbumById(id: number): Promise<any>;
    getCategories(): Promise<any[]>;
    getUtilisateurs(): Promise<any[]>;
    getExemplaires(): Promise<any[]>;
    getLocations(): Promise<Location[]>;
    getReservations(): Promise<any[]>;
    getPaiements(): Promise<any[]>;
    createAlbum(data: any): Promise<any>;
    updateAlbum(id: number, data: import("../album").UpdateAlbumDto): Promise<any>;
    deleteAlbum(id: number): Promise<any>;
    loginUser(data: { email: string; password: string }): Promise<any>;
    // D'autres services pourront être ajoutés ici
}

declare global {
    interface Window {
        electronService: IElectronService;
    }
}