import {ProductType} from "./interfaces/ProductType";

const pic1: string = 'https://www.perlinka.com.ua/components/com_virtuemart/shop_image/product_id/5241/75e44108bb09ffa92abccc150594027b.jpg';
const pic2: string = 'http://chevli.com.ua/image/cache/data/Puma/Puma/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8%20Puma%20Tsugi%20Jun%20-%20AV009-500x500.jpg';
const pic3: string = 'https://intertop.ua/load/KM3058/MAIN.jpg';
const pic4: string = 'https://tapok.com.ua/uploads/thumbnails/21/214c0b3e24599a1d9b497f1a194b2236.jpg';
const pic5: string = 'https://opt-1309905.ssl.1c-bitrix-cdn.ru/upload/iblock/b86/b86bfbff287e3f9cc64db7fe3ebdb285.jpg?1551776559146781';

export enum CATEGORIES {
    SNEAKERS = 'Sneakers',
    SHOES = 'Shoes',
}

export const data: ProductType[] = [

    {
        id: 1,
        category: CATEGORIES.SNEAKERS,
        images: [pic1, pic1, pic1],
        name: "CROSSES",
        price: 110,
        description: 'sdfsdfsdfHasellus arcu justo, ullamcorper non diam'
    },

    {
        id: 2,
        category: CATEGORIES.SNEAKERS,
        images: [pic2, pic2, pic2],
        name: "HUMMER TO FALL",
        price: 91,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 3,
        category: CATEGORIES.SHOES,
        images: [pic3, pic3, pic3],
        name: "LORELEI",
        price: 93,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 4,
        category: CATEGORIES.SHOES,
        images: [pic4, pic4, pic4],
        name: "SHOES",
        price: 92,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    
    {
        id: 5,
        category: CATEGORIES.SHOES,
        images: [pic5, pic5, pic5],
        name: "GLORIA",
        price: 98,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    {
        id: 6,
        category: CATEGORIES.SNEAKERS,
        images: [pic1, pic1, pic1],
        name: "CROSSES",
        price: 110,
        description: 'Hasellus arcu justo, ullamcorper non diam'
    },

    {
        id: 7,
        category: CATEGORIES.SNEAKERS,
        images: [pic2, pic2, pic2],
        name: "HUMMER TO FALL",
        price: 91,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 8,
        category: CATEGORIES.SHOES,
        images: [pic3, pic3, pic3],
        name: "LORELEI",
        price: 93,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 9,
        category: CATEGORIES.SHOES,
        images: [pic4, pic4, pic4],
        name: "SHOES",
        price: 92,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    
    {
        id: 10,
        category: CATEGORIES.SHOES,
        images: [pic5, pic5, pic5],
        name: "GLORIA",
        price: 98,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    {
        id: 11,
        category: CATEGORIES.SNEAKERS,
        images: [pic1, pic1, pic1],
        name: "CROSSES",
        price: 110,
        description: 'Hasellus arcu justo, ullamcorper non diam'
    },

    {
        id: 12,
        category: CATEGORIES.SNEAKERS,
        images: [pic2, pic2, pic2],
        name: "HUMMER TO FALL",
        price: 91,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 13,
        category: CATEGORIES.SHOES,
        images: [pic3, pic3, pic3],
        name: "LORELEI",
        price: 93,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 14,
        category: CATEGORIES.SHOES,
        images: [pic4, pic4, pic4],
        name: "SHOES",
        price: 92,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    
    {
        id: 15,
        category: CATEGORIES.SHOES,
        images: [pic5, pic5, pic5],
        name: "GLORIA",
        price: 98,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    {
        id: 16,
        category: CATEGORIES.SNEAKERS,
        images: [pic1, pic1, pic1],
        name: "CROSSES",
        price: 110,
        description: 'Hasellus arcu justo, ullamcorper non diam'
    },

    {
        id: 17,
        category: CATEGORIES.SNEAKERS,
        images: [pic2, pic2, pic2],
        name: "HUMMER TO FALL",
        price: 91,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 18,
        category: CATEGORIES.SHOES,
        images: [pic3, pic3, pic3],
        name: "LORELEI",
        price: 93,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },

    {
        id: 19,
        category: CATEGORIES.SHOES,
        images: [pic4, pic4, pic4],
        name: "SHOES",
        price: 92,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    },
    
    {
        id: 20,
        category: CATEGORIES.SHOES,
        images: [pic5, pic5, pic5],
        name: "GLORIA",
        price: 98,
        description: 'Hasellus arcu justo, ullamcorper non diam sit amet'
    }
];
