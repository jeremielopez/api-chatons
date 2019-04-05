import { Module }        from '@nestjs/common';
import { BreedModule }   from '../breed/breed.module';
import { ColorModule }   from '../color/color.module';
import { StarterModule } from '../starter/starter.module';
import { UserModule }    from '../user/user.module';
import ChatonController  from './controller/chaton.controller';

@Module({
    imports: [
        StarterModule,
        UserModule,
        BreedModule,
        ColorModule,
    ],
    controllers: [
        ChatonController,
    ],
    providers: [],
})
export class ChatonModule {
}
