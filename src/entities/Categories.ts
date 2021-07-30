import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Exams from './Exams';

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    exams: Exams[];
}
