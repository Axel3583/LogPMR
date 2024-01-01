import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { ReactNode } from "react";

export interface City {
    name: string,
    latitude: number,
    longitude: number
  }

export type RootStackParamList = {
    Home: undefined;
    Carte: undefined;
  };

export type Props = NativeStackScreenProps<RootStackParamList, 'Carte'>;
export interface TabContextType {
  opened: boolean;
  toggleOpened: () => void;
}

export interface AddButtonProps {
  opened: boolean;
  toggleOpened: () => void;
}

export interface TabContextProviderProps {
  children?: React.ReactNode; 
}
  
  export default (): City[] => {
    return [
        { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
        { name: "Marseille", latitude: 43.2965, longitude: 5.3698 },
        { name: "Lyon", latitude: 45.75, longitude: 4.85 },
        { name: "Toulouse", latitude: 43.6043, longitude: 1.4437 },
        { name: "Nice", latitude: 43.7102, longitude: 7.2620 },
        { name: "Nantes", latitude: 47.2184, longitude: -1.5536 },
        { name: "Strasbourg", latitude: 48.5734, longitude: 7.7521 },
        { name: "Montpellier", latitude: 43.6108, longitude: 3.8767 },
        { name: "Bordeaux", latitude: 44.8378, longitude: -0.5792 },
        { name: "Lille", latitude: 50.6292, longitude: 3.0573 },
    ]
       
  } 
  