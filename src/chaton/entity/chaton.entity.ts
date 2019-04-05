import { Validate }                              from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Breed                                     from '../../breed/entity/breed.entity';
import Color                                     from '../../color/entity/color.entity';
import RestEntity                                from '../../starter/rest/entity/rest.entity';
import { EntityExists }                          from '../../starter/rest/validator/entity-exists';

/**
 * Chaton entity.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Entity('chaton')
export default class Chaton extends RestEntity {
    /**
     * Chaton Color (relation Many To One).
     *
     * @type {Color}
     */
    @ManyToOne(type => Color)
    @JoinColumn({ name: 'color_id' })
    @Validate(EntityExists, ['Color'])
    color: Color;

    /**
     * Chaton Breed (relation Many To One).
     *
     * @type {Breed}
     */
    @ManyToOne(type => Breed)
    @JoinColumn({ name: 'breed_id' })
    @Validate(EntityExists, ['Breed'])
    breed: Breed;

    /**
     * Chaton BirthDate
     *
     * @type {Date}
     */
    @Column()
    birthDate: Date;

    /**
     * Chaton IMG (Base 64 Encoded IMG)
     *
     * @type {string}
     */
    @Column()
    img: string;
}
