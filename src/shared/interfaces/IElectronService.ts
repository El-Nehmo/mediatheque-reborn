export default interface IElectronService {
    getAlbums(): Promise<any[]>;
    getAlbumById(id: number): Promise<any>;
    getCategories(): Promise<any[]>;
    getUtilisateurs(): Promise<any[]>;
    getExemplaires(): Promise<any[]>;
    getLocations(): Promise<Location[]>;
    getReservations(): Promise<any[]>;
    // D'autres services pourront être ajoutés ici
}

declare global {
    interface Window {
        electronService: IElectronService;
    }
}