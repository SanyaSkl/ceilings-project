export interface CeilingTypeInfo {
    type: string
    title: string
    header: string
    description: string
}

export interface CeilingProduct {
    id: string
    type: string
    room: string
    title: string
    description: string
    price: number
    imageUrl: string
}

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