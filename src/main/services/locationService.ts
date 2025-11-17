// Service pour la logique métier des locations
import { LocationRepository } from '../repositories/locationRepository';
import type { locationsCreateInput, locationsUpdateInput } from '../repositories/prisma/generated/models/locations';

export class LocationService {
  private locationRepository: LocationRepository;

  constructor() {
    this.locationRepository = new LocationRepository();
  }

  async getAllLocations() {
    try {
      const locations = await this.locationRepository.findAll();
      return { success: true, data: locations };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des locations' };
    }
  }

  async getLocationById(id: number) {
    try {
      const location = await this.locationRepository.findById(id);
      if (!location) {
        return { success: false, error: 'Location non trouvée' };
      }
      return { success: true, data: location };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de la location' };
    }
  }

  async getLocationsByUserId(userId: number) {
    try {
      const locations = await this.locationRepository.findByUserId(userId);
      return { success: true, data: locations };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des locations' };
    }
  }

  async getLocationsByExemplaireId(exemplaireId: number) {
    try {
      const locations = await this.locationRepository.findByExemplaireId(exemplaireId);
      return { success: true, data: locations };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des locations' };
    }
  }

  async createLocation(data: locationsCreateInput) {
    try {
      const location = await this.locationRepository.create(data);
      return { success: true, data: location };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création de la location' };
    }
  }

  async updateLocation(id: number, data: locationsUpdateInput) {
    try {
      const exists = await this.locationRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Location non trouvée' };
      }

      const location = await this.locationRepository.update(id, data);
      return { success: true, data: location };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour de la location' };
    }
  }

  async deleteLocation(id: number) {
    try {
      const exists = await this.locationRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Location non trouvée' };
      }

      await this.locationRepository.delete(id);
      return { success: true, message: 'Location supprimée avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression de la location' };
    }
  }
}
