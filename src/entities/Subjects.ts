import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Exams from './Exams';

@Entity('subject')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    exams: Exams[];
}
