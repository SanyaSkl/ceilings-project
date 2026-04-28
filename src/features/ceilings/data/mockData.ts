import type {CeilingProduct, CeilingTypeInfo} from "../types/ceiling.types"

import matHall from "@assets/Images/matte/matHall.jpg"
import matBedroom from "@assets/Images/matte/matBedroom.jpg"
import matHallway from "@assets/Images/matte/matHallway.jpg"
import matKitchen from "@assets/Images/matte/matKitchen.jpg"

import glHall from "@assets/Images/glossy/glHall.jpg"
import glBedroom from "@assets/Images/glossy/glBedroom.jpg"
import glHallway from "@assets/Images/glossy/glHallway.jpg"
import glKitchen from "@assets/Images/glossy/glKitchen.jpg"

import satHall from "@assets/Images/satin/satHall.jpg"
import satBedroom from "@assets/Images/satin/satBedroom.jpg"
import satHallway from "@assets/Images/satin/satHallway.jpg"
import satKitchen from "@assets/Images/satin/satKitchen.jpg"

import soarHall from "@assets/Images/soaring/soarHall.jpg"
import soarBedroom from "@assets/Images/soaring/soarBadroom.jpg"
import soarHallway from "@assets/Images/soaring/soarHallway.jpg"
import soarKitchen from "@assets/Images/soaring/soarKitchen.jpg"

import twoLevHall from "@assets/Images/two-level/twoLevHall.jpg"
import twoLevBedroom from "@assets/Images/two-level/twoLevBedroom.jpg"
import twoLevHallway from "@assets/Images/two-level/twoLevHallway.jpg"
import twoLevKitchen from "@assets/Images/two-level/twoLevKitchen.jpg"

import lightLiHall from "@assets/Images/light lines/lightLiHall.jpg"
import lightLiBedroom from "@assets/Images/light lines/lightLiBedroom.jpg"
import lightLiHallway from "@assets/Images/light lines/lightLiHallway.jpg"
import lightLiKitchen from "@assets/Images/light lines/lightLiKitchen.jpg"

export const mockProducts: CeilingProduct[] = [
    // ---- MATTE ----
    {
        id: "matte-hall",
        type: "matte",
        room: "hall",
        title: "Матовый натяжной потолок в зале",
        description: "площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый; труба отопления - 2 шт",
        price: 13000,
        imageUrl: matHall,
    },
    {
        id: "matte-bedroom",
        type: "matte",
        room: "bedroom",
        title: "Матовый натяжной потолок в спальне",
        description: "площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый",
        price: 11500,
        imageUrl: matBedroom,
    },
    {
        id: "matte-hallway",
        type: "matte",
        room: "hallway",
        title: "Матовый натяжной потолок в коридоре",
        description: "площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м; установка точечных светильников - 4 шт.; цвет - белый",
        price: 11500,
        imageUrl: matHallway,
    },
    {
        id: "matte-kitchen",
        type: "matte",
        room: "kitchen",
        title: "Матовый натяжной потолок в кухне",
        description: "площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м; заготовка под люстру и установка люстры - 1 шт.; установка точечных светильников - 4 шт; цвет - белый",
        price: 12500,
        imageUrl: matKitchen,
    },

    // ---- GLOSSY ----
    {
        id: "glossy-hall",
        type: "glossy",
        room: "hall",
        title: "Глянцевый натяжной потолок в зале",
        description: "площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый; труба отопления - 2 шт",
        price: 13000,
        imageUrl: glHall,
    },
    {
        id: "glossy-bedroom",
        type: "glossy",
        room: "bedroom",
        title: "Глянцевый натяжной потолок в спальне",
        description: "площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый",
        price: 11500,
        imageUrl: glBedroom,
    },
    {
        id: "glossy-hallway",
        type: "glossy",
        room: "hallway",
        title: "Глянцевый натяжной потолок в коридоре",
        description: "площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м; установка точечных светильников - 4 шт.; цвет - белый",
        price: 11500,
        imageUrl: glHallway,
    },
    {
        id: "glossy-kitchen",
        type: "glossy",
        room: "kitchen",
        title: "Глянцевый натяжной потолок в кухне",
        description: "площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м; заготовка под люстру и установка люстры - 1 шт.; установка точечных светильников - 4 шт; цвет - белый",
        price: 12500,
        imageUrl: glKitchen,
    },

    // ---- SATIN ----
    {
        id: "satin-hall",
        type: "satin",
        room: "hall",
        title: "Сатиновый натяжной потолок в зале",
        description: "площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый; труба отопления - 2 шт",
        price: 13000,
        imageUrl: satHall,
    },
    {
        id: "satin-bedroom",
        type: "satin",
        room: "bedroom",
        title: "Сатиновый натяжной потолок в спальне",
        description: "площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый",
        price: 11500,
        imageUrl: satBedroom,
    },
    {
        id: "satin-hallway",
        type: "satin",
        room: "hallway",
        title: "Сатиновый натяжной потолок в коридоре",
        description: "площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м; установка точечных светильников - 4 шт.; цвет - белый",
        price: 11500,
        imageUrl: satHallway,
    },
    {
        id: "satin-kitchen",
        type: "satin",
        room: "kitchen",
        title: "Сатиновый натяжной потолок в кухне",
        description: "площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м; заготовка под люстру и установка люстры - 1 шт.; установка точечных светильников - 4 шт; цвет - белый",
        price: 12500,
        imageUrl: satKitchen,
    },

    // ---- SOARING ----
    {
        id: "soaring-hall",
        type: "soaring",
        room: "hall",
        title: "Парящий натяжной потолок в зале",
        description: "площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый; труба отопления - 2 шт",
        price: 16300,
        imageUrl: soarHall,
    },
    {
        id: "soaring-bedroom",
        type: "soaring",
        room: "bedroom",
        title: "Парящий натяжной потолок в спальне",
        description: "площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м; заготовка под люстру и установка люстры - 1 шт.; цвет - белый",
        price: 11400,
        imageUrl: soarBedroom,
    },
    {
        id: "soaring-hallway",
        type: "soaring",
        room: "hallway",
        title: "Парящий натяжной потолок в коридоре",
        description: "площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м; установка точечных светильников - 4 шт.; цвет - белый",
        price: 11200,
        imageUrl: soarHallway,
    },
    {
        id: "soaring-kitchen",
        type: "soaring",
        room: "kitchen",
        title: "Парящий натяжной потолок в кухне",
        description: "площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м; заготовка под люстру и установка люстры - 1 шт.; установка точечных светильников - 4 шт; цвет - белый",
        price: 12200,
        imageUrl: soarKitchen,
    },

    // ---- TWO LEVEL ----
    {
        id: "twoLevel-hall",
        type: "twoLevel",
        room: "hall",
        title: "Двухуровневый натяжной потолок в зале",
        description: "площадь - 19 м2; обработка угла - 4 шт; профиль - 18 м; длина второго уровня - 12 м.п; заготовка под люстру и установка люстры - 1 шт.; установка точечных светильников - 8 шт; цвет - белый/белый; труба отопления - 2 шт",
        price: 27400,
        imageUrl: twoLevHall,
    },
    {
        id: "twoLevel-bedroom",
        type: "twoLevel",
        room: "bedroom",
        title: "Двухуровневый натяжной потолок в спальне",
        description: "площадь - 11 м2; обработка угла - 4 шт; профиль - 13 м; длина второго уровня - 6.5 м.п; заготовка под люстру и установка люстры - 1 шт; установка точечных светильников - 10 шт; цвет - белый/белый",
        price: 17850,
        imageUrl: twoLevBedroom,
    },
    {
        id: "twoLevel-hallway",
        type: "twoLevel",
        room: "hallway",
        title: "Двухуровневый натяжной потолок в коридоре",
        description: "площадь - 6.3 м2; обработка угла - 8 шт; профиль - 12 м; длина второго уровня - 5.5 м.п; установка точечных светильников - 6 шт; цвет - белый/белый",
        price: 13500,
        imageUrl: twoLevHallway,
    },
    {
        id: "twoLevel-kitchen",
        type: "twoLevel",
        room: "kitchen",
        title: "Двухуровневый натяжной потолок в кухне",
        description: "площадь - 12 м2; обработка угла - 8 шт.; профиль - 11.6 м; длина второго уровня - 4 м.п; заготовка под люстру и установка люстры - 1 шт.; установка точечных светильников - 5 шт; цвет - белый/белый",
        price: 13800,
        imageUrl: twoLevKitchen,
    },

    // ---- LIGHT LINES ----
    {
        id: "lightLines-hall",
        type: "lightLines",
        room: "hall",
        title: "Световые линии в зале",
        description: "Считается индивидуально, цена зависит от длины линий, ширины линий, количества углов и квадратуры помещения",
        price: 0,
        imageUrl: lightLiHall,
    },
    {
        id: "lightLines-bedroom",
        type: "lightLines",
        room: "bedroom",
        title: "Световые линии в спальне",
        description: "Считается индивидуально, цена зависит от длины линий, ширины линий, количества углов и квадратуры помещения",
        price: 0,
        imageUrl: lightLiBedroom,
    },
    {
        id: "lightLines-hallway",
        type: "lightLines",
        room: "hallway",
        title: "Световые линии в коридоре",
        description: "Считается индивидуально, цена зависит от длины линий, ширины линий, количества углов и квадратуры помещения",
        price: 0,
        imageUrl: lightLiHallway,
    },
    {
        id: "lightLines-kitchen",
        type: "lightLines",
        room: "kitchen",
        title: "Световые линии в кухне",
        description: "Считается индивидуально, цена зависит от длины линий, ширины линий, количества углов и квадратуры помещения",
        price: 0,
        imageUrl: lightLiKitchen,
    },
]

// Информация о типах потолков (для страницы CeilingTypePage)
export const ceilingTypesInfo: Record<string, CeilingTypeInfo> = {
    matte: {
        type: "matte",
        title: "Матовые натяжные потолки",
        header: "Матовые натяжные потолки",
        description: "Матовые потолки внешне похожи на традиционные побеленные потолки без бликов. Благодаря своей нейтральности, легко вписываются в любой интерьер.",
    },
    glossy: {
        type: "glossy",
        title: "Глянцевые натяжные потолки",
        header: "Глянцевые натяжные потолки",
        description: "Глянцевые полотна — одни из самых популярных видов натяжных потолков. Благодаря своей лаковой поверхности, обладают ярко выраженным светоотражающим эффектом.",
    },
    satin: {
        type: "satin",
        title: "Сатиновые натяжные потолки",
        header: "Сатиновые натяжные потолки",
        description: "Сатиновые потолки по текстуре схожи с матовым полотном, но при этом лишены зернистости. Мягко отражают дневной и искусственный свет, играя оттенками.",
    },
    soaring: {
        type: "soaring",
        title: "Парящие натяжные потолки",
        header: "Парящие натяжные потолки",
        description: "Подойдут для помещений с низкими потолками. Благодаря подсветке, зрительно вытягивают пространство.",
    },
    twoLevel: {
        type: "twoLevel",
        title: "Двухуровневые натяжные потолки",
        header: "Двухуровневые натяжные потолки",
        description: "Сложные дизайнерские конструкции позволят скрыть дефекты основания и видимые элементы коммуникаций.",
    },
    lightLines: {
        type: "lightLines",
        title: "Световые линии",
        header: "Световые линии",
        description: "Натяжные потолки со световыми линиями – это новое течение в дизайне интерьера помещений, можно декорировать светящимися полосами комнаты любой формы и размера.",
    },
}