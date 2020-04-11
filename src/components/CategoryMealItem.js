import React from 'react';
import {StyleSheet, View, Text, Image, TouchableNativeFeedback, ImageBackground} from "react-native";
import Colors from "../consts/Colors";
import DefaultText from "./DefaultText";

export default function CategoryMealItem({item, onPress}){
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.itemContainer}>
                <View style={styles.media}>
                    <ImageBackground source={{uri: item.imageUrl}} style={{width: '100%', height: '100%'}}>
                        <View style={styles.content}>
                            <DefaultText style={styles.itemTitle}>{item.title}</DefaultText>
                            <Text style={styles.secondaryInfo}>{item.complexity} - {item.affordability}</Text>
                            <Text style={styles.metadata}>{item.duration} min</Text>
                        </View>

                    </ImageBackground>
                </View>

            </View>
        </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    media: {
        height: '100%'
    },
    itemContainer: {


        margin: 10,
        height: 300,
        flex: 1,
        borderColor: 'white'
    },
    itemTitle: {
        fontSize: 21,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 5,
    },
    secondaryInfo:{
        fontSize: 17,
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: 5,
    },
    metadata: {
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 5,
        color: 'white'
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',


    }

});