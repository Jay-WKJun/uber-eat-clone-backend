import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import CreateRestaurantDto from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/updateRestaurant.dto';
import Restaurant from './entities/restaurant.entity';

@Injectable()
class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  async createRestaurant(createRestaurant: CreateRestaurantDto): Promise<Restaurant> {
    try {
      const newRestaurant = this.restaurants.create(createRestaurant);
      return this.restaurants.save(newRestaurant);
    } catch (e) {
      console.log(e);
    }
  }

  async updateRestaurant({ id, data }: UpdateRestaurantDto) {
    return this.restaurants.update(id, { ...data });
  }
}

export default RestaurantService;
