export class Animal {
    genre: Genres;
    breed: string;
    type: string;
    birth_date: Date;
    pedigree: boolean;
    identification_photo: string;
    vaccine_passaport: string;
    animal_photo: string[];
}

const enum Genres{
    Male = "Male",
    Female = "Female"
}