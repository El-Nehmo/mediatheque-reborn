import { PrismaClient } from './prisma/generated/client';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import type { exemplairesCreateInput, exemplairesUpdateInput } from './prisma/generated/models/exemplaires';


export class ExemplaireRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  
  async findAll() {
    return await this.dbclient.exemplaires.findMany();
  }

  async findById(id: number) {
    return await this.dbclient.exemplaires.findUnique({
      where: { id_exemplaire: id }
    });
  }

  async findByAlbumId(albumId: number) {
    return await this.dbclient.exemplaires.findMany({
      where: { id_album: albumId }
    });
  }

  async findByNumInventaire(numInventaire: string) {
    return await this.dbclient.exemplaires.findUnique({
      where: { num_inventaire: numInventaire }
    });
  }

  async create(data: exemplairesCreateInput) {
    return await this.dbclient.exemplaires.create({
      data
    });
  }

  async update(id: number, data: exemplairesUpdateInput) {
    return await this.dbclient.exemplaires.update({
      where: { id_exemplaire: id },
      data
    });
  }

  async delete(id: number) {
    return await this.dbclient.exemplaires.delete({
      where: { id_exemplaire: id }
    });
  }
}
