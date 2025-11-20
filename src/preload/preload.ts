import { contextBridge, ipcRenderer } from "electron";
import IElectronService from "src/shared/interfaces/IElectronService";

contextBridge.exposeInMainWorld("electronService", {
    getAlbums: async () => {
        return await ipcRenderer.invoke("getAlbums");
    },
    getAlbumById: async (id: number) => {
        return await ipcRenderer.invoke("getAlbumById", id);
    },
    getCategories: async () => {
        return await ipcRenderer.invoke("getCategories");
    },
    getUtilisateurs: async () => {
        return await ipcRenderer.invoke("getUtilisateurs");
    },
    getExemplaires: async () => {
        return await ipcRenderer.invoke("getExemplaires");
    }
});