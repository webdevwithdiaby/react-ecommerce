export const addToCart = (cartItems, itemToAdd) => {
  const exists = cartItems.find((item) => item.id === itemToAdd.id);
  if (exists) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeFromCart = (items, item) => {
  const exists = items.find((it) => it.id === item.id);
  if (exists) {
    const quantity = item.quantity;
    if (quantity > 1) {
      return items.map((it) =>
        it.id === item.id ? { ...it, quantity: it.quantity - 1 } : it
      );
    }
  }

  return items;
};
