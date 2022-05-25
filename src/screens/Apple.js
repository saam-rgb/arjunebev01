import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { Component } from 'react';
import { Colors, Images } from '../constants';
import { Display } from '../utils';
import { Separator, ToggleButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-virtualized-view';

const Apple = () => {

    const boxalert = () =>
    Alert.alert(
      "Cart",
      "Product added Successfully",
      [
        { text: "OK"}
      ]
    );

  return (
    <>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ff3333" translucent = {false}/>
        <View style={{flex:1}}>
            {/* <ScrollView style={{backgroundColor:"whitesmoke"}}> */}
                <Image source={Images.DEFAULT} style={{ padding:30,margin:15,width:size-30,height: 350,borderRadius:20}} />
                <Text style={{fontSize:30,textAlign:"center",padding:15,fontWeight:"bold",color:"#000"}}>APPLE JUICE</Text>
                <Text style={styles.text}><Text style={{color:"#666"}}>Rate : </Text>100</Text>
                <Text style={styles.text}><Text style={{color:"#666"}}>Stack Left : </Text>45</Text>
                <Text style={styles.text}><Text style={{color:"#666"}}>User Rating : </Text>4.6</Text>
            {/* </ScrollView> */}
        </View>
          <View style={{height:60,backgroundColor:"whitesmoke",zIndex:100}}>
            <TouchableOpacity activeOpacity={1} onPress={boxalert} style={styles.button}>
                    <Text style={styles.text1} >Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </>
    
  )
}

export default Apple

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerTitle: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 20,
        fontFamily: 'Roboto',
        lineHeight: 20 * 1.1,
        width: Display.setWidth(100),
        textAlign: 'center',
    },
})