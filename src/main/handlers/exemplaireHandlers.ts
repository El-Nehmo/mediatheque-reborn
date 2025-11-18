import { ipcMain } from 'electron';
import { ExemplaireService } from '../services/exemplaireService';

const exemplaireService = new ExemplaireService();

export function registerExemplaireHandlers() {
  
  ipcMain.handle('exemplaire:getAll', async () => {
    return await exemplaireService.getAllExemplaires();
  });

  ipcMain.handle('exemplaire:getById', async (event, id: number) => {
    return await exemplaireService.getExemplaireById(id);
  });

  ipcMain.handle('exemplaire:getByAlbumId', async (event, albumId: number) => {
    return await exemplaireService.getExemplairesByAlbumId(albumId);
  });

  ipcMain.handle('exemplaire:getByNumInventaire', async (event, numInventaire: string) => {
    return await exemplaireService.getExemplaireByNumInventaire(numInventaire);
  });

  ipcMain.handle('exemplaire:create', async (event, data) => {
    return await exemplaireService.createExemplaire(data);
  });

  ipcMain.handle('exemplaire:update', async (event, id: number, data) => {
    return await exemplaireService.updateExemplaire(id, data);
  });

  ipcMain.handle('exemplaire:delete', async (event, id: number) => {
    return await exemplaireService.deleteExemplaire(id);
  });
}
