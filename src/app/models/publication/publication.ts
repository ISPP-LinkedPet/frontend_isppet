import { Particular } from '../particular/particular'

export class Publication {
    // Only moderator
    title: string;
    age: number;
    genre: Genres;
    breed: string;
    type: string;
    pedigree: boolean;
    // Particular must fill
    identification_photo: string;
    vaccine_passaport: string;
    location: string;
    animal_photo: string[];
    // Internal assignation
    particular: Particular;
    create_date: Date;
    document_status: DocumentStatus;
    transaction_status: TransactionStatus;
}

const enum Genres{
    Male = "Male",
    Female = "Female"
}

const enum TransactionStatus{
    InProgress = "In progress",
    Completed = "Completed"
}

const enum DocumentStatus{
    InRevision = "In revision",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
