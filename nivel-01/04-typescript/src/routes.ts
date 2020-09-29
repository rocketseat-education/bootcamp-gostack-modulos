import { Request, Response } from 'express';
import createUser from './services/createUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'danilo@example.com',
    password: '123456',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'JavaScript', experience: 100 }
    ],
  });

  return response.json({ message: 'Hello World' });
}