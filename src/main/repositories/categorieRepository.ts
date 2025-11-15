import { PrismaClient } from './prisma/generated/client';
import { Categorie, CreateCategorieDto, UpdateCategorieDto } from '../../shared/categorie';

const prisma = new PrismaClient();

/**
 * Repository pour gérer les catégories dans la base de données
 */
export class CategorieRepository {
  
  async findAll(): Promise<Categorie[]> {
    return await prisma.categories.findMany();
  }

  async findById(id: number): Promise<Categorie | null> {
    return await prisma.categories.findUnique({
      where: { id_categorie: id }
    });
  }

  async create(data: CreateCategorieDto): Promise<Categorie> {
    return await prisma.categories.create({
      data
    });
  }

  async update(id: number, data: UpdateCategorieDto): Promise<Categorie> {
    return await prisma.categories.update({
      where: { id_categorie: id },
      data
    });
  }

  async delete(id: number): Promise<Categorie> {
    return await prisma.categories.delete({
      where: { id_categorie: id }
    });
  }
}
