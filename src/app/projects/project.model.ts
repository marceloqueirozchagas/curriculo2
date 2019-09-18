import { ProjectItemModel } from './projectItem.model';

export class ProjectModel {
    constructor(
        public title: string,
        public description: string,
        public itens: ProjectItemModel[]
    ) { }
}