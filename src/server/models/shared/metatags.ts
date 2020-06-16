import { Column } from 'typeorm';
import { IMeta } from '../../interfaces/db';

export class Meta implements IMeta {
  @Column({ type: 'varchar', length: 150, nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  robots: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  yandex: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  googlebot: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  google: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  googleSiteVerification: string;
}
