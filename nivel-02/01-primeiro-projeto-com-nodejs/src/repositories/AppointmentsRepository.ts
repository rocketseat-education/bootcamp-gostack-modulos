import { isEqual } from 'date-fns';
import Appoitment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appoitment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appoitment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appoitment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appoitment {
    const appointment = new Appoitment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
