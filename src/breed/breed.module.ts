import { Module }        from '@nestjs/common';
import { StarterModule } from '../starter/starter.module';
import { UserModule }    from '../user/user.module';
import BreedController   from './controller/breed.controller';

@Module({
    imports: [
        StarterModule,
        UserModule,
    ],
    controllers: [
        BreedController,
    ],
    providers: [],
})
export class BreedModule {
}
