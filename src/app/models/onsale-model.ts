import { ShopItem } from './item-model';

export class OnSale {
    itemsForSale: ShopItem[];

    constructor() {
        this.itemsForSale = [
            new ShopItem('Apple', 0.45, 'Crunchy, keeps the doctors away!'),
            new ShopItem('Orange', 0.25, 'Makes a great juice!'),
            new ShopItem('Avocado', 1.45, 'Magic on toast with a little S&P!'),
            new ShopItem('Banana', 0.75, 'Slap some peanut butter on that bad lad!'),
        ];
    }
}
