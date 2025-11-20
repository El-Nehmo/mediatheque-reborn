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
    },
    getLocations: async () => {
        const result = await ipcRenderer.invoke('location:getAll');
        return result.data ?? [];
    },
    getReservations: async () => {
        const result = await ipcRenderer.invoke('reservation:getAll');
        return result.data ?? [];
    },
    getPaiements: async () => {
        const result = await ipcRenderer.invoke('paiement:getAll');
        return result.data ?? [];
    },
    createAlbum: async (data: import("../shared/album").CreateAlbumDto) => {
        return await ipcRenderer.invoke('album:create', data);
    },
    updateAlbum: async (id: number, data: import("../shared/album").UpdateAlbumDto) => {
        return await ipcRenderer.invoke('album:update', id, data);
    },
    deleteAlbum: async (id: number) => {
        return await ipcRenderer.invoke('album:delete', id);
    },
    loginUser: async (data: { email: string; password: string }) => {
        return await ipcRenderer.invoke('user:login', data);
    },
});