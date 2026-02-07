import {View, Text, StyleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../component/header";
import MainContent from "@/component/mainContent";
import Footer from "@/component/footer";
export default function Index() {
  return (
    <SafeAreaView style={styles.body}>
      <Header/>
      <MainContent/>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    body: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
    },
    data: {
      marginTop: 10,
      width: '95%',
      height: 100,
      resizeMode: 'cover',
      marginLeft: 10,
    },
    text: {
      borderTopColor: '#2a2a2a',
      borderTopWidth: 0.5,
      width: '90%',
      marginLeft: 20,
      marginTop: 15,
      paddingTop: 5,
      color: '#000000',
    },
    reference: {
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 40,
      paddingTop: 10,
    }
  }
)
