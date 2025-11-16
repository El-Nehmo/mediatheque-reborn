// Repository pour gérer les exemplaires
import { PrismaClient } from './prisma/generated/client';
import type { exemplairesCreateInput, exemplairesUpdateInput } from './prisma/generated/models/exemplaires';

const prisma = new PrismaClient();

/**
 * Repository pour gérer les exemplaires dans la base de données
 */
export class ExemplaireRepository {
  
  /**
   * Récupérer tous les exemplaires
   */
  async findAll() {
    return await prisma.exemplaires.findMany();
  }

  /**
   * Récupérer un exemplaire par son ID
   */
  async findById(id: number) {
    return await prisma.exemplaires.findUnique({
      where: { id_exemplaire: id }
    });
  }

  /**
   * Récupérer tous les exemplaires d'un album
   */
  async findByAlbumId(albumId: number) {
    return await prisma.exemplaires.findMany({
      where: { id_album: albumId }
    });
  }

  /**
   * Récupérer un exemplaire par son numéro d'inventaire
   */
  async findByNumInventaire(numInventaire: string) {
    return await prisma.exemplaires.findUnique({
      where: { num_inventaire: numInventaire }
    });
  }

  /**
   * Créer un nouvel exemplaire
   */
  async create(data: exemplairesCreateInput) {
    return await prisma.exemplaires.create({
      data
    });
  }

  /**
   * Mettre à jour un exemplaire
   */
  async update(id: number, data: exemplairesUpdateInput) {
    return await prisma.exemplaires.update({
      where: { id_exemplaire: id },
      data
    });
  }

  /**
   * Supprimer un exemplaire
   */
  async delete(id: number) {
    return await prisma.exemplaires.delete({
      where: { id_exemplaire: id }
    });
  }
}
