import { Repository, getRepository, Not } from 'typeorm';

import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';
import ICreateProviderDTO from '@modules/providers/dtos/ICreateProviderDTO';
import IFindAllProvidersDTO from '@modules/providers/dtos/IFindAllProvidersDTO';
import Provider from '../entities/Provider';

class ProvidersRepository implements IProvidersRepository {
  private ormRepository: Repository<Provider>;

  constructor() {
    this.ormRepository = getRepository(Provider);
  }

  public async findById(id: string): Promise<Provider | undefined> {
    const provider = await this.ormRepository.findOne(id);

    return provider;
  }

  public async findByEmail(email: string): Promise<Provider | undefined> {
    const provider = await this.ormRepository.findOne({
      where: { email },
    });

    return provider;
  }

  public async findAllProviders({
    except_provider_id,
  }: IFindAllProvidersDTO): Promise<Provider[]> {
    let providers: Provider[];

    if (except_provider_id) {
      providers = await this.ormRepository.find({
        where: {
          id: Not(except_provider_id),
        },
      });
    } else {
      providers = await this.ormRepository.find();
    }

    return providers;
  }

  public async create(providerData: ICreateProviderDTO): Promise<Provider> {
    const provider = await this.ormRepository.create(providerData);

    await this.ormRepository.save(provider);

    return provider;
  }

  public async save(provider: Provider): Promise<Provider> {
    return this.ormRepository.save(provider);
  }
}

export default ProvidersRepository;
