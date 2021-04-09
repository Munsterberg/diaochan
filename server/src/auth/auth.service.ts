import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      delete user[password];
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    const userData = {
      password: await this.hashPassword(createUserDto.password),
      username: createUserDto.username,
      email: createUserDto.email,
    };
    return this.usersService.create(userData);
  }
}
