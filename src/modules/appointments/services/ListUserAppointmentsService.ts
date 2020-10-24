import { inject, injectable } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute(user_id: string): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllFromUser(
      user_id,
    );

    return appointments;
  }
}

export default ListProviderAppointmentsService;
