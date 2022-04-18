import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

import User from 'src/user/entities/user.entity';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from 'src/user/dtos/create-account.dto';
import { UserService } from 'src/user/user.service';

@Resolver((of) => User)
class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  createAccont(@Args('input') createAccountInput: CreateAccountInput){

  }
}

export default UserResolver;
