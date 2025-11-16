// Repository pour gérer les paiements
import { PrismaClient } from './prisma/generated/client';
import type { paiementsCreateInput, paiementsUpdateInput } from './prisma/generated/models/paiements';

const prisma = new PrismaClient();

/**
 * Repository pour gérer les paiements dans la base de données
 */
export class PaiementRepository {
  
  /**
   * Récupérer tous les paiements
   */
  async findAll() {
    return await prisma.paiements.findMany();
  }

  /**
   * Récupérer un paiement par son ID
   */
  async findById(id: number) {
    return await prisma.paiements.findUnique({
      where: { id_paiement: id }
    });
  }

  /**
   * Récupérer tous les paiements d'une location
   */
  async findByLocationId(locationId: number) {
    return await prisma.paiements.findMany({
      where: { id_location: locationId }
    });
  }

  /**
   * Créer un nouveau paiement
   */
  async create(data: paiementsCreateInput) {
    return await prisma.paiements.create({
      data
    });
  }

  /**
   * Mettre à jour un paiement
   */
  async update(id: number, data: paiementsUpdateInput) {
    return await prisma.paiements.update({
      where: { id_paiement: id },
      data
    });
  }

  /**
   * Supprimer un paiement
   */
  async delete(id: number) {
    return await prisma.paiements.delete({
      where: { id_paiement: id }
    });
  }
}
