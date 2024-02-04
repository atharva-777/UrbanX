import { create } from "zustand";

interface CartState {
  numberOfProducts: number;
  allProducts: Array<string>;
  addToCart: (product: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

const useCartStore = create<CartState>()((set) => ({
  numberOfProducts: 0,
  allProducts: [],
  addToCart: (product) => set((state) => ({})),
  removeFromCart: (productId) => set((state) => ({})),
  clearCart: () => set((state) => ({})),
  increaseProductQuantity: (productId) => set((state) => ({})),
  decreaseProductQuantity: (productId) => set((state) => ({})),
}));

export default useCartStore;
