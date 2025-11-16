// Repository pour gérer les réservations
import { PrismaClient } from './prisma/generated/client';
import type { reservationsCreateInput, reservationsUpdateInput } from './prisma/generated/models/reservations';

const prisma = new PrismaClient();

/**
 * Repository pour gérer les réservations dans la base de données
 */
export class ReservationRepository {
  
  /**
   * Récupérer toutes les réservations
   */
  async findAll() {
    return await prisma.reservations.findMany();
  }

  /**
   * Récupérer une réservation par son ID
   */
  async findById(id: number) {
    return await prisma.reservations.findUnique({
      where: { id_reservation: id }
    });
  }

  /**
   * Récupérer toutes les réservations d'un utilisateur
   */
  async findByUserId(userId: number) {
    return await prisma.reservations.findMany({
      where: { id_utilisateur: userId }
    });
  }

  /**
   * Récupérer toutes les réservations d'un exemplaire
   */
  async findByExemplaireId(exemplaireId: number) {
    return await prisma.reservations.findMany({
      where: { id_exemplaire: exemplaireId }
    });
  }

  /**
   * Créer une nouvelle réservation
   */
  async create(data: reservationsCreateInput) {
    return await prisma.reservations.create({
      data
    });
  }

  /**
   * Mettre à jour une réservation
   */
  async update(id: number, data: reservationsUpdateInput) {
    return await prisma.reservations.update({
      where: { id_reservation: id },
      data
    });
  }

  /**
   * Supprimer une réservation
   */
  async delete(id: number) {
    return await prisma.reservations.delete({
      where: { id_reservation: id }
    });
  }
}
