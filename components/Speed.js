import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {gStyle} from "../styles";
import Values from "./values";

const TemperatureConverter = () => {
    const [kph, setKph] = useState('0');
    const [mph, setMph] = useState('0');
    const [selectedOption, setSelectedOption] = useState('kph');

    const handleCelsiusChange = (value) => {
        setKph(value);
        const kphValue = parseFloat(value);
        const mphValue = kphValue * 0.6213712 ;
        setMph(mphValue.toFixed(2));
    };

    const handleFahrenheitChange = (value) => {
        setMph(value);
        const mphValue = parseFloat(value);
        const kphValue = mphValue * 1.609344;
        setKph(kphValue.toFixed(2));
    };

    return (
        <View style={gStyle.container}>
            <View style={gStyle.Row}>
                <TextInput
                    style={gStyle.input}
                    keyboardType="phone-pad"
                    placeholder="0"
                    value={selectedOption === 'kph' ? kph : mph}
                    onChangeText={(value) => {
                        if (selectedOption === 'kph') {
                            handleCelsiusChange(value);
                        } else {
                            handleFahrenheitChange(value);
                        }
                    }}
                />

                <SelectDropdown
                    buttonStyle={gStyle.select}
                    defaultValue={"kph"}
                    data={['kph', 'mph']}
                    onSelect={(selectedItem, index) => {
                        setSelectedOption(index === 0 ? 'kph' : 'mph');
                    }}
                />
            </View>

            <Values data={kph} icon={"kph"} full={"Километры в час"}/>

            <Values data={mph} icon={"mph"} full={"Мили в час"}/>


        </View>
    );
};

export default TemperatureConverter;
