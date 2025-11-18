import { ipcMain } from 'electron';
import { AlbumService } from '../services/albumService';

const albumService = new AlbumService();

export function registerAlbumHandlers() {

  ipcMain.handle('album:getAll', async () => {
    return await albumService.getAllAlbums();
  });

  ipcMain.handle('album:getById', async (event, id: number) => {
    return await albumService.getAlbumById(id);
  });

  ipcMain.handle('album:create', async (event, data) => {
    return await albumService.createAlbum(data);
  });

  ipcMain.handle('album:update', async (event, id: number, data) => {
    return await albumService.updateAlbum(id, data);
  });

  ipcMain.handle('album:delete', async (event, id: number) => {
    return await albumService.deleteAlbum(id);
  });
}
