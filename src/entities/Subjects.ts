import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Exam from './Exams';
import Teacher from './Teachers';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    exams: Exam[];

    teachers: Teacher[];
}
