// Service pour la logique métier des albums
import { AlbumRepository } from '../repositories/albumRepository';
import { CreateAlbumDto, UpdateAlbumDto } from '../../shared/album';

export class AlbumService {
  private albumRepository: AlbumRepository;

  constructor() {
    this.albumRepository = new AlbumRepository();
  }

  async getAllAlbums() {
    try {
      const albums = await this.albumRepository.findAll();
      return { success: true, data: albums };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des albums' };
    }
  }

  async getAlbumById(id: number) {
    try {
      const album = await this.albumRepository.findById(id);
      if (!album) {
        return { success: false, error: 'Album non trouvé' };
      }
      return { success: true, data: album };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de l\'album' };
    }
  }

  async createAlbum(data: CreateAlbumDto) {
    try {
      if (!data.titre || data.titre.trim() === '') {
        return { success: false, error: 'Le titre est obligatoire' };
      }
      if (!data.artiste || data.artiste.trim() === '') {
        return { success: false, error: 'L\'artiste est obligatoire' };
      }
      if (!data.ean || data.ean.trim() === '') {
        return { success: false, error: 'L\'EAN est obligatoire' };
      }

      const album = await this.albumRepository.create(data);
      return { success: true, data: album };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création de l\'album' };
    }
  }

  async updateAlbum(id: number, data: UpdateAlbumDto) {
    try {
      const exists = await this.albumRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Album non trouvé' };
      }

      const album = await this.albumRepository.update(id, data);
      return { success: true, data: album };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour de l\'album' };
    }
  }

  async deleteAlbum(id: number) {
    try {
      const exists = await this.albumRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Album non trouvé' };
      }

      await this.albumRepository.delete(id);
      return { success: true, message: 'Album supprimé avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression de l\'album' };
    }
  }
}
