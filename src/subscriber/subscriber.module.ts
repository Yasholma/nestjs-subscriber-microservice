import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';
import Subscriber from './subscriber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscriberController],
  providers: [SubscriberService],
  exports: [SubscriberService],
})
export class SubscriberModule {}
