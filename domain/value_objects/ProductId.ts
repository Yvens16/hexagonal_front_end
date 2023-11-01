import UuidGenerator from "../service/UuidGenerator";

export default class ProductId {
  readonly uuid: number;

  constructor(id?: number) {
    // On the database: Number matching is faster than string matching
    this.uuid = id ? Number(id) : Number(UuidGenerator.generateUID());
  }

  public getId(): number {
    return this.uuid;
  }
}