import { Controller, UseGuards } from '@nestjs/common';
import RestController            from '../../starter/rest/controller/rest.controller';
import RestServiceFactory        from '../../starter/rest/factory/rest-service.factory';
import AuthGuard                 from '../../user/guard/auth.guard';
import Color                     from '../entity/color.entity';

/**
 * Color REST controller.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Controller('color')
@UseGuards(AuthGuard)
export default class ColorController extends RestController<Color> {
    constructor(protected factory: RestServiceFactory) {
        super(factory.createService<Color>(Color));
    }
}
