import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {gStyle} from "../styles";
import Values from "./values";

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('0');
    const [fahrenheit, setFahrenheit] = useState('32.0');
    const [selectedOption, setSelectedOption] = useState('celsius');

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        const celsiusValue = parseFloat(value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        setFahrenheit(fahrenheitValue.toFixed(2));
    };

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        const fahrenheitValue = parseFloat(value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        setCelsius(celsiusValue.toFixed(2));
    };

    const handleClear = () => {
        setCelsius('0');
        setFahrenheit('32.0');
    };

    return (
        <View style={gStyle.container}>
            {/*<Text style={styles.label}>Выберите единицы измерения:</Text>*/}
            <View style={gStyle.Row}>
            {/*<Text style={styles.label}>Введите температуру:</Text>*/}
            <TextInput
                style={gStyle.input}
                keyboardType="phone-pad"
                placeholder="0"
                value={selectedOption === 'celsius' ? celsius : fahrenheit}
                onChangeText={(value) => {
                    if (selectedOption === 'celsius') {
                        handleCelsiusChange(value);
                    } else {
                        handleFahrenheitChange(value);
                    }
                }}
            />

                <SelectDropdown
                    buttonStyle={gStyle.select}
                    defaultValue={"°C"}
                    data={['°C', '°F']}
                    onSelect={(selectedItem, index) => {
                        setSelectedOption(index === 0 ? 'celsius' : 'fahrenheit');
                    }}
                />
            </View>

            <Values data={celsius} icon={"°C"} full={"Градусы Цельсия"}/>

            <Values data={fahrenheit} icon={"°F"} full={"Градусы Фаренгейта"}/>

            {/*<Button title="Очистить" onPress={handleClear} />*/}
        </View>
    );
};

export default TemperatureConverter;
