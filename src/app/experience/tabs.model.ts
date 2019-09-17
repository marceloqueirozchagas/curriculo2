import { TabItemModel } from './tabItem.model';

export class TabsModel {
    constructor(
        public title: string,
        public itens: TabItemModel[]
    ) { }
}