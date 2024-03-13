export interface ICreateAccountController<D> {
  create(entity: D, options?: any): Promise<D>;
}
