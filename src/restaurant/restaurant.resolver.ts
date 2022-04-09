import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Restaurant from './entities/restaurant.entity';
import CreateRestaurantDto from './dtos/create-restaurant.dto';
import RestaurantService from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/updateRestaurant.dto';

@Resolver((of) => Restaurant)
class RestaurantResolver {
  constructor(private readonly restaurnatService: RestaurantService) {}

  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurnatService.getAll();
  }

  @Mutation((returns) => Boolean)
  async createRestaurant(@Args('input') createRestaurant: CreateRestaurantDto): Promise<boolean> {
    try {
      await this.restaurnatService.createRestaurant(createRestaurant);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async updateRestaurant(
    @Args() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurnatService.updateRestaurant(updateRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }
}

export default RestaurantResolver;
