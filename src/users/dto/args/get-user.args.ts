import { Args, ArgsType, Field } from '@nestjs/graphql';
import { isNotEmpty } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field()
  //@isNotEmpty()
  userId: string;
}