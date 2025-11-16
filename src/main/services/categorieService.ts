// Service pour la logique métier des catégories
import { CategorieRepository } from '../repositories/categorieRepository';
import { CreateCategorieDto, UpdateCategorieDto } from '../../shared/categorie';

export class CategorieService {
  private categorieRepository: CategorieRepository;

  constructor() {
    this.categorieRepository = new CategorieRepository();
  }

  async getAllCategories() {
    try {
      const categories = await this.categorieRepository.findAll();
      return { success: true, data: categories };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des catégories' };
    }
  }

  async getCategorieById(id: number) {
    try {
      const categorie = await this.categorieRepository.findById(id);
      if (!categorie) {
        return { success: false, error: 'Catégorie non trouvée' };
      }
      return { success: true, data: categorie };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de la catégorie' };
    }
  }

  async createCategorie(data: CreateCategorieDto) {
    try {
      if (!data.nom_categorie || data.nom_categorie.trim() === '') {
        return { success: false, error: 'Le nom de la catégorie est obligatoire' };
      }

      const categorie = await this.categorieRepository.create(data);
      return { success: true, data: categorie };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création de la catégorie' };
    }
  }

  async updateCategorie(id: number, data: UpdateCategorieDto) {
    try {
      const exists = await this.categorieRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Catégorie non trouvée' };
      }

      const categorie = await this.categorieRepository.update(id, data);
      return { success: true, data: categorie };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour de la catégorie' };
    }
  }

  async deleteCategorie(id: number) {
    try {
      const exists = await this.categorieRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Catégorie non trouvée' };
      }

      await this.categorieRepository.delete(id);
      return { success: true, message: 'Catégorie supprimée avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression de la catégorie' };
    }
  }
}
