// Service pour la logique métier des utilisateurs
import { UtilisateurRepository } from '../repositories/utilisateurRepository';
import { CreateUtilisateurDto, UpdateUtilisateurDto } from '../../shared/utilisateur';

export class UtilisateurService {
  private utilisateurRepository: UtilisateurRepository;

  constructor() {
    this.utilisateurRepository = new UtilisateurRepository();
  }

  async getAllUtilisateurs() {
    try {
      const utilisateurs = await this.utilisateurRepository.findAll();
      return { success: true, data: utilisateurs };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération des utilisateurs' };
    }
  }

  async getUtilisateurById(id: number) {
    try {
      const utilisateur = await this.utilisateurRepository.findById(id);
      if (!utilisateur) {
        return { success: false, error: 'Utilisateur non trouvé' };
      }
      return { success: true, data: utilisateur };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de l\'utilisateur' };
    }
  }

  async getUtilisateurByEmail(email: string) {
    try {
      const utilisateur = await this.utilisateurRepository.findByEmail(email);
      if (!utilisateur) {
        return { success: false, error: 'Utilisateur non trouvé' };
      }
      return { success: true, data: utilisateur };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la récupération de l\'utilisateur' };
    }
  }

  async createUtilisateur(data: CreateUtilisateurDto) {
    try {
      if (!data.nom || data.nom.trim() === '') {
        return { success: false, error: 'Le nom est obligatoire' };
      }
      if (!data.prenom || data.prenom.trim() === '') {
        return { success: false, error: 'Le prénom est obligatoire' };
      }
      if (!data.email || data.email.trim() === '') {
        return { success: false, error: 'L\'email est obligatoire' };
      }
      if (!data.password_hash || data.password_hash.trim() === '') {
        return { success: false, error: 'Le mot de passe est obligatoire' };
      }

      const emailExists = await this.utilisateurRepository.findByEmail(data.email);
      if (emailExists) {
        return { success: false, error: 'Cet email est déjà utilisé' };
      }

      const utilisateur = await this.utilisateurRepository.create(data);
      return { success: true, data: utilisateur };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la création de l\'utilisateur' };
    }
  }

  async updateUtilisateur(id: number, data: UpdateUtilisateurDto) {
    try {
      const exists = await this.utilisateurRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Utilisateur non trouvé' };
      }

      const utilisateur = await this.utilisateurRepository.update(id, data);
      return { success: true, data: utilisateur };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la mise à jour de l\'utilisateur' };
    }
  }

  async deleteUtilisateur(id: number) {
    try {
      const exists = await this.utilisateurRepository.findById(id);
      if (!exists) {
        return { success: false, error: 'Utilisateur non trouvé' };
      }

      await this.utilisateurRepository.delete(id);
      return { success: true, message: 'Utilisateur supprimé avec succès' };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la suppression de l\'utilisateur' };
    }
  }
  async loginUser(data: { email: string; password: string }) {
    try {
      const utilisateur = await this.utilisateurRepository.findByEmail(data.email);
      if (!utilisateur) {
        return { success: false, error: 'Utilisateur non trouvé' };
      }
    
      if (data.password !== utilisateur.password_hash) { // À remplacer par une vraie vérification hash
        return { success: false, error: 'Mot de passe incorrect' };
      }
      return { success: true, data: utilisateur };
    } catch (error) {
      return { success: false, error: 'Erreur lors de la connexion utilisateur' };
    }
  }
}
