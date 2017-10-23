const initialState = {
    data: [
        {name: 'Milk1l', type: 'home'},
        {name: 'Eggs Medium 12 pack', type: 'cart'},
        {name: 'Fresh Basil', type: 'home'},
        {name: 'Wholegrain Bread 1 pkg', type: 'cart'},
        {name: 'Ground Coffee 200g', type: 'cart'},
        {name: 'Red Wine', type: 'home'},
        {name: 'Mozzarella Cheese 150g', type: 'home'},
        {name: 'Orange Juice 1l', type: 'cart'},
        {name: 'Tomatoes', type: 'home'}
    ]
};

export default function itemReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADDING_ITEM':
            return {
                data: [...state.data, action.item]
            };
        case 'UPDATING_ITEM':
            const changeItem = (item) => {
                return item.name === action.item.title ?
                    {name: item.name, type: action.item.newType} :
                    item;
            };
            return {
                data: state.data.map(changeItem)
            };
        case 'REMOVING_ITEM':
            let index = 0;
            for (let i = 0; i < state.data.length; i++) {
                if(state.data[i].name === action.item.name) {
                    index = i;
                    break;
                }
            }
            return {
                data: [
                    ...state.data.slice(0, index),
                    ...state.data.slice(index + 1)
                ]
            };
        default:
            return state;
    }
}