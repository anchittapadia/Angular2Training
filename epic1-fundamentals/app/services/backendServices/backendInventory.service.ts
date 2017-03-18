import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";


@Injectable()
class BackendInventoryService {
    getItems(): IInventoryItem[] {
        let items: IInventoryItem[] = [
            {
                guid: 'item1',
                name: 'earring',
                price: 1000.00
            },
            {
                guid: 'item2',
                name: 'kardassian broach',
                price: 2000.00
            },
            {
                guid: 'item3',
                name: 'diamond necklace',
                price: 10000.00
            }
        ];

        return items;
    };

}

export {
    BackendInventoryService
}