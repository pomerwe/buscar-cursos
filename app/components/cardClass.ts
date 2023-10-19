export class Card
{
    name:string;
    link:string;
    image:string;
    description:string;
    bonuses: Bonus[];

    constructor(name:string, link:string, image:string, description:string, bonuses: Bonus[]) {
        this.name = name;
        this.link = link;
        this.image = image;
        this.description = description;
        this.bonuses = bonuses;
    }
}

export class Bonus
{
    description:string;

    constructor(description:string)
    {
        this.description = description;
    }
}