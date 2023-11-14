import React, {useState} from "react";
import {ViewComponent, View, TextComponent, Button, Text, TouchableOpacity, FlatList, Image} from "react-native";
import {gStyle} from "../styles";

export default function Main({navigation}) {

    return(
        <View style={gStyle.main}>
            <View style={gStyle.Row}>
                <TouchableOpacity onPress={() => navigation.navigate('Temp')}>
                    <Image
                        source={require('C:/Users/User/WebstormProjects/reactNative/converterLaba/assets/thermometer_icon.png')}
                        style={gStyle.image}
                    />
                    <Text style={gStyle.title}>Temperature</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gStyle.image} onPress={() => navigation.navigate('Metr')}>
                    <Image
                        source={require('C:/Users/User/WebstormProjects/reactNative/converterLaba/assets/ruler_size_width_icon.png')}
                        style={gStyle.image}
                    />
                    <Text style={gStyle.title}>Metre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}