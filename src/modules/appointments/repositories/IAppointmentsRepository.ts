import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';
import IFindByDateDTO from '../dtos/IFindByDateDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  // delete(data: IDeleteAppointmentDTO): Promise<Appointment>;
  delete(id: string): Promise<void>;
  // findOne(id: string): Promise<Appointment | undefined>;
  findByDate(data: IFindByDateDTO): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllFromUser(user_id: string): Promise<Appointment[]>;
}
