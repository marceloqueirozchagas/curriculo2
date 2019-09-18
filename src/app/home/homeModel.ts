import { PersonalModel } from './personal.model';
import { SocialModel } from './social.model';

export class HomeModel {
    constructor(
        public title: string,
        public personal: PersonalModel,
        public listSocial: SocialModel[]
    ) { }
}