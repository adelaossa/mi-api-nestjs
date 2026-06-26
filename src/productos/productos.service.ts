import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly repository: Repository<Producto>,
  ) {}

  create(dto: CreateProductoDto) {
    const entity = this.repository.create(dto);

    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(
    id: number,
    dto: UpdateProductoDto,
  ) {
    await this.repository.update(id, dto);

    return this.findOne(id);
  }

  async remove(id: number) {
    const entity = await this.findOne(id);

    if (entity) {
      await this.repository.remove(entity);
    }

    return entity;
  }
}