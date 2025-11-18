import { ipcMain } from 'electron';
import { UtilisateurService } from '../services/utilisateurService';

const utilisateurService = new UtilisateurService();

export function registerUtilisateurHandlers() {
  
  ipcMain.handle('utilisateur:getAll', async () => {
    return await utilisateurService.getAllUtilisateurs();
  });

  ipcMain.handle('utilisateur:getById', async (event, id: number) => {
    return await utilisateurService.getUtilisateurById(id);
  });

  ipcMain.handle('utilisateur:getByEmail', async (event, email: string) => {
    return await utilisateurService.getUtilisateurByEmail(email);
  });

  ipcMain.handle('utilisateur:create', async (event, data) => {
    return await utilisateurService.createUtilisateur(data);
  });

  ipcMain.handle('utilisateur:update', async (event, id: number, data) => {
    return await utilisateurService.updateUtilisateur(id, data);
  });

  ipcMain.handle('utilisateur:delete', async (event, id: number) => {
    return await utilisateurService.deleteUtilisateur(id);
  });
}
