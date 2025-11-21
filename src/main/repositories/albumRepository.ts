import { PrismaClient } from './prisma/generated/client';
import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import { Album, CreateAlbumDto, UpdateAlbumDto } from '../../shared/album';

export class AlbumRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  
  async findAll(): Promise<Album[]> {
    return await this.dbclient.albums.findMany();
  }

  async findById(id: number): Promise<Album | null> {
    return await this.dbclient.albums.findUnique({
      where: { id_album: id }
    });
  }

  async create(data: CreateAlbumDto): Promise<Album> {
    return await this.dbclient.albums.create({
      data:data
    });
  }

  async update(id: number, data: UpdateAlbumDto): Promise<Album> {
    return await this.dbclient.albums.update({
      where: { id_album: id },
      data:data
    });
  }

  async delete(id: number): Promise<Album> {
    return await this.dbclient.albums.delete({
      where: { id_album: id }
    });
  }
}
