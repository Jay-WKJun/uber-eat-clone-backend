import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

import CoreEntity from 'src/common/entities/core.entity';

enum UserRole {
  Client,
  Owner,
  Delivery,
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
class User extends CoreEntity {
  @Field((type) => String)
  @Column()
  email: string;

  @Field((type) => String)
  @Column()
  password: string;

  @Field((type) => String)
  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;
}

export default User;
