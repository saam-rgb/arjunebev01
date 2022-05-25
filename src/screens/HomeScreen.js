import { AppRegistry, StyleSheet, Text, View,ScrollView, StatusBar,Image } from 'react-native'
import React, { Component } from 'react';
import { Colors, Images } from '../constants';
import { Display } from '../utils';
import { Separator, ToggleButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-virtualized-view';



const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            
                <Separator height={StatusBar.currentHeight/5} />
                <SafeAreaView >
               
                    <Text style={styles.headerTitle}>
                        E  -  B  E  V
                        </Text>
                    
                        <View  style={styles.logoImageContainer}> 
                            <Image
                    style={styles.image}
                        source={Images.HLOGO}
                        resizeMode="cover"
                        />
                    </View>  
                </SafeAreaView>
                <View>
                    <Text style={{ padding: 15, fontSize: 20, fontWeight: "bold" }}>Popular Products</Text>
                </View>
                <ScrollView style={{ backgroundColor: "#eee" }} nestedScrollEnabled={true}>
               


                    <TouchableOpacity style={styles.juiceButton}  onPress={() => navigation.navigate('Apple')}>
                        <View style={styles.juiceContainer}>
                            <View style={styles.juiceStyleContainer}>
                                <Image source={Images.DEFAULT} style={styles.juiceStyle} />
                            </View>
                            
                            <Text style={styles.socialSigninButtonText}>APPLE JUICE</Text>
                        </View>

                    </TouchableOpacity>
                    <Text></Text>

                    <TouchableOpacity style={styles.juiceButton}>
                        <View style={styles.juiceContainer}>
                            <View style={styles.juiceStyleContainer}>
                                <Image source={Images.DEFAULT} style={styles.juiceStyle} />
                            </View>
                            <Text style={styles.socialSigninButtonText}>ORANGE JUICE</Text>
                        </View>
                    </TouchableOpacity>
                    <Text></Text>

                    <TouchableOpacity style={styles.juiceButton}>

                        <View style={styles.juiceContainer}>
                            <View style={styles.juiceStyleContainer}>
                                <Image source={Images.DEFAULT} style={styles.juiceStyle} />
                            </View>
                            <Text style={styles.socialSigninButtonText}>LEMON JUICE</Text>
                        </View>
                    </TouchableOpacity>
                    <Text></Text>

                    <TouchableOpacity style={styles.juiceButton}>
                        <View style={styles.juiceContainer}>
                            <View style={styles.juiceStyleContainer}>
                                <Image source={Images.DEFAULT} style={styles.juiceStyle} />
                            </View>
                            <Text style={styles.socialSigninButtonText}>GRAPE JUICE</Text>
                        </View>

                    </TouchableOpacity>
              
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
   
  
    headerTitle: {
        color: Colors.DEFAULT_RED,
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: "Roboto",
        lineHeight: 20 * 2,
        width: Display.setWidth(100),
        textAlign: 'center',
    },
    logoImageContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: Display.setWidth(100),
        
    },
    image: {
        paddingLeft: 30 ,
        height: Display.setHeight(20),
        width: Display.setWidth(80),
    },
    juiceButton: {
        backgroundColor: Colors.SECONDARY_RED,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      juiceContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    juiceStyleContainer: {
        backgroundColor: Colors.DEFAULT_GREY,
        padding: 2,
        borderRadius: 3,
        position: 'absolute',
        left: 25,
    },
    juiceStyle: {
        height: 18,
        width: 18,
    },
    socialSigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 20,
        lineHeight: 13 * 1.4,
        // fontFamily: Fonts.POPPINS_MEDIUM,
      },
    
    
    
})

export default HomeScreen