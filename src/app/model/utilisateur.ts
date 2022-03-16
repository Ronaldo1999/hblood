import { TypeUserEnum } from "./enumeration/type-user-enum";

export interface IUtilisateur {
    id?: number;
    login?: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string;
    activated?: boolean;
    dateNaissance?: Date;
    typeUser?: TypeUserEnum;
    authorities?: string[];
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
}

export class Utilisateur implements IUtilisateur {
    constructor(
        public id?: number,
        public login?: string,
        public firstName?: string | null,
        public lastName?: string | null,
        public email?: string,
        public activated?: boolean,
        public dateNaissance?: Date,
        public typeUser?: TypeUserEnum,
        public authorities?: string[],
        public createdBy?: string,
        public createdDate?: Date,
        public lastModifiedBy?: string,
        public lastModifiedDate?: Date,

    ) { }
}
