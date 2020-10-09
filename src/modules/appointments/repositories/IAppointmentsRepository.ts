import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  // delete(data: IDeleteAppointmentDTO): Promise<Appointment>;
  delete(id: string): Promise<void>;
  // findOne(id: string): Promise<Appointment | undefined>;
  findByDate(data: Date): Promise<Appointment | undefined>;
}
