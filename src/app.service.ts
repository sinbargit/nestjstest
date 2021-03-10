import { Injectable, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql'
@Injectable()
export class AppService {
@Inject(CONTEXT) private readonly context
constructor(){
console.log('i am test crom------------------------------')
console.log('i am test crom------------------------------')
console.log('i am test crom------------------------------')
console.log('i am test crom------------------------------')
console.log('i am test crom------------------------------')
}
getHello(): string {
    return 'Hello World!';
  }
}
