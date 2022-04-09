import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';

import CreateRestaurantDto from './create-restaurant.dto';

@InputType()
class UpdateRestaurantInputType extends PartialType(CreateRestaurantDto) {}

export default UpdateRestaurantInputType;

@ArgsType()
export class UpdateRestaurantDto {
  @Field()
  id: number;

  @Field()
  data: UpdateRestaurantInputType;
}
