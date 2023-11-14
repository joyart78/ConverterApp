import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {gStyle} from "../styles";
import Values from "./values";

const TemperatureConverter = () => {
    // const [Sin, setSin] = useState('0');
    // const [degrees, setDegrees] = useState('0');
    // const [Cos, setCos] = useState('0');
    // const [selectedOption, setSelectedOption] = useState('angle');
    //
    // const handleSinChange = (value) => {
    //     setSin(value);
    //     const sinValue = parseFloat(value);
    //     const cosValue = sinValue * 3.28084;
    //     setSin(cosValue.toFixed(2));
    // };
    //
    // const handleCosChange = (value) => {
    //     setFoot(value);
    //     const footValue = parseFloat(value);
    //     const meterValue = ( footValue / 3.28084);
    //     setMeter(meterValue.toFixed(2));
    // };
    // const handleDegChange = (value) => {
    //     setFoot(value);
    //     const footValue = parseFloat(value);
    //     const meterValue = ( footValue / 3.28084);
    //     setMeter(meterValue.toFixed(2));
    // };
    //
    // const handleClear = () => {
    //     setDegrees('0');
    //     setSin('0');
    //     setCos('0');
    // };

    const [selectedOption, setSelectedOption] = useState('Deg');
    const [angle, setAngle] = useState('0');

    const handleInputChange = (value) => {
        setAngle(value);
    };

    const handleOptionChange = (selectedItem, index) => {
        setSelectedOption(selectedItem);
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
                    value={angle}
                    onChangeText={handleInputChange}
                />
                <SelectDropdown
                    buttonStyle={gStyle.select}
                    defaultValue="Deg"
                    data={['Sin', 'Cos', 'Deg']}
                    onSelect={handleOptionChange}
                />
            </View>

            <Values data={meter} icon={"М"} full={"Метры"}/>
            <Values data={foot} icon={"F"} full={"Футы"}/>
            <Values data={foot} icon={"F"} full={"Футы"}/>

            {/*<Button title="Очистить" onPress={handleClear} />*/}
        </View>
    );
};

export default TemperatureConverter;
