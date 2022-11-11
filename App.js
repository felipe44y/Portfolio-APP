import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Routes from './src/routes/StackNavigation'


export default function App() {
  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  conteaner:{
    flex:1,
  }
})

