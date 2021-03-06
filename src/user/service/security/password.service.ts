import { Injectable } from '@nestjs/common';
import * as bcrypt    from 'bcryptjs';

/**
 * Service responsible to manage hashed passwords.
 *
 * @author Jérémie Lopez <jeremie.lopez@ynov.com>
 */
@Injectable()
export default class PasswordService {
    /**
     * Salt length for bcrypt algorithm.
     *
     * @type {number}
     */
    protected saltLength: number = 10;

    /**
     * Return if a string is hashed or not.
     *
     * @param {string} str
     *
     * @returns {boolean}
     */
    isHashed(str: string): boolean {
        return str.startsWith('$2a$' + this.saltLength + '$');
    }

    /**
     * Hash a string with bcrypt algorithm.
     *
     * @param {string} str
     * @returns {string}
     */
    hash(str: string): string {
        return bcrypt.hashSync(str, this.saltLength);
    }

    /**
     * Compare a string with a crypted hash.
     *
     * @param {string} str
     * @param {string} hash
     *
     * @returns {boolean}
     */
    compare(str: string, hash: string): boolean {
        return bcrypt.compareSync(str, hash);
    }
}
