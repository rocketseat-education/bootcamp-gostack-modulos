import { EntityRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import Appoitment from '../entities/Appointment';

@EntityRepository(Appoitment)
class AppointmentsRepository
  extends Repository<Appoitment>
  implements IAppointmentsRepository {
  public async findByDate(date: Date): Promise<Appoitment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;
