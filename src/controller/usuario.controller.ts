import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from 'src/service/usuario.service';
import { CreateUserDto } from 'src/dto/create.user.dto';

@Controller('user')
export class UsuarioController {
    constructor(private readonly userService: UsuarioService) {}

    @Post("register")
      createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }


}