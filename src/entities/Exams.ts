import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Teacher from './Teachers';
import Category from './Categories';

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @ManyToOne(() => Teacher, (teachers) => teachers.exams)
    teachers: Teacher;

    @ManyToOne(() => Category, (categories) => categories.exams)
    categories: Category;
}
