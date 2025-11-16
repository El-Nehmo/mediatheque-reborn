// Repository pour gérer les locations
import { PrismaClient } from './prisma/generated/client';
import type { locationsCreateInput, locationsUpdateInput } from './prisma/generated/models/locations';

const prisma = new PrismaClient();

/**
 * Repository pour gérer les locations dans la base de données
 */
export class LocationRepository {
  
  /**
   * Récupérer toutes les locations
   */
  async findAll() {
    return await prisma.locations.findMany();
  }

  /**
   * Récupérer une location par son ID
   */
  async findById(id: number) {
    return await prisma.locations.findUnique({
      where: { id_location: id }
    });
  }

  /**
   * Récupérer toutes les locations d'un utilisateur
   */
  async findByUserId(userId: number) {
    return await prisma.locations.findMany({
      where: { id_utilisateur: userId }
    });
  }

  /**
   * Récupérer toutes les locations d'un exemplaire
   */
  async findByExemplaireId(exemplaireId: number) {
    return await prisma.locations.findMany({
      where: { id_exemplaire: exemplaireId }
    });
  }

  /**
   * Créer une nouvelle location
   */
  async create(data: locationsCreateInput) {
    return await prisma.locations.create({
      data
    });
  }

  /**
   * Mettre à jour une location
   */
  async update(id: number, data: locationsUpdateInput) {
    return await prisma.locations.update({
      where: { id_location: id },
      data
    });
  }

  /**
   * Supprimer une location
   */
  async delete(id: number) {
    return await prisma.locations.delete({
      where: { id_location: id }
    });
  }
}
