import { InputType, OmitType } from '@nestjs/graphql';
import Restaurant from '../entities/restaurant.entity';

@InputType()
class CreateRestaurantDto extends OmitType(Restaurant, ['id'] as const, InputType) {}

export default CreateRestaurantDto;
