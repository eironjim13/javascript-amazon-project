function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,

    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [];
      }
    },

    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
      let matchingItem = this.cartItems.find(
        item => item.productId === productId
      );

      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );

      if (!quantitySelector) return;

      const quantity = Number(quantitySelector.value);

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        this.cartItems.push({
          productId,
          quantity,
          deliveryOptionId: '1'
        });
      }

      this.saveToStorage();
    },

    calculateCartQuantity() {
      return this.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    }
  };

  return cart;
}

const  cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();
cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
console.log(cart);
console.log(businessCart);






