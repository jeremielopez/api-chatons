import { Module }        from '@nestjs/common';
import { StarterModule } from '../starter/starter.module';
import { UserModule }    from '../user/user.module';
import ColorController   from './controller/color.controller';

@Module({
    imports: [
        StarterModule,
        UserModule,
    ],
    controllers: [
        ColorController,
    ],
    providers: [],
})
export class ColorModule {
}
