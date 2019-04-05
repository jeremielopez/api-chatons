import { Controller, UseGuards } from '@nestjs/common';
import RestController            from '../../starter/rest/controller/rest.controller';
import RestServiceFactory        from '../../starter/rest/factory/rest-service.factory';
import AuthGuard                 from '../../user/guard/auth.guard';
import Chaton                    from '../entity/chaton.entity';

/**
 * Chaton REST controller.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Controller('chaton')
@UseGuards(AuthGuard)
export default class ChatonController extends RestController<Chaton> {
    constructor(protected factory: RestServiceFactory) {
        super(factory.createService<Chaton>(Chaton));
    }
}
