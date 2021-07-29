import * as teste from 'typeorm';
import Exams from './Exams';

@teste.Entity('subject')
export default class Subject {
    @teste.PrimaryGeneratedColumn()
    id: number;

    @teste.Column()
    name: string;

    exams: Exams[];
}
