import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateSubscriberDTO } from './create-subscriber.dto';
import Subscriber from './subscriber.entity';
import { SubscriberService } from './subscriber.service';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  //   @MessagePattern({ cmd: 'add-subscriber' })
  @EventPattern({ cmd: 'add-subscriber' })
  async addSubscriber(subscriberDto: CreateSubscriberDTO): Promise<Subscriber> {
    return this.subscriberService.addSubscriber(subscriberDto);
  }

  @MessagePattern({ cmd: 'get-subscribers' })
  async getSubscribers(): Promise<Subscriber[]> {
    return this.subscriberService.getSubscribers();
  }
}
