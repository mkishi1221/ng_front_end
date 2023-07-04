export default class Profile {
    categories!: string[];
    describers!: string[];
    keywords!: string[];
    tlds!: string[];
    sentence!: string;

    constructor(part: Partial<Profile> = {}) {
        Object.assign(this, part);
    }
}