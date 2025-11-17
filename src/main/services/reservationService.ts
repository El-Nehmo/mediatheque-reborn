// Service pour la logique métier des réservations
import { ReservationRepository } from '../repositories/reservationRepository';
import type { reservationsCreateInput, reservationsUpdateInput } from '../repositories/prisma/generated/models/reservations';

export class ReservationService {
  private reservationRepository: ReservationRepository;

  constructor() {
    this.reservationRepository = new ReservationRepository();
  }

  async getAllReservations() {
    try {
      const reservations = await this.reservationRepository.findAll();
      return { success: true, data: reservations };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des réservations' };
    }
  }

  async getReservationById(id: number) {
    try {
      const reservation = await this.reservationRepository.findById(id);
      if (!reservation) {
        return { success: false, error: 'Réservation non trouvée' };
      }
      return { success: true, data: reservation };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de la réservation' };
    }
  }

  async getReservationsByUserId(userId: number) {
    try {
      const reservations = await this.reservationRepository.findByUserId(userId);
      return { success: true, data: reservations };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des réservations' };
    }
  }

  async getReservationsByExemplaireId(exemplaireId: number) {
    try {
      const reservations = await this.reservationRepository.findByExemplaireId(exemplaireId);
      return { success: true, data: reservations };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des réservations' };
    }
  }

  async createReservation(data: reservationsCreateInput) {
    try {
      const reservation = await this.reservationRepository.create(data);
      return { success: true, data: reservation };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création de la réservation' };
    }
  }

  async updateReservation(id: number, data: reservationsUpdateInput) {
    try {
      const exists = await this.reservationRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Réservation non trouvée' };
      }

      const reservation = await this.reservationRepository.update(id, data);
      return { success: true, data: reservation };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour de la réservation' };
    }
  }

  async deleteReservation(id: number) {
    try {
      const exists = await this.reservationRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Réservation non trouvée' };
      }

      await this.reservationRepository.delete(id);
      return { success: true, message: 'Réservation supprimée avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression de la réservation' };
    }
  }
}
