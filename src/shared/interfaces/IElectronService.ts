export default interface IElectronService {
    // Services pour la médiathèque seront ajoutés ici
}

declare global {
    interface Window {
        electronService: IElectronService
    }
}