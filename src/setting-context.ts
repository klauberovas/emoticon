import { createContext, useContext } from 'react';

export interface SettingData {
  eyes: number;
  mouth: number;
  color: number;
}

export interface SettingContextData extends SettingData {
  changeId: (value: string, id: number) => void;
}

export const SettingContext = createContext<SettingContextData>({
  eyes: 1,
  mouth: 1,
  color: 1,
  changeId: () => {},
});
export const useSettings = () => useContext(SettingContext);
