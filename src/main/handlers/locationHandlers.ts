import { ipcMain } from 'electron';
import { LocationService } from '../services/locationService';

const locationService = new LocationService();

export function registerLocationHandlers() {
  
  ipcMain.handle('location:getAll', async () => {
    return await locationService.getAllLocations();
  });

  ipcMain.handle('location:getById', async (event, id: number) => {
    return await locationService.getLocationById(id);
  });

  ipcMain.handle('location:getByUserId', async (event, userId: number) => {
    return await locationService.getLocationsByUserId(userId);
  });

  ipcMain.handle('location:getByExemplaireId', async (event, exemplaireId: number) => {
    return await locationService.getLocationsByExemplaireId(exemplaireId);
  });

  ipcMain.handle('location:create', async (event, data) => {
    return await locationService.createLocation(data);
  });

  ipcMain.handle('location:update', async (event, id: number, data) => {
    return await locationService.updateLocation(id, data);
  });

  ipcMain.handle('location:delete', async (event, id: number) => {
    return await locationService.deleteLocation(id);
  });
}
