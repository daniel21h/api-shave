import Appointment from '../infra/typeorm/entities/Appointment';

export interface IAppointmentsRepository {
  findByDate(data: Date): Promise<Appointment | undefined>;
}
