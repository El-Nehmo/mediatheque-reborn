// Repository pour gérer les locations
import { PrismaClient } from './prisma/generated/client';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import type { locationsCreateInput, locationsUpdateInput } from './prisma/generated/models/locations';

/**
 * Repository pour gérer les locations dans la base de données
 */
export class LocationRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  
  /**
   * Récupérer toutes les locations
   */
  async findAll() {
    return await this.dbclient.locations.findMany();
  }

  /**
   * Récupérer une location par son ID
   */
  async findById(id: number) {
    return await this.dbclient.locations.findUnique({
      where: { id_location: id }
    });
  }

  /**
   * Récupérer toutes les locations d'un utilisateur
   */
  async findByUserId(userId: number) {
    return await this.dbclient.locations.findMany({
      where: { id_utilisateur: userId }
    });
  }

  /**
   * Récupérer toutes les locations d'un exemplaire
   */
  async findByExemplaireId(exemplaireId: number) {
    return await this.dbclient.locations.findMany({
      where: { id_exemplaire: exemplaireId }
    });
  }

  /**
   * Créer une nouvelle location
   */
  async create(data: locationsCreateInput) {
    return await this.dbclient.locations.create({
      data
    });
  }

  /**
   * Mettre à jour une location
   */
  async update(id: number, data: locationsUpdateInput) {
    return await this.dbclient.locations.update({
      where: { id_location: id },
      data
    });
  }

  /**
   * Supprimer une location
   */
  async delete(id: number) {
    return await this.dbclient.locations.delete({
      where: { id_location: id }
    });
  }
}
