import {Injectable} from "@angular/core";
import {IInventoryItem} from "../shapes/IInventoryItem";
import {BackendInventoryService} from "./backendServices/backendInventory.service";

@Injectable()
class InventoryService {
    private _currentItem: IInventoryItem;

    constructor(private _backendInventoryService: BackendInventoryService) {

    }

    getItems(): IInventoryItem[] {
        return this._backendInventoryService.getItems();
    };

    setCurrentItem(item: IInventoryItem) {
        console.log("setting value of current item in service", item);
        this._currentItem = item;
    }

    getCurrentItem(): IInventoryItem {
        if (this._currentItem) {
            return this._currentItem;
        } else {
            return null;
        }
    }

}
;

export {
    InventoryService
}