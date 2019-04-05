import { Module }        from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatonModule }  from './chaton/chaton.module';
import environment       from './environment';
import { UserModule }    from './user/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(environment.typeorm),
        UserModule,
        ChatonModule,
    ],
    controllers: [],
    providers: [],
})
export class BootstrapModule {
}
