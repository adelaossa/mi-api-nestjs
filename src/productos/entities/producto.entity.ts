import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200,
  })
  nombre: string;

  @Column('text', {
    nullable: true,
  })
  descripcion?: string;

  @Column('numeric', {
    precision: 10,
    scale: 2,
  })
  precio: number;

  @Column({
    default: 0,
  })
  stock: number;

  @Column({
    default: true,
  })
  activo: boolean;
}