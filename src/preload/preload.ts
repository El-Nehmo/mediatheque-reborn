import { contextBridge, ipcRenderer } from "electron";
import IElectronService from "src/shared/interfaces/IElectronService";

contextBridge.exposeInMainWorld("electronService", {
    getAlbums: async () => {
        return await ipcRenderer.invoke("getAlbums");
    }
} as IElectronService)