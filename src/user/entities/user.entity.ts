import { Column, Entity } from 'typeorm';

import CoreEntity from 'src/common/entities/core.entity';

type UserRole = 'client' | 'owner' | 'delivery';

@Entity()
class User extends CoreEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}

export default User;
