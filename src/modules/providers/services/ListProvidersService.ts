import { inject, injectable } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';
import Provider from '@modules/providers/infra/typeorm/entities/Provider';

interface IRequest {
  provider_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({ provider_id }: IRequest): Promise<Provider[]> {
    const providers = await this.providersRepository.findAllProviders({
      except_provider_id: provider_id,
    });

    return providers;
  }
}

export default ListProvidersService;
