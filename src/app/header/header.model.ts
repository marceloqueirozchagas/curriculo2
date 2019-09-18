import { MenuModel } from './menu.model';

export class HeaderModel {
    constructor(
        public title: string,
        public menus: MenuModel[]
    ) { }
}