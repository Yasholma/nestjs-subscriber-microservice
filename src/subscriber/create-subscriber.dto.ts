import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriberDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
