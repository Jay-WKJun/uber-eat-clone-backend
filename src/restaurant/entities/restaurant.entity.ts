import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IsString, Length, IsBoolean, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(5, 10)
  name: string;

  @Field({ defaultValue: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan?: boolean;

  @Field()
  @Column()
  @IsString()
  address: string;

  @Field()
  @Column()
  @IsString()
  owner: string;

  @Field()
  @Column()
  @IsString()
  category: string;
}

export default Restaurant;
