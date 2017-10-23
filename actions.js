export function updateItem(item) {
    return {
        type: 'UPDATING_ITEM',
        item
    }
}

export function addItem(item) {
    return {
        type: 'ADDING_ITEM',
        item
    }
}

export function removeItem(item) {
    return {
        type: 'REMOVING_ITEM',
        item
    }
}