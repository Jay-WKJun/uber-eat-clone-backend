import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Restaurant from 'src/restaurant/entities/restaurant.entity';
import RestaurantResolver from 'src/restaurant/restaurant.resolver';
import RestaurantService from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantModule {}
