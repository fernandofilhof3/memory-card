export class Pokeballs {
    normal: number = 3;
    super: number;
    ultra: number;

    constructor(obj?: Partial<Pokeballs>) {
        if (obj)
            Object.assign(this, obj);
    }
}
