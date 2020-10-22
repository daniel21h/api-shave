import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const appointment = await this.appointmentsRepository.delete(id);

    return appointment;
  }
}

export default DeleteAppointmentService;
