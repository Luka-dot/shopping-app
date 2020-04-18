// this set -up in TS does exactly the same as whole declaration in comments below
export class Ingredient {
    constructor(public name: string, public amount: number) {}
}

/*
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number ) {
        this.name = name;
        this.amount = amount;
    }
}
*/