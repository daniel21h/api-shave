import Provider from '../infra/typeorm/entities/Provider';
import ICreateProviderDTO from '../dtos/ICreateProviderDTO';
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO';

export default interface IProvidersRepository {
  findAllProviders(data: IFindAllProvidersDTO): Promise<Provider[]>;
  findById(id: string): Promise<Provider | undefined>;
  findByEmail(email: string): Promise<Provider | undefined>;
  create(data: ICreateProviderDTO): Promise<Provider>;
  save(provider: Provider): Promise<Provider>;
}
