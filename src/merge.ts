export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

    const merged12:number[] = [];
    const merged:number[] = [];

    //merge collection_1 and collection_1 to merged12
    let i=0, j=0;
    while(i < collection_1.length && j < collection_2.length) {
        if(collection_1[i] < collection_2[j]) {
            merged12.push(collection_1[i]);
            i++;
        }
        else {
            merged12.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        merged12.push(collection_1[i]);
        i++;
    }
    while (j < collection_2.length) {
        merged12.push(collection_2[j]);
        j++;
    }

    //merge merged12 and collection_3 to merged
    i=0, j=collection_3.length-1;
    while(i < merged12.length && j >= 0) {
        if(merged12[i] < collection_3[j]) {
            merged.push(merged12[i]);
            i++;
        }
        else {
            merged.push(collection_3[j]);
            j--;
        }
    }
    while (i < merged12.length) {
        merged.push(merged12[i]);
        i++;
    }
    while (j >= 0) {
        merged.push(collection_3[j]);
        j--;
    }

    return merged;
}