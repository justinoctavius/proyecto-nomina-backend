import * as uuid from 'uuid';

export class UUIDGenerator {
  public static generate() {
    return uuid.v4();
  }
}
