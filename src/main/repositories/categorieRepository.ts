import { PrismaClient } from './prisma/generated/client';
import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import { Categorie, CreateCategorieDto, UpdateCategorieDto } from '../../shared/categorie';

export class CategorieRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  
  async findAll(): Promise<Categorie[]> {
    return await this.dbclient.categories.findMany();
  }

  async findById(id: number): Promise<Categorie | null> {
    return await this.dbclient.categories.findUnique({
      where: { id_categorie: id }
    });
  }

  async create(data: CreateCategorieDto): Promise<Categorie> {
    return await this.dbclient.categories.create({
      data
    });
  }

  async update(id: number, data: UpdateCategorieDto): Promise<Categorie> {
    return await this.dbclient.categories.update({
      where: { id_categorie: id },
      data
    });
  }

  async delete(id: number): Promise<Categorie> {
    return await this.dbclient.categories.delete({
      where: { id_categorie: id }
    });
  }
}
