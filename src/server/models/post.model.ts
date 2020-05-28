import { Entity } from 'typeorm';
import { BasePost } from './shared';

@Entity('posts')
export class Post extends BasePost {}
