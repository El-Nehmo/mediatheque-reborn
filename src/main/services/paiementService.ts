// Service pour la logique métier des paiements
import { PaiementRepository } from '../repositories/paiementRepository';
import type { paiementsCreateInput, paiementsUpdateInput } from '../repositories/prisma/generated/models/paiements';

export class PaiementService {
  private paiementRepository: PaiementRepository;

  constructor() {
    this.paiementRepository = new PaiementRepository();
  }

  async getAllPaiements() {
    try {
      const paiements = await this.paiementRepository.findAll();
      return { success: true, data: paiements };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des paiements' };
    }
  }

  async getPaiementById(id: number) {
    try {
      const paiement = await this.paiementRepository.findById(id);
      if (!paiement) {
        return { success: false, error: 'Paiement non trouvé' };
      }
      return { success: true, data: paiement };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération du paiement' };
    }
  }

  async getPaiementsByLocationId(locationId: number) {
    try {
      const paiements = await this.paiementRepository.findByLocationId(locationId);
      return { success: true, data: paiements };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des paiements' };
    }
  }

  async createPaiement(data: paiementsCreateInput) {
    try {
      const paiement = await this.paiementRepository.create(data);
      return { success: true, data: paiement };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création du paiement' };
    }
  }

  async updatePaiement(id: number, data: paiementsUpdateInput) {
    try {
      const exists = await this.paiementRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Paiement non trouvé' };
      }

      const paiement = await this.paiementRepository.update(id, data);
      return { success: true, data: paiement };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour du paiement' };
    }
  }

  async deletePaiement(id: number) {
    try {
      const exists = await this.paiementRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Paiement non trouvé' };
      }

      await this.paiementRepository.delete(id);
      return { success: true, message: 'Paiement supprimé avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression du paiement' };
    }
  }
}
