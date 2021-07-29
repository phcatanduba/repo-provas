import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Subject from './Subjects';

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @ManyToOne(() => Subject, (subject) => subject.exams)
    subject: Subject;
}
