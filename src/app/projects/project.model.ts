import { ProjectItemModel } from './projectItem.model';

export class projectModel {
    constructor(
        public title: string,
        public description: string,
        public itens: ProjectItemModel[]
    ) { }
}