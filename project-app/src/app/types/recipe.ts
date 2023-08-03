export interface Recipe {
    name: string;
    imageUrl: string;
    category: string;
    products: string[];
    preparation: string;
    time: Number;
    recipeId: string | undefined;
};