// Repository pour gérer les utilisateurs
import { PrismaClient } from './prisma/generated/client';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { Utilisateur, CreateUtilisateurDto, UpdateUtilisateurDto } from '../../shared/utilisateur';

export class UtilisateurRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  
  async findAll(): Promise<Utilisateur[]> {
    return await this.dbclient.utilisateurs.findMany();
  }

  async findById(id: number): Promise<Utilisateur | null> {
    return await this.dbclient.utilisateurs.findUnique({
      where: { id_utilisateur: id }
    });
  }

  async findByEmail(email: string): Promise<Utilisateur | null> {
    return await this.dbclient.utilisateurs.findUnique({
      where: { email: email }
    });
  }

  async create(data: CreateUtilisateurDto): Promise<Utilisateur> {
    return await this.dbclient.utilisateurs.create({
      data
    });
  }

  async update(id: number, data: UpdateUtilisateurDto): Promise<Utilisateur> {
    return await this.dbclient.utilisateurs.update({
      where: { id_utilisateur: id },
      data
    });
  }

  async delete(id: number): Promise<Utilisateur> {
    return await this.dbclient.utilisateurs.delete({
      where: { id_utilisateur: id }
    });
  }
}
