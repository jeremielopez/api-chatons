import { IsHexColor }     from 'class-validator';
import { Column, Entity } from 'typeorm';
import RestEntity         from '../../starter/rest/entity/rest.entity';

/**
 * Color entity.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Entity('color')
export default class Color extends RestEntity {
    /**
     * Color name
     *
     * @type {string}
     */
    @Column({ unique: true })
    name: string;

    /**
     * Color code (Hex)
     *
     * @type {string}
     */
    @IsHexColor()
    @Column({ unique: true })
    color: string;
}
