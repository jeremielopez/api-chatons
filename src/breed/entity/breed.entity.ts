import { Column, Entity } from 'typeorm';
import RestEntity         from '../../starter/rest/entity/rest.entity';

/**
 * Breed entity.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Entity('breed')
export default class Breed extends RestEntity {
    /**
     * Breed name
     *
     * @type {string}
     */
    @Column({ unique: true })
    name: string;
}
