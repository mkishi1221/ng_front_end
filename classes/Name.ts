export default class Name {
    algorithm: string = "";
    length: number = 0;
    name: string = "";
    domain: string = "";
    all_keywords: string = "";
    name_length_score: string = "";
    name_score: string = "";

    constructor(part: Partial<Name> = {}) {
        Object.assign(this, part);
    }
}