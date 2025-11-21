// Repository pour gérer les paiements
import { PrismaClient } from './prisma/generated/client';
import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import type { paiementsCreateInput, paiementsUpdateInput } from './prisma/generated/models/paiements';

/**
 * Repository pour gérer les paiements dans la base de données
 */
export class PaiementRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  
  /**
   * Récupérer tous les paiements
   */
  async findAll() {
    return await this.dbclient.paiements.findMany();
  }

  /**
   * Récupérer un paiement par son ID
   */
  async findById(id: number) {
    return await this.dbclient.paiements.findUnique({
      where: { id_paiement: id }
    });
  }

  /**
   * Récupérer tous les paiements d'une location
   */
  async findByLocationId(locationId: number) {
    return await this.dbclient.paiements.findMany({
      where: { id_location: locationId }
    });
  }

  /**
   * Créer un nouveau paiement
   */
  async create(data: paiementsCreateInput) {
    return await this.dbclient.paiements.create({
      data
    });
  }

  /**
   * Mettre à jour un paiement
   */
  async update(id: number, data: paiementsUpdateInput) {
    return await this.dbclient.paiements.update({
      where: { id_paiement: id },
      data
    });
  }

  /**
   * Supprimer un paiement
   */
  async delete(id: number) {
    return await this.dbclient.paiements.delete({
      where: { id_paiement: id }
    });
  }
}
