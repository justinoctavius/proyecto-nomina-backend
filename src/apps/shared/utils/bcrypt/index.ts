import bcrypt from 'bcrypt';

export class BCrypt {
  public static async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  public static async compare(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
