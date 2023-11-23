import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
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
            <View style={gStyle.Row}>
            <TouchableOpacity onPress={() => navigation.navigate('Currency')}>
                <Image
                    source={require('C:/Users/User/WebstormProjects/reactNative/converterLaba/assets/money_exchange_cash_currency_icon.png')}
                    style={gStyle.image}
                />
                <Text style={gStyle.title}>Currency</Text>
            </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Weight')}>
                    <Image
                        source={require('C:/Users/User/WebstormProjects/reactNative/converterLaba/assets/scale_infographic_data_measure_element_icon.png')}
                        style={gStyle.image}
                    />
                    <Text style={gStyle.title}>Weight</Text>
                </TouchableOpacity>
            </View>
            <View style={gStyle.Row}>
                <TouchableOpacity onPress={() => navigation.navigate('Speed')}>
                    <Image
                        source={require('C:/Users/User/WebstormProjects/reactNative/converterLaba/assets/speedometer_icon.png')}
                        style={gStyle.image}
                    />
                    <Text style={gStyle.title}>Speed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}