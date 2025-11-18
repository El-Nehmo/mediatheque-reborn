import { ipcMain } from 'electron';
import { CategorieService } from '../services/categorieService';

const categorieService = new CategorieService();

export function registerCategorieHandlers() {

  ipcMain.handle('categorie:getAll', async () => {
    return await categorieService.getAllCategories();
  });

  ipcMain.handle('categorie:getById', async (event, id: number) => {
    return await categorieService.getCategorieById(id);
  });

  ipcMain.handle('categorie:create', async (event, data) => {
    return await categorieService.createCategorie(data);
  });

  ipcMain.handle('categorie:update', async (event, id: number, data) => {
    return await categorieService.updateCategorie(id, data);
  });

  ipcMain.handle('categorie:delete', async (event, id: number) => {
    return await categorieService.deleteCategorie(id);
  });
}
