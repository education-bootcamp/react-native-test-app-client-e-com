import {View, Text, StyleSheet, Button} from "react-native";
import {useNavigation} from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
  return(
      <View style={styles.container}>
          <Text>Home</Text>
          <Button
              onPress={()=>navigation.navigate('Login')}
              title="Navigate to login"/>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Home;
