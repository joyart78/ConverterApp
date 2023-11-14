import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {gStyle} from "../styles";
import Values from "./values";

const TemperatureConverter = () => {
    const [meter, setMeter] = useState('0');
    const [foot, setFoot] = useState('0');
    const [selectedOption, setSelectedOption] = useState('meter');

    const handleMeterChange = (value) => {
        setMeter(value);
        const meterValue = parseFloat(value);
        const footValue = meterValue * 3.28084;
        setFoot(footValue.toFixed(2));
    };

    const handleFootChange = (value) => {
        setFoot(value);
        const footValue = parseFloat(value);
        const meterValue = ( footValue / 3.28084);
        setMeter(meterValue.toFixed(2));
    };

    const handleClear = () => {
        setMeter('0');
        setFoot('0');
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
                    value={selectedOption === 'meter' ? meter : foot}
                    onChangeText={(value) => {
                        if (selectedOption === 'meter') {
                            handleMeterChange(value);
                        } else {
                            handleFootChange(value);
                        }
                    }}
                />
                <SelectDropdown
                    buttonStyle={gStyle.select}
                    defaultValue={"M"}
                    data={['M', 'F']}
                    onSelect={(selectedItem, index) => {
                        setSelectedOption(index === 0 ? 'meter' : 'foot');
                    }}
                />
            </View>

            <Values data={meter} icon={"М"} full={"Метры"}/>
            <Values data={foot} icon={"F"} full={"Футы"}/>

            {/*<Button title="Очистить" onPress={handleClear} />*/}
        </View>
    );
};

export default TemperatureConverter;
