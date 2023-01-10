import { Args, ArgsType, Field } from '@nestjs/graphql';
import { isArray, isNotEmpty } from 'class-validator';

@ArgsType()
export class GetUsersArgs {
  @Field(() => [String])
  userIds: string[];
}