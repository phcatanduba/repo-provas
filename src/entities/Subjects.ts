import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Exams from './Exams';
import Teacher from './Teachers';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quarter: number;

    exams: Exams[];

    teachers: Teacher[];
}
