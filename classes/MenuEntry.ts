export enum MenuEntryTypes {
    ITEM,
    DIVIDER
}

export default class MenuEntry {
    type: MenuEntryTypes = MenuEntryTypes.ITEM;
    text?: string;
    callback?: Function;

    constructor(partial: Partial<MenuEntry> = {}) {
        Object.assign(this, partial);
    }

    static get DIVIDER() {
        return Object.assign(this, { type: MenuEntryTypes.DIVIDER });
    }
}