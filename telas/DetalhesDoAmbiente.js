import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const DetalhesDoAmbienteTela = (props) => {
  return (
    <View>
      <Text>DetalhesDoAmbienteTela</Text>
    </View>
  )
}

DetalhesDoAmbienteTela.navigationOptions = (dadosNav) => {
  return {
    headerTitle: dadosNav.navigation.getParam('tituloLugar')
  }
}

const estilos = StyleSheet.create({

});

export default DetalhesDoAmbienteTela;
