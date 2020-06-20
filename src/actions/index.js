export const REMOVE_ITEM = 'REMOVE_ITEM';
export const BUY_ITEM = 'BUY_ITEM';

export const addFeature = newFeature => {
    return {
        type: BUY_ITEM,
        payload: newFeature
    }
}

export const removeFeature = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}