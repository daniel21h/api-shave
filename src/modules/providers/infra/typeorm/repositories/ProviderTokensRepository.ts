import { getRepository, Repository } from 'typeorm';

import IProviderTokensRepository from '@modules/providers/repositories/IProviderTokensRepository';
import ProviderToken from '../entities/ProviderToken';

class ProviderTokensRepository implements IProviderTokensRepository {
  private ormRepository: Repository<ProviderToken>;

  constructor() {
    this.ormRepository = getRepository(ProviderToken);
  }

  public async findByToken(token: string): Promise<ProviderToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(provider_id: string): Promise<ProviderToken> {
    const providerToken = this.ormRepository.create({
      provider_id,
    });

    await this.ormRepository.save(providerToken);

    return providerToken;
  }
}
export default ProviderTokensRepository;
