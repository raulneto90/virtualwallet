import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('transactions')
export default class Transaction {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('decimal')
  value: number;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
