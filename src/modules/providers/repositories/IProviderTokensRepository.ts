import ProviderToken from '../infra/typeorm/entities/ProviderToken';

export default interface IProviderTokensRepository {
  generate(provider_id: string): Promise<ProviderToken>;
}
