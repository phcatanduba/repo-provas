import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Exam from './Exams';

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    exams: Exam[];
}
