// Repository pour gérer les utilisateurs
import { PrismaClient } from './prisma/generated/client';
import { Utilisateur, CreateUtilisateurDto, UpdateUtilisateurDto } from '../../shared/utilisateur';

const prisma = new PrismaClient();

export class UtilisateurRepository {
  
  async findAll(): Promise<Utilisateur[]> {
    return await prisma.utilisateurs.findMany();
  }

  async findById(id: number): Promise<Utilisateur | null> {
    return await prisma.utilisateurs.findUnique({
      where: { id_utilisateur: id }
    });
  }

  async findByEmail(email: string): Promise<Utilisateur | null> {
    return await prisma.utilisateurs.findUnique({
      where: { email: email }
    });
  }

  async create(data: CreateUtilisateurDto): Promise<Utilisateur> {
    return await prisma.utilisateurs.create({
      data
    });
  }

  async update(id: number, data: UpdateUtilisateurDto): Promise<Utilisateur> {
    return await prisma.utilisateurs.update({
      where: { id_utilisateur: id },
      data
    });
  }

  async delete(id: number): Promise<Utilisateur> {
    return await prisma.utilisateurs.delete({
      where: { id_utilisateur: id }
    });
  }
}
