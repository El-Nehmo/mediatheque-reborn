import { ipcMain } from 'electron';
import { PaiementService } from '../services/paiementService';

const paiementService = new PaiementService();

export function registerPaiementHandlers() {
  
  ipcMain.handle('paiement:getAll', async () => {
    return await paiementService.getAllPaiements();
  });

  ipcMain.handle('paiement:getById', async (event, id: number) => {
    return await paiementService.getPaiementById(id);
  });

  ipcMain.handle('paiement:getByLocationId', async (event, locationId: number) => {
    return await paiementService.getPaiementsByLocationId(locationId);
  });

  ipcMain.handle('paiement:create', async (event, data) => {
    return await paiementService.createPaiement(data);
  });

  ipcMain.handle('paiement:update', async (event, id: number, data) => {
    return await paiementService.updatePaiement(id, data);
  });

  ipcMain.handle('paiement:delete', async (event, id: number) => {
    return await paiementService.deletePaiement(id);
  });
}
