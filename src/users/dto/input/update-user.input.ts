import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserInput {
  @Field()
  userId: string;

  @Field()
  age?: number;

  @Field({ nullable: true })
  isSubscribed?: boolean
}