import { Entity } from 'typeorm';
import { BasePost } from './shared';

@Entity('forms')
export class Form extends BasePost {}
