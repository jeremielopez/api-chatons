import { Controller, UseGuards } from '@nestjs/common';
import RestController            from '../../starter/rest/controller/rest.controller';
import RestServiceFactory        from '../../starter/rest/factory/rest-service.factory';
import AuthGuard                 from '../../user/guard/auth.guard';
import Breed                     from '../entity/breed.entity';

/**
 * Breed REST controller.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Controller('breed')
@UseGuards(AuthGuard)
export default class BreedController extends RestController<Breed> {
    constructor(protected factory: RestServiceFactory) {
        super(factory.createService<Breed>(Breed));
    }
}
