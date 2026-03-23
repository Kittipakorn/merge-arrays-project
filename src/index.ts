import { merge } from './merge';

function main() {
    const collection_1 = [1, 3, 5]; 
    const collection_2 = [2, 4, 6]; 
    const collection_3 = [9, 8, 7, 0]; 

    console.log("Collection 1 (Min->Max) :", collection_1);
    console.log("Collection 2 (Min->Max) :", collection_2);
    console.log("Collection 3 (Max->Min) :", collection_3);
    
    const result = merge(collection_1, collection_2, collection_3);

    console.log("\nMerged :", result);
}

main();