export default class Profile {
    categories: string[] = [];
    describers: string[] = [];
    keywords: string[] = [];
    tlds: string[] = [];
    sentence: string = "";

    constructor(part: Partial<Profile> = {}) {
        Object.assign(this, part);
    }

    toJSON() {
        return {
            categories: this.categories,
            describers: this.describers,
            keywords: this.keywords,
            tlds: this.tlds,
            sentence: this.sentence
        };
    }
}