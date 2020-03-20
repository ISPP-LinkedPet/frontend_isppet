import { Publication } from '../publication/publication'

export class Adoption extends Publication {
    id: number;
    name: string;
    taxes: number;
    breed: string;
}
