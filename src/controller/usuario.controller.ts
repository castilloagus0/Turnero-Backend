import { Controller, Post, Body, Put, Patch, Param, Get } from '@nestjs/common';

//Service
import { UsuarioService } from 'src/service/usuario.service';

// Dto
import { CreateUserDto } from 'src/dto/create.user.dto';
import { EditUserDto } from 'src/dto/edit.user.dto';
import { ChangePasswordDto } from 'src/dto/change.password.dto';
import { ReseetPasswordDto } from 'src/dto/reseet-password.dto';

@Controller('user')
export class UsuarioController {
    constructor(private readonly userService: UsuarioService) {}

    @Get('')
    async getUsuarios(){
        return await this.userService.getUsuarios();
    }

    @Get('/:id')
    async getUsuario(@Param('id') id: number){
        return await this.userService.getUsuario(id);
    }

    @Post("register")
      async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    //Revisar este endpoint
    @Put('edit/:emailLog')
    async editUser(@Body() editUserDto: EditUserDto, @Param('emailLog') emailLogueado: string) {
        return await this.userService.editUser(editUserDto, emailLogueado);
    }

    @Patch('change-password/:emailLog')
    async changePassword(@Body() changePasswordDto: ChangePasswordDto, @Param('emailLog') emailLogueado: string) { //Obtengo el email desde el localStorage
        return await this.userService.changePassword(changePasswordDto, emailLogueado);
    }

    @Post('remember-acount/:emailLog')
    async rememberAcount(@Param('emailLog') emailLogueado: string) {
        return await this.userService.rememberAcount(emailLogueado);
    }

    //Aca cuando apreta el boton desde el email y lo lleva al front, puedo obtener el email
    @Patch('reseet-password')
    async resetPassword(@Body() changePasswordDto: ReseetPasswordDto, @Param('emailLog') emailLogueado: string) {
        return await this.userService.resetPassword(changePasswordDto, emailLogueado);
    }

}