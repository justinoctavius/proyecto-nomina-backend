export interface Repository<T> {
  save(entity: T): Promise<void>;
  update(id: string, entity: T): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T | null>;
  findAll(limit?: number, offset?: number): Promise<T[]>;
}
