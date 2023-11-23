import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {gStyle} from "../styles";
import Values from "./values";

const WeightConverter = () => {
    const [kg, setKg] = useState('0');
    const [ct, setCt] = useState('0');
    const [lb, setLb] = useState('0');
    const [oz, setOz] = useState('0');
    const [selectedOption, setSelectedOption] = useState('kg');

    const handleKgChange = (value) => {
        setKg(value);
        const kgValue = parseFloat(value);
        const ctValue = kgValue * 5000;
        const lbValue = kgValue * 2.20462;
        const ozValue = kgValue * 35.274;
        setCt(ctValue.toFixed(2));
        setLb(lbValue.toFixed(2))
        setOz(ozValue.toFixed(2))
    };

    const handleCtChange = (value) => {
        setCt(value);
        const ctValue = parseFloat(value);
        const kgValue = ctValue * 0.0002;
        const lbValue = ctValue * 0.000440925;
        const ozValue = ctValue * 0.00705479;
        setKg(kgValue.toFixed(2));
        setLb(lbValue.toFixed(2))
        setOz(ozValue.toFixed(2))
    };

    const handleLbChange = (value) => {
        setLb(value);
        const lbValue = parseFloat(value);
        const ctValue = lbValue * 2267.96;
        const kgValue = lbValue * 0.453592;
        const ozValue = lbValue * 0.0625;
        setCt(ctValue.toFixed(2));
        setKg(kgValue.toFixed(2))
        setOz(ozValue.toFixed(2))
    };
    const handleOzChange = (value) => {
        setOz(value);
        const ozValue = parseFloat(value);
        const ctValue = ozValue * 141.748;
        const lbValue = ozValue * 0.0625;
        const kgValue = ozValue * 35.274;
        setCt(ctValue.toFixed(2));
        setLb(lbValue.toFixed(2))
        setKg(kgValue.toFixed(2))
    };

    return (
        <View style={gStyle.container}>
            <View style={gStyle.Row}>
                <TextInput
                    style={gStyle.input}
                    keyboardType="phone-pad"
                    placeholder="0"
                    value={selectedOption === 'kg' ? kg :
                        selectedOption === 'ct' ? ct :
                            selectedOption === 'lb' ?    lb : oz}
                    onChangeText={(value) => {
                        if (selectedOption === 'kg') {
                            handleKgChange(value);
                        } else if (selectedOption === 'ct'){
                            handleCtChange(value);
                        }
                        else if (selectedOption === 'lb'){
                            handleLbChange(value);
                        }
                        else {
                            handleOzChange(value);
                        }
                    }}
                />
                <SelectDropdown
                    buttonStyle={gStyle.select}
                    defaultValue={"kg"}
                    data={['kg', 'ct', 'lb', 'oz']}
                    onSelect={(selectedItem, index) => {
                        setSelectedOption(index === 0 ? 'kg' :
                            index === 1 ?  'ct':
                                index === 2 ? 'lb' : 'oz' );
                    }}
                />
            </View>

            <Values data={kg} icon={"kg"} full={"Килограмм"}/>
            <Values data={ct} icon={"ct"} full={"Карат"}/>
            <Values data={lb} icon={"lb"} full={"Фунт"}/>
            <Values data={oz} icon={"oz"} full={"Унция"}/>
        </View>
    );
};

export default WeightConverter;
