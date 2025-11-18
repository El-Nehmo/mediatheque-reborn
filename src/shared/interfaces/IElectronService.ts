export default interface IElectronService {
    getAlbums(): Promise<any[]>;
    // D'autres services pourront être ajoutés ici
}

declare global {
    interface Window {
        electronService: IElectronService
    }
}