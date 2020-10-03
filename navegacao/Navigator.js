import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Cores from "../constantes/Cores";
import DetalhesDoAmbienteTela from "../telas/DetalhesDoAmbienteTela";
import ListaLugaresNaTela from "../telas/ListaLugaresNaTela";
import MapaTela from "../telas/MapaTela";
import NovoLugarTela from "../telas/NovoLugarTela";

const Navigator = createStackNavigator ({
  ListaLugaresNaTela: ListaLugaresNaTela,
  DetalhesDoAmbienteTela: DetalhesDoAmbienteTela,
  NovoLugar: NovoLugarTela,
  Mapa: MapaTela
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
  }
});

export default createAppContainer(Navigator);
