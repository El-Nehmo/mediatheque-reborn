import { ipcMain } from 'electron';
import { ReservationService } from '../services/reservationService';

const reservationService = new ReservationService();

export function registerReservationHandlers() {
  
  ipcMain.handle('reservation:getAll', async () => {
    return await reservationService.getAllReservations();
  });

  ipcMain.handle('reservation:getById', async (event, id: number) => {
    return await reservationService.getReservationById(id);
  });

  ipcMain.handle('reservation:getByUserId', async (event, userId: number) => {
    return await reservationService.getReservationsByUserId(userId);
  });

  ipcMain.handle('reservation:getByExemplaireId', async (event, exemplaireId: number) => {
    return await reservationService.getReservationsByExemplaireId(exemplaireId);
  });

  ipcMain.handle('reservation:create', async (event, data) => {
    return await reservationService.createReservation(data);
  });

  ipcMain.handle('reservation:update', async (event, id: number, data) => {
    return await reservationService.updateReservation(id, data);
  });

  ipcMain.handle('reservation:delete', async (event, id: number) => {
    return await reservationService.deleteReservation(id);
  });
}
