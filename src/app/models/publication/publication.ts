export class Publication {
    title: string;
    animal_foto: string;
    age: number;
    genre: Genres;
    breed: string;
    create_date: Date;
    identification_foto: string;
    vaccine_passaport: string;
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
