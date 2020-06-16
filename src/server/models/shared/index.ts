import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Meta } from './metatags';
import { IBase, IPost, ITimestamps } from '../../interfaces/db';

export abstract class BasePost implements IBase, IPost, ITimestamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  shortDescription: string;

  @Column({ type: 'boolean', default: false })
  enabled: boolean;

  @Column({ type: 'timestamp', nullable: true })
  publishedAt: string;

  @Column((type) => Meta)
  meta: Meta;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
