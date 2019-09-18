import { TabsModel } from './tabs.model';

export class ExperienceModel {
    constructor(
        public title: string,
        public experience: TabsModel,
        public education: TabsModel
    ) { }
}