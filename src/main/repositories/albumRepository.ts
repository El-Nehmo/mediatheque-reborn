// Repository pour gérer les albums
import { PrismaClient } from './prisma/generated/client';
import { Album, CreateAlbumDto, UpdateAlbumDto } from '../../shared/album';

const prisma = new PrismaClient();


export class AlbumRepository {
  
  async findAll(): Promise<Album[]> {
    return await prisma.albums.findMany();
  }

  async findById(id: number): Promise<Album | null> {
    return await prisma.albums.findUnique({
      where: { id_album: id }
    });
  }

  async create(data: CreateAlbumDto): Promise<Album> {
    return await prisma.albums.create({
      data:data
    });
  }


  async update(id: number, data: UpdateAlbumDto): Promise<Album> {
    return await prisma.albums.update({
      where: { id_album: id },
      data:data
    });
  }

  async delete(id: number): Promise<Album> {
    return await prisma.albums.delete({
      where: { id_album: id }
    });
  }
}
