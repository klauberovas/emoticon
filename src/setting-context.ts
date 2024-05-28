import { createContext, useContext } from 'react';

export interface SettingData {
  eyes: number;
  mouth: number;
  color: number;
}

export const SettingContext = createContext<SettingData>({
  eyes: 1,
  mouth: 1,
  color: 1,
});
export const useSettings = () => useContext(SettingContext);
