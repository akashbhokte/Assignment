import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Card } from 'react-native-shadow-cards';

const HomeScreen = ({ navigation }) => {
    return (

        <View style={{
            flex: 1,
            backgroundColor: "skyblue",
        }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Home</Text>
                <TouchableOpacity style={{
                    width: "80%",
                    borderRadius: 25,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40,
                    backgroundColor: "ghostwhite",
                }} onPress={() =>
                    navigation.navigate('Offers')
                }>
                    <Text style={{ fontSize: 20 }}>Go to Offers</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default HomeScreen

