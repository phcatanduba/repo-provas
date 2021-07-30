import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Exams from './Exams';
import Subject from './Subjects';

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Subject, (subjects) => subjects.exams)
    subjects: Subject;

    exams: Exams[];
}
