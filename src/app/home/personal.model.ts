import { SocialModel } from './social.model';

export class PersonalModel{
    constructor(
        public profileImgUrl: string,
        public greeting: string,
        public fullName: string,
        public ocupation: string,
        public description: string,
        public birthDate: string,
        public phoneNumber: string,
        public email: string,
        public location: string
    ){}
}