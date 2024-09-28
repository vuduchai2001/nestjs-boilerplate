import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('myQueue') private myQueue: Queue) {}

  async addToQueue(data: any) {
    await this.myQueue.add('job', data);
  }
}
