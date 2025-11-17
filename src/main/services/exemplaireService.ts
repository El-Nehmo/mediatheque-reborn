// Service pour la logique métier des exemplaires
import { ExemplaireRepository } from '../repositories/exemplaireRepository';
import type { exemplairesCreateInput, exemplairesUpdateInput } from '../repositories/prisma/generated/models/exemplaires';

export class ExemplaireService {
  private exemplaireRepository: ExemplaireRepository;

  constructor() {
    this.exemplaireRepository = new ExemplaireRepository();
  }

  async getAllExemplaires() {
    try {
      const exemplaires = await this.exemplaireRepository.findAll();
      return { success: true, data: exemplaires };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des exemplaires' };
    }
  }

  async getExemplaireById(id: number) {
    try {
      const exemplaire = await this.exemplaireRepository.findById(id);
      if (!exemplaire) {
        return { success: false, error: 'Exemplaire non trouvé' };
      }
      return { success: true, data: exemplaire };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de l\'exemplaire' };
    }
  }

  async getExemplairesByAlbumId(albumId: number) {
    try {
      const exemplaires = await this.exemplaireRepository.findByAlbumId(albumId);
      return { success: true, data: exemplaires };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des exemplaires' };
    }
  }

  async getExemplaireByNumInventaire(numInventaire: string) {
    try {
      const exemplaire = await this.exemplaireRepository.findByNumInventaire(numInventaire);
      if (!exemplaire) {
        return { success: false, error: 'Exemplaire non trouvé' };
      }
      return { success: true, data: exemplaire };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de l\'exemplaire' };
    }
  }

  async createExemplaire(data: exemplairesCreateInput) {
    try {
      const exemplaire = await this.exemplaireRepository.create(data);
      return { success: true, data: exemplaire };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création de l\'exemplaire' };
    }
  }

  async updateExemplaire(id: number, data: exemplairesUpdateInput) {
    try {
      const exists = await this.exemplaireRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Exemplaire non trouvé' };
      }

      const exemplaire = await this.exemplaireRepository.update(id, data);
      return { success: true, data: exemplaire };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour de l\'exemplaire' };
    }
  }

  async deleteExemplaire(id: number) {
    try {
      const exists = await this.exemplaireRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Exemplaire non trouvé' };
      }

      await this.exemplaireRepository.delete(id);
      return { success: true, message: 'Exemplaire supprimé avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression de l\'exemplaire' };
    }
  }
}
