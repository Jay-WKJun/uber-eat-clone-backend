import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import User from 'src/user/entities/user.entity';
import { CreateAccountInput } from 'src/user/dtos/create-account.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({ email, password, role }: CreateAccountInput) {
    // check new user
    // create user & hash password

    // return ok | error

    try {
      const exists = await this.users.findOne(email);

      if (exists) {
        // error
        return 'There is a user with that email already';
      }

      await this.users.save(this.users.create({ email, password, role }));
      return true;
    } catch (e: any) {
      return "Couldn't create account";
    }
  }
}
