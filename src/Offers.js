import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Card } from 'react-native-shadow-cards';

const Offers = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <ScrollView >
                <View style={styles.header}>

                    <View style={{ flex: 1, left: 20, top: 20 }}>
                        <Text style={{ fontSize: 30, color: 'white' }}>Great Deals</Text>

                    </View>
                </View>
                <View style={{ flex: 1, marginTop: -60, marginVertical: 8 }}>
                    <Card style={{ padding: 10, alignSelf: 'center', width: '90%', height: '100%', }}>

                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Image style={{
                                    width: 300,
                                    height: 300,

                                }} source={require('./assets/img/offerimage.jpg')} />
                            </TouchableOpacity>
                        </View>

                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}

export default Offers


const styles = StyleSheet.create({


    header: {
        flexDirection: 'row',
        backgroundColor: "skyblue",
        height: 150,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },

});

