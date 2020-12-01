import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  findByDate(data: Date): Promise<Appointment | undefined>;
}
