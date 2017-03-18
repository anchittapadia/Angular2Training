/**
 * Created by atapadia on 3/14/2017.
 */
import {Component} from "@angular/core";
import {InventoryService} from "../../services/InventoryService.service";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Component({
    selector: 'inventory-list',
    templateUrl: 'app/components/inventoryList/InventoryList.component.html',
    styleUrls: ['app/components/inventoryList/InventoryList.component.css']
})

export class InventoryList {
    context: string = 'Jewlery Shop';

    get currentItem(): IInventoryItem {
        return this.inventoryService.getCurrentItem();
    }

    constructor(private inventoryService: InventoryService) {
    }

    getItems(): IInventoryItem[] {
        return this.inventoryService.getItems();
    }

    setCurrentItem(item: IInventoryItem) {
        this.inventoryService.setCurrentItem(item);
    }
}