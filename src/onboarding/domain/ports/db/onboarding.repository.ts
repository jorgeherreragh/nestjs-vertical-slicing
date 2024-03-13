export interface IOnboardingRepositoryInterface<D> {
  createUser(data: D): Promise<any>;
}
