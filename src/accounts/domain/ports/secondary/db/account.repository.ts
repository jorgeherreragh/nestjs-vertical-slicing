export interface IAccountRepositoryInterface<D> {
  create(data: D): Promise<any>;
}
