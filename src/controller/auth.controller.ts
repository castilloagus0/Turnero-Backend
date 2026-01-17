import { Controller, Post, Body, Get } from "@nestjs/common";

import { AuthService } from "src/service/auth.service";

import { LoginDto } from "src/dto/login.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("/login")
    async loginUser(@Body() loginDto: LoginDto){
        return this.authService.loginUser(loginDto)
    }

}