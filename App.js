import { StyleSheet, View, Text, Button } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';
import Constants from 'expo-constants';
import { useEffect } from 'react';


export default function App() {

  Analytics.setClientId("aaa-asdsad-asdasda-asdasdasd");

useEffect(()=>{
 
  const initConfig = async () => {
    Analytics.setUnavailabilityLogging(false);
    if(Constants.manifest2.extra?.expoGo?.packagerOpts?.dev){
      await Analytics.setAnalyticsCollectionEnabled(true);
    }
  }
 
  initConfig();

},[])

  const onReady = async () => {
    console.log('ready!');
   
    try {
     await Analytics.logEvent('home_page', {
        name: 'Home',
        screen: 'HomePage',
        purpose: 'Welcome To Home Page',
        result: 'App is ready and Welcome To Home Page',
      });
    } catch(err){
      alert(`error : ${err}`);
    }

  };
  return (
    <View style={styles.container}>
     <Text>Hi welcome to home page</Text>
     <Button onPress={onReady} title={'Please click Here'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    alignItems:'center'
  },
});