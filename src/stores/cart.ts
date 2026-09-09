import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  weight: string;
  unitPrice: number;
  quantity: number;
};

export type CartFly = {
  id: number;
  image: string;
  from: { x: number; y: number; width: number; height: number };
};

type AddItemInput = Omit<CartItem, "quantity"> & {
  quantity?: number;
  from?: DOMRect;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  flies: CartFly[];
  pulse: number;
  openCart: () => void;
  closeCart: () => void;
  setOpen: (open: boolean) => void;
  addItem: (item: AddItemInput) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearFly: (id: number) => void;
  pulseCart: () => void;
};

export function parsePrice(value: string) {
  return Number(value.replace(/,/g, ""));
}

export function formatRupees(value: number) {
  return `Rs ${value.toLocaleString("en-IN")}`;
}

let flySeq = 0;

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  flies: [],
  pulse: 0,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  setOpen: (open) => set({ isOpen: open }),
  addItem: (item) =>
    set((state) => {
      const quantity = item.quantity ?? 1;
      const existing = state.items.find((entry) => entry.id === item.id);
      const items = existing
        ? state.items.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          )
        : [
            ...state.items,
            {
              id: item.id,
              name: item.name,
              image: item.image,
              weight: item.weight,
              unitPrice: item.unitPrice,
              quantity,
            },
          ];
      const flies = item.from
        ? [
            ...state.flies,
            {
              id: ++flySeq,
              image: item.image,
              from: {
                x: item.from.left,
                y: item.from.top,
                width: item.from.width,
                height: item.from.height,
              },
            },
          ]
        : state.flies;
      return { items, flies };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  increment: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decrement: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    })),
  clearFly: (id) =>
    set((state) => ({ flies: state.flies.filter((fly) => fly.id !== id) })),
  pulseCart: () => set((state) => ({ pulse: state.pulse + 1 })),
}));
