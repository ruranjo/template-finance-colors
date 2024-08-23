import Colors from '@/constants/Colors';
import { create } from 'zustand';

interface ColorsType {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
  lightBackground: string;
  darkBackground: string;
  midAccent: string;
}

interface ColorStore {
  colors: ColorsType;
  setColors: (newColors: ColorsType) => void;
}

const useColorStore = create<ColorStore>((set) => ({
  colors: Colors,
  setColors: (newColors) => set({ colors: newColors }),
}));

export default useColorStore;