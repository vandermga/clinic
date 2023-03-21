import { HStack, NativeBaseProvider, StatusBar, Text } from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import { Routes } from './src/routes/index';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoagded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoagded ? <Routes/> : <Loading/>}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import { StyleSheet, Text, View, Button } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { Home } from './src/screens/Home';

// export default function App() {

//     function handleSignin() {
//       auth()
//       .signInWithEmailAndPassword('vander@email.com','123456')
//       .then(result => console.log(result))
//       .catch(error => console.log(error))
//     }

//   return (
//     <View style={styles.container}>
//       <Home/>
//       <Text>Clinic Clique para entrar</Text>
//       <Button title='Entrar' onPress={handleSignin}/>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
