export interface Repository<T> {
  save(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T>;
  findAll(limit?: number, offset?: number): Promise<T[]>;
  findByProps(props: any): Promise<T[]>;
}
