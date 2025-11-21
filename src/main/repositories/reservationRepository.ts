// Repository pour gérer les réservations
import { PrismaClient } from './prisma/generated/client';
import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import type { reservationsCreateInput, reservationsUpdateInput } from './prisma/generated/models/reservations';

export class ReservationRepository {

  private dbclient: PrismaClient;
  constructor() {
    let adapter = new PrismaMariaDb(process.env.DATABASE_URL);
    this.dbclient = new PrismaClient({ adapter });
  }
  

  async findAll() {
    return await this.dbclient.reservations.findMany();
  }

  
  async findById(id: number) {
    return await this.dbclient.reservations.findUnique({
      where: { id_reservation: id }
    });
  }

  async findByUserId(userId: number) {
    return await this.dbclient.reservations.findMany({
      where: { id_utilisateur: userId }
    });
  }

  async findByExemplaireId(exemplaireId: number) {
    return await this.dbclient.reservations.findMany({
      where: { id_exemplaire: exemplaireId }
    });
  }

  async create(data: reservationsCreateInput) {
    return await this.dbclient.reservations.create({
      data
    });
  }

  async update(id: number, data: reservationsUpdateInput) {
    return await this.dbclient.reservations.update({
      where: { id_reservation: id },
      data
    });
  }

  async delete(id: number) {
    return await this.dbclient.reservations.delete({
      where: { id_reservation: id }
    });
  }
}
