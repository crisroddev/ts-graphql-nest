import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DeleteUserInput {
  @Field()
  userId: string;
}