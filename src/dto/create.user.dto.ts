import {
    IsDate,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {

  @IsString()
  @MinLength(2)
  @MaxLength(15)
  name: string;
  
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  lastname: string;
  
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      "The password must have a Uppercase, lowercase letter and a number",
  })
  password: string;

  @IsDate()
  birthdate: Date;

  @IsString({ each: true })
  rol: string;
}