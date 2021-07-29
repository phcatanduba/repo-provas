import * as teste from 'typeorm';
import Subject from './Subjects';

@teste.Entity('exams')
export default class Exam {
    @teste.PrimaryGeneratedColumn()
    id: number;

    @teste.Column()
    link: string;

    @teste.ManyToOne(() => Subject, (subject) => subject.exams)
    subject: Subject;
}
