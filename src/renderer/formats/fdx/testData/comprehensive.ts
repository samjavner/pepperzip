import {
    Cookbook,
    CookbookChapter,
    Fdx,
    Ingredient,
    IngredientFolder,
    Recipe,
} from "../model";

const image =
    "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEQAACxEBf2RfkQAAAAd0SU1FB9sIHxceL+re/TcAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAABOSURBVBhXY/iPBG7evAniP3ny5OHDh4cOHXr+/DlDeVlZYGBgTk5OV1cXiL+1rjZZUz1aTzfNzPTj27cMf3//vrlp47G5c948evT//38ANTI3RDD4h/cAAAAASUVORK5CYII=";

const cookbook1: Cookbook = {
    id: 13,
    name: "Test Cookbook 1",
    comments: undefined,
    autoArchiveRules: [
        {
            attribute: "Recipe Name",
            expressionType: "Standard",
            expression: "abc",
        },
        {
            attribute: "Recipe Name",
            expressionType: "Regular Expression",
            expression: "def",
        },
        {
            attribute: "Comments",
            expressionType: "Standard",
            expression: "abc",
        },
    ],
};

const cookbook2: Cookbook = {
    id: 14,
    name: "Test Cookbook 2",
    comments: "It's comments.\n\nOn multiple lines.",
    autoArchiveRules: [],
};

const chapter1: CookbookChapter = {
    id: 159,
    cookbookId: 14,
    parentChapterId: undefined,
    name: "Chapter 1",
    comments: "It's chapter comments.\n\nOn multiple lines.",
    autoArchiveRules: [
        {
            attribute: "Webpage",
            expressionType: "Regular Expression",
            expression: "xyz",
        },
    ],
};

const chapter2: CookbookChapter = {
    id: 160,
    cookbookId: 14,
    parentChapterId: 159,
    name: "Chapter 1a",
    comments: undefined,
    autoArchiveRules: [],
};

const chapter3: CookbookChapter = {
    id: 161,
    cookbookId: 14,
    parentChapterId: undefined,
    name: "Chapter 2",
    comments: undefined,
    autoArchiveRules: [],
};

const recipe1: Recipe = {
    id: 1759,
    name: "Recipe with only a name",
    cookbookChapterId: undefined,
    createDate: "2018-12-09",
    cookbookId: 13,
    servings: undefined,
    yield: undefined,
    recipeTypes: [],
    preparationTime: undefined,
    cookingTime: undefined,
    inactiveTime: undefined,
    readyInTime: undefined,
    ovenTemperatureF: undefined,
    ovenTemperatureC: undefined,
    degreeOfDifficulty: undefined,
    comments: undefined,
    author: undefined,
    source: undefined,
    sourcePageNumber: undefined,
    webPage: undefined,
    copyright: undefined,
    userData1: undefined,
    userData2: undefined,
    userData3: undefined,
    userData4: undefined,
    userData5: undefined,
    userData6: undefined,
    userData7: undefined,
    userData8: undefined,
    userData9: undefined,
    userData10: undefined,
    userData11: undefined,
    userData12: undefined,
    userData13: undefined,
    userData14: undefined,
    userData15: undefined,
    colorFlag: "<None>",
    ingredients: [],
    procedures: [],
    nutrition: undefined,
    tips: [],
    reviews: [],
    authorNotes: [],
    measures: [],
    image: undefined,
    images: [],
    media: [],
    attachments: [],
    sourceImage: undefined,
};

const recipe2: Recipe = {
    ...recipe1,
    id: 1760,
    name: "Another recipe with only a name",
    cookbookId: 14,
    cookbookChapterId: 159,
};

const recipe3: Recipe = {
    ...recipe1,
    id: 1761,
    name: "Yet another recipe with only a name",
    cookbookId: 14,
    cookbookChapterId: 160,
};

const recipe4: Recipe = {
    id: 1762,
    name: "Recipe with everything filled out",
    cookbookChapterId: 161,
    createDate: "2018-12-09",
    cookbookId: 14,
    servings: 6,
    yield: "6 1/2 cups",
    recipeTypes: [
        "Barbecue",
        "Cakes, Pastries, and Desserts",
        "Potatoes, Pasta, and Grains",
        "Salad",
    ],
    preparationTime: 71,
    cookingTime: 142,
    inactiveTime: 213,
    readyInTime: 284,
    ovenTemperatureF: 450,
    ovenTemperatureC: 232,
    degreeOfDifficulty: 5,
    comments: "It's recipe comments.\n\nOn multiple lines.",
    author: "The Author",
    source: "The Source",
    sourcePageNumber: "iii",
    webPage: "The Webpage",
    copyright: "© 1994",
    userData1: "Un",
    userData2: "Deux",
    userData3: "Trois",
    userData4: "Quatre",
    userData5: "Cinq",
    userData6: 6,
    userData7: 7,
    userData8: 8,
    userData9: 9,
    userData10: -10,
    userData11: "www.example.com/11",
    userData12: "www.example.com/12",
    userData13: "www.example.com/13",
    userData14: "www.example.com/14",
    userData15: "anything I want",
    colorFlag: "Purple",
    ingredients: [
        {
            quantity: "",
            unit: "",
            ingredient: "Heading",
            heading: true,
            linkType: undefined,
            ingredientId: undefined,
            ingredientName: undefined,
            recipeId: undefined,
            recipeName: undefined,
            measureId: undefined,
            measure: undefined,
            measureQuantity: undefined,
            measureGramWeight: undefined,
        },
        {
            quantity: "1 1/2",
            unit: "cups",
            ingredient: "egg yolks",
            heading: false,
            linkType: "Ingredient",
            ingredientId: 1125,
            ingredientName: "Egg, yolk, raw, fresh",
            recipeId: undefined,
            recipeName: undefined,
            measureId: 10205,
            measure: "1 cup",
            measureQuantity: 1.5,
            measureGramWeight: 243,
        },
        {
            quantity: "",
            unit: "medium",
            ingredient: "apple",
            heading: false,
            linkType: "Unlinked",
            ingredientId: undefined,
            ingredientName: undefined,
            recipeId: undefined,
            recipeName: undefined,
            measureId: undefined,
            measure: undefined,
            measureQuantity: undefined,
            measureGramWeight: undefined,
        },
        {
            quantity: "four",
            unit: "",
            ingredient: "peaches, pitted and chopped",
            heading: false,
            linkType: "Ingredient",
            ingredientId: 9236,
            ingredientName: "Peaches, raw",
            recipeId: undefined,
            recipeName: undefined,
            measureId: 60927,
            measure: '1 large (2-3/4" dia) (approx 2-1/2 per lb)',
            measureQuantity: 4,
            measureGramWeight: 157,
        },
        {
            quantity: "1",
            unit: "cup",
            ingredient: "Another recipe with only a name",
            heading: false,
            linkType: "Recipe",
            ingredientId: undefined,
            ingredientName: undefined,
            recipeId: 1760,
            recipeName: "Another recipe with only a name",
            measureId: undefined,
            measure: undefined,
            measureQuantity: 1,
            measureGramWeight: undefined,
        },
    ],
    procedures: [
        {
            heading: true,
            text: "Heading",
            image: undefined,
        },
        {
            heading: false,
            text: "Procedure without image",
            image: undefined,
        },
        {
            heading: false,
            text: "Procedure with image",
            image: {
                xmlns_dt: "urn:schemas-microsoft-com:datatypes",
                dt_dt: "bin.base64",
                fileType: "PNG",
                fileName: undefined,
                description: undefined,
                content: image,
            },
        },
        {
            heading: false,
            text: "Line 1\n\nLine 2",
            image: undefined,
        },
    ],
    nutrition: {
        servingSize: "1 Serving",
        nutritionCalculationMode: "Manual",
        calculatedFromRecipeFlag: false,
        calories: 236.44,
        energy: 989.29,
        totalFat: 16.38,
        saturatedFat: 5.82,
        saturatedFattyAcid4_0: 0,
        saturatedFattyAcid6_0: 0,
        saturatedFattyAcid8_0: 0.01,
        saturatedFattyAcid10_0: 0.01,
        saturatedFattyAcid12_0: 0.01,
        saturatedFattyAcid13_0: 9001,
        saturatedFattyAcid14_0: 0.06,
        saturatedFattyAcid15_0: 0.01,
        saturatedFattyAcid16_0: 4.19,
        saturatedFattyAcid17_0: 0.03,
        saturatedFattyAcid18_0: 1.47,
        saturatedFattyAcid20_0: 0.02,
        saturatedFattyAcid22_0: 0.02,
        saturatedFattyAcid24_0: 0.01,
        monounsaturatedFat: 7.2,
        monounsaturatedFattyAcid14_1: 0.01,
        monounsaturatedFattyAcid15_1: 9002,
        monounsaturatedFattyAcid16_1: 0.56,
        monounsaturatedFattyAcid17_1: 9003,
        monounsaturatedFattyAcid18_1: 6.57,
        monounsaturatedFattyAcid20_1: 0.05,
        monounsaturatedFattyAcid22_1: 0.01,
        monounsaturatedFattyAcid24_1: 9004,
        polyunsaturatedFat: 2.64,
        polyunsaturatedFattyAcid18_2: 2.24,
        polyunsaturatedFattyAcid18_3: 0.06,
        polyunsaturatedFattyAcid18_4: 0,
        polyunsaturatedFattyAcid20_3: 9005,
        polyunsaturatedFattyAcid20_4: 0.27,
        polyunsaturatedFattyAcid21_5: 9006,
        polyunsaturatedFattyAcid22_4: 9007,
        omega3FattyAcids: 9008,
        alphaLinolenicAcid: 9009,
        eicosapentaenoicAcid: 0.01,
        docosapentaenoicAcid: 0,
        docosahexaenoicAcid: 0.07,
        omega6FattyAcids: 9010,
        linoleicAcid: 9011,
        gammaLinolenicAcid: 9012,
        eicosadienoicAcid: 9013,
        dihomoGammaLinolenicAcid: 9014,
        arachidonicAcid: 9015,
        transFattyAcids: 9016,
        transMonoenoicFattyAcids: 9017,
        transPolyenoicFattyAcids: 9018,
        cholesterol: 659.14,
        phytosterols: 10.47,
        betaSitosterol: 9019,
        stigmasterol: 9020,
        campesterol: 9021,
        sodium: 29.16,
        potassium: 265.08,
        totalCarbohydrate: 12.17,
        fiber: 1.57,
        starch: 0,
        sugar: 9.12,
        sucrose: 5.02,
        glucose: 2.15,
        fructose: 1.64,
        lactose: 0.04,
        maltose: 0.13,
        galactose: 0.11,
        sugarAlcohols: 9022,
        protein: 10.59,
        vitaminA: 1217.23,
        retinol: 1217.23,
        betaCarotene: 225.38,
        alphaCarotene: 223.02,
        betaCryptoxanthin: 23.09,
        lycopene: 90.17,
        vitaminC: 0,
        calcium: 6.91,
        iron: 84.65,
        vitaminE: 1.92,
        betaTocopherol: 2.33,
        gammaTocopherol: 0.03,
        deltaTocopherol: 0.83,
        vitaminD: 0.04,
        thiamin: 132.44,
        riboflavin: 0.13,
        niacin: 0.35,
        vitaminB6: 0.86,
        folate: 0.24,
        vitaminB12: 92.88,
        pantothenicAcid: 1.18,
        vitaminK: 1.98,
        phosphorus: 3.15,
        magnesium: 257.86,
        zinc: 12.46,
        copper: 1.58,
        manganese: 0.12,
        selenium: 0.1,
        biotin: 34.12,
        chromium: 9023,
        fluoride: 9024,
        iodine: 4.19,
        molybdenum: 9025,
        chloride: 9026,
        choline: 420.88,
        tryptophan: 0.12,
        threonine: 0.43,
        isoleucine: 0.54,
        leucine: 0.88,
        lysine: 0.77,
        methionine: 0.24,
        cystine: 0.17,
        phenylalanine: 0.43,
        tyrosine: 0.43,
        valine: 0.6,
        arginine: 0.69,
        histidine: 0.27,
        alanine: 0.54,
        asparticAcid: 1.38,
        glutamicAcid: 1.26,
        glycine: 0.32,
        proline: 0.41,
        serine: 0.84,
        hydroxyproline: 9026,
        alcohol: 0,
        caffeine: 0,
        theobromine: 0,
        water: 124.8,
        ash: 1.49,
        refuse: 4.19,
        mass: 165.42,
        volume: 234.01,
        fatFactor: 9,
        proteinFactor: 4,
        carbohydrateFactor: 4,
        alcoholFactor: 7,
        caloriesFromFat: 9027,
    },
    tips: [
        {
            heading: true,
            text: "Heading",
        },
        {
            heading: false,
            text: "Tippy",
        },
        {
            heading: false,
            text: "Line 1\n\nLine 2",
        },
    ],
    reviews: [
        {
            rating: 3,
            reviewer: "Joe Smith",
            reviewDate: "2018-12-05",
            text: "Review\n\nOn multiple lines.",
        },
    ],
    authorNotes: [
        {
            heading: true,
            text: "Heading",
        },
        {
            heading: false,
            text: "Author note",
        },
        {
            heading: false,
            text: "Line 1\n\nLine 2",
        },
    ],
    measures: [
        {
            description: "1 cup",
            gramWeight: 101.1,
            measureId: 10205,
            measureType: "Volume",
        },
        {
            description: "handful",
            gramWeight: 57.2,
            measureId: 101648,
            measureType: "Unit",
        },
    ],
    image: {
        xmlns_dt: "urn:schemas-microsoft-com:datatypes",
        dt_dt: "bin.base64",
        fileType: "PNG",
        fileName: undefined,
        description: undefined,
        content: image,
    },
    images: [
        {
            xmlns_dt: "urn:schemas-microsoft-com:datatypes",
            dt_dt: "bin.base64",
            fileType: "PNG",
            fileName: undefined,
            description: "It's a tiny pan.",
            content: image,
        },
    ],
    media: [
        {
            xmlns_dt: "urn:schemas-microsoft-com:datatypes",
            dt_dt: "bin.base64",
            fileType: "x2a5e9acb67e2aeee",
            fileName: "small.mp4",
            description:
                "Not a real video, so this will error importing to Living Cookbook.",
            content: image,
        },
    ],
    attachments: [
        {
            xmlns_dt: "urn:schemas-microsoft-com:datatypes",
            dt_dt: "bin.base64",
            fileType: undefined,
            fileName: "tinypan.png",
            description: "Tiny pan - make copy",
            content: image,
        },
        {
            xmlns_dt: "urn:schemas-microsoft-com:datatypes",
            dt_dt: "bin.base64",
            fileType: undefined,
            fileName: "tinypan.png",
            description: "Tiny pan - no copy",
            content: image,
        },
    ],
    sourceImage: {
        xmlns_dt: "urn:schemas-microsoft-com:datatypes",
        dt_dt: "bin.base64",
        fileType: "GIF",
        fileName: undefined,
        description: undefined,
        content: image,
    },
};

const ingredientFolder1: IngredientFolder = {
    id: 100,
    name: "Dairy and Egg Products",
    parentFolderId: undefined,
    comments: "Ingredient folder comments.\n\nOn multiple lines.",
    autoArchiveRules: [
        {
            attribute: "Ingredient Name",
            expressionType: "Standard",
            expression: "xyz",
        },
    ],
};

const ingredientFolder2: IngredientFolder = {
    id: 2509,
    name: "Eggs",
    parentFolderId: 100,
    comments: undefined,
    autoArchiveRules: [],
};

const ingredient1: Ingredient = {
    id: 1125,
    ingredientFolderId: 2509,
    name: "Egg, yolk, raw, fresh",
    commonName: "Egg yolk",
    source: "The Source",
    webPage: "The Webpage",
    copyright: "© 1995",
    comments: "They're yolks.\n\nOn multiple lines.",
    createDate: "0001-01-01",
    colorFlag: "<None>",
    userData1: "Un",
    userData2: "Deux",
    userData3: "Trois",
    userData4: "Quatre",
    userData5: "Cinq",
    userData6: 6,
    userData7: 7,
    userData8: 8,
    userData9: 9,
    userData10: -10,
    userData11: "www.example.com/11",
    userData12: "www.example.com/12",
    userData13: "www.example.com/13",
    userData14: "www.example.com/14",
    userData15: "anything I want",
    measures: [
        {
            measureId: 10205,
            description: "1 cup",
            gramWeight: 243,
            measureType: "Volume",
            measureCost: 175.663,
        },
        {
            measureId: 60919,
            description: "1 large",
            gramWeight: 17,
            measureType: "Unit",
            measureCost: 12.289,
        },
        {
            measureId: 62740,
            description: "1 large egg yolk",
            gramWeight: 16.6,
            measureType: "Unit",
            measureCost: 12,
        },
        {
            measureId: 99995,
            description: "1 lb",
            gramWeight: 453.6,
            measureType: "Mass",
            measureCost: 327.904,
        },
        {
            measureId: 99996,
            description: "1 ounce",
            gramWeight: 28.35,
            measureType: "Mass",
            measureCost: 20.494,
        },
        {
            measureId: 100000,
            description: "100g",
            gramWeight: 100,
            measureType: "Weight (Mass)",
            measureCost: 72.289,
        },
    ],
    nutrition: {
        servingSize: 1,
        servingSizeMeasureId: 100000,
        defaultMeasureId: 62740,
        nutritionSource: "USDA SR-23",
        nutritionCalculationMode: "Semi-Automatic",
        calories: 322,
        energy: 1347.28,
        totalFat: 26.54,
        saturatedFat: 9.55,
        saturatedFattyAcid4_0: 0,
        saturatedFattyAcid6_0: 0,
        saturatedFattyAcid8_0: 0.01,
        saturatedFattyAcid10_0: 0.01,
        saturatedFattyAcid12_0: 0.01,
        saturatedFattyAcid13_0: undefined,
        saturatedFattyAcid14_0: 0.1,
        saturatedFattyAcid15_0: 0.01,
        saturatedFattyAcid16_0: 6.86,
        saturatedFattyAcid17_0: 0.05,
        saturatedFattyAcid18_0: 2.42,
        saturatedFattyAcid20_0: 0.03,
        saturatedFattyAcid22_0: 0.04,
        saturatedFattyAcid24_0: 0.01,
        monounsaturatedFat: 11.74,
        monounsaturatedFattyAcid14_1: 0.02,
        monounsaturatedFattyAcid15_1: undefined,
        monounsaturatedFattyAcid16_1: 0.92,
        monounsaturatedFattyAcid17_1: undefined,
        monounsaturatedFattyAcid18_1: 10.7,
        monounsaturatedFattyAcid20_1: 0.09,
        monounsaturatedFattyAcid22_1: 0.01,
        monounsaturatedFattyAcid24_1: undefined,
        polyunsaturatedFat: 4.2,
        polyunsaturatedFattyAcid18_2: 3.54,
        polyunsaturatedFattyAcid18_3: 0.1,
        polyunsaturatedFattyAcid18_4: 0,
        polyunsaturatedFattyAcid20_3: undefined,
        polyunsaturatedFattyAcid20_4: 0.44,
        polyunsaturatedFattyAcid21_5: undefined,
        polyunsaturatedFattyAcid22_4: undefined,
        omega3FattyAcids: undefined,
        alphaLinolenicAcid: undefined,
        eicosapentaenoicAcid: 0.01,
        docosapentaenoicAcid: 0,
        docosahexaenoicAcid: 0.11,
        omega6FattyAcids: undefined,
        linoleicAcid: undefined,
        gammaLinolenicAcid: undefined,
        eicosadienoicAcid: undefined,
        dihomoGammaLinolenicAcid: undefined,
        arachidonicAcid: undefined,
        transFattyAcids: undefined,
        transMonoenoicFattyAcids: undefined,
        transPolyenoicFattyAcids: undefined,
        cholesterol: 1085,
        phytosterols: undefined,
        betaSitosterol: undefined,
        stigmasterol: undefined,
        campesterol: undefined,
        sodium: 48,
        potassium: 109,
        totalCarbohydrate: 3.59,
        fiber: 0,
        starch: undefined,
        sugar: 0.56,
        sucrose: 0.07,
        glucose: 0.18,
        fructose: 0.07,
        lactose: 0.07,
        maltose: 0.07,
        galactose: 0.07,
        sugarAlcohols: undefined,
        protein: 15.86,
        vitaminA: 1442,
        retinol: 1442,
        betaCarotene: 371,
        alphaCarotene: 88,
        betaCryptoxanthin: 38,
        lycopene: 33,
        vitaminC: 0,
        calcium: 0,
        iron: 129,
        vitaminE: 2.73,
        betaTocopherol: 2.58,
        gammaTocopherol: 0.05,
        deltaTocopherol: 1.33,
        vitaminD: 0.06,
        thiamin: 218,
        riboflavin: 0.18,
        niacin: 0.53,
        vitaminB6: 0.02,
        folate: 0.35,
        vitaminB12: 146,
        pantothenicAcid: 1.95,
        vitaminK: 2.99,
        phosphorus: 0.7,
        magnesium: 390,
        zinc: 5,
        copper: 2.3,
        manganese: 0.08,
        selenium: 0.06,
        biotin: 56,
        chromium: undefined,
        fluoride: undefined,
        iodine: undefined,
        molybdenum: undefined,
        chloride: undefined,
        choline: 682.3,
        tryptophan: 0.18,
        threonine: 0.69,
        isoleucine: 0.87,
        leucine: 1.4,
        lysine: 1.22,
        methionine: 0.38,
        cystine: 0.26,
        phenylalanine: 0.68,
        tyrosine: 0.68,
        valine: 0.95,
        arginine: 1.1,
        histidine: 0.42,
        alanine: 0.84,
        asparticAcid: 1.55,
        glutamicAcid: 1.97,
        glycine: 0.49,
        proline: 0.65,
        serine: 1.33,
        hydroxyproline: undefined,
        alcohol: 0,
        caffeine: 0,
        theobromine: 0,
        water: 52.31,
        ash: 1.71,
        refuse: 0,
        mass: 100,
        volume: 97.36,
        fatFactor: 9.02,
        proteinFactor: 4.36,
        carbohydrateFactor: 3.68,
        alcoholFactor: 7,
        caloriesFromFat: undefined,
    },
    notes: [
        {
            heading: true,
            text: "Heading",
        },
        {
            heading: false,
            text: "Note",
        },
        {
            heading: false,
            text: "Line 1\n\nLine 2",
        },
    ],
    image: {
        xmlns_dt: "urn:schemas-microsoft-com:datatypes",
        dt_dt: "bin.base64",
        fileType: "PNG",
        fileName: undefined,
        description: undefined,
        content: image,
    },
    images: [
        {
            xmlns_dt: "urn:schemas-microsoft-com:datatypes",
            dt_dt: "bin.base64",
            fileType: "PNG",
            fileName: undefined,
            description: "It's a tiny pan.",
            content: image,
        },
    ],
    attachments: [
        {
            xmlns_dt: "urn:schemas-microsoft-com:datatypes",
            dt_dt: "bin.base64",
            fileType: undefined,
            fileName: "tinypan.png",
            description: "It's a tiny pan.",
            content: image,
        },
    ],
    sourceImage: {
        xmlns_dt: "urn:schemas-microsoft-com:datatypes",
        dt_dt: "bin.base64",
        fileType: "GIF",
        fileName: undefined,
        description: undefined,
        content: image,
    },
    groceryAisle: "Dairy",
};

export const expected: Fdx = {
    source: "Living Cookbook 4.0",
    fileVersion: "2.0",
    date: "2018-12-09",
    cookbooks: [cookbook1, cookbook2],
    cookbookChapters: [chapter1, chapter2, chapter3],
    recipes: [recipe1, recipe2, recipe3, recipe4],
    ingredientFolders: [ingredientFolder1, ingredientFolder2],
    ingredients: [ingredient1],
    warnings: [],
};
