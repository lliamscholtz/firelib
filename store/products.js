// A pair of jeggings
export const item_jeggings = {
    item_id: 'SKU_123',
    item_name: 'jeggings',
    item_category: 'pants',
    item_variant: 'black',
    item_brand: 'Google',
    price: 9.99,
};

// A pair of boots
export const item_boots = {
    item_id: 'SKU_456',
    item_name: 'boots',
    item_category: 'shoes',
    item_variant: 'brown',
    item_brand: 'Google',
    price: 24.99,
};

// A pair of socks
export const item_socks = {
    item_id: 'SKU_789',
    item_name: 'ankle_socks',
    item_category: 'socks',
    item_variant: 'red',
    item_brand: 'Google',
    price: 5.99,
};

export const item_list = {
    item_list_id: 'F001',
    item_list_name: 'Featured Products',
    items: [item_jeggings, item_boots, item_socks],
};

export const item_list_select = {
    item_list_id: 'F001',
    item_list_name: 'Featured Products',
    items: [item_jeggings],
};

const item_jeggings_quantity = {
    ...item_jeggings,
    quantity: 2,
};
export const cart = {
    currency: 'USD',
    value: 44.97,
    items: [item_jeggings_quantity],
};
