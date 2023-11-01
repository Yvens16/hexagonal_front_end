import { v4 as uuidv4 } from 'uuid';


export default class UuidGenerator {

  public static generateUID(): string {
    return uuidv4();
    // or return self.crypto.randomUUID(); only in localhost or https secure context
  }
}