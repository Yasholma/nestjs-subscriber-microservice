import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriberDTO } from './create-subscriber.dto';
import Subscriber from './subscriber.entity';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,
  ) {}

  async addSubscriber(
    createSubscriberDto: CreateSubscriberDTO,
  ): Promise<Subscriber> {
    const newSubscriber = this.subscriberRepository.create(createSubscriberDto);
    return this.subscriberRepository.save(newSubscriber);
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return this.subscriberRepository.find();
  }
}
