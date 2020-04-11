import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from "react-native";

export default function CategoryItemGrid({title, onPress, color}){
    let Touchable = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <Touchable style={{flex: 1}} onPress={onPress}>
                <View style={{...styles.item, backgroundColor: color, borderColor: color}}>
                    <Text style={styles.itemTitle} numberOfLines={2}>{title} </Text>
                </View>
            </Touchable>
        </View>

    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        elevation: 5,
        margin: 20,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    item: {
        flex:1,
        borderWidth: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10
    },
    itemTitle: {
        fontFamily: 'roboto-mono-bold',
        color: '#212121',
        padding: 5,
        fontSize: 14,
        textAlign: 'right'

    }
})