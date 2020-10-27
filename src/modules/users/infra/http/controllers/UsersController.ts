import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import { classToClass } from 'class-transformer';
import ListUsersService from '@modules/users/services/ListUsersService';

export default class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute({
      user_id: request.user.id,
    });

    return response.json(classToClass(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      phone,
      password,
    });

    return response.json(classToClass(user));
  }
}
