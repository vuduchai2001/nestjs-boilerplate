import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('myQueue')
export class QueueProcessor {
  private readonly logger = new Logger(QueueProcessor.name);

  @Process({ name: 'job', concurrency: 5 })
  async handleJob(job: Job) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(job.data);
  }
}
