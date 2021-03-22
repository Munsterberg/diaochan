import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersService],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
