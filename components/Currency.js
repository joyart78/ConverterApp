import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {gStyle} from "../styles";
import Values from "./values";

const CurrencyConverter = () => {
    const [usd, setUsd] = useState('0');
    const [gbp, setGbp] = useState('0');
    const [yen, setYen] = useState('0');
    const [chf, setChf] = useState('0');
    const [selectedOption, setSelectedOption] = useState('dollar');

    const handleDollarChange = (value) => {
        setUsd(value);
        const dollarValue = parseFloat(value);
        const poundValue = dollarValue * 0.80;
        const yenValue = dollarValue * 149.65;
        const francValue = dollarValue * 0.89;
        setGbp(poundValue.toFixed(2));
        setYen(yenValue.toFixed(2))
        setChf(francValue.toFixed(2))
    };

    const handlePoundChange = (value) => {
        setGbp(value);
        const poundValue = parseFloat(value);
        const dollarValue = poundValue * 1.25;
        const yenValue = poundValue * 186.44;
        const francValue = poundValue * 1.10;
        setUsd(poundValue.toFixed(2));
        setYen(yenValue.toFixed(2))
        setChf(francValue.toFixed(2))
    };

    const handleYenChange = (value) => {
        setYen(value);
        const yenValue = parseFloat(value);
        const poundValue = yenValue * 0.0054;
        const dollarValue = yenValue * 0.0067;
        const francValue = yenValue * 0.0059;
        setGbp(poundValue.toFixed(2));
        setUsd(dollarValue.toFixed(2))
        setChf(francValue.toFixed(2))
    };
    const handleFrancChange = (value) => {
        setChf(value);
        const francValue = parseFloat(value);
        const poundValue = francValue * 0.91;
        const yenValue = francValue * 168.96;
        const dollarValue = francValue * 1.13;
        setGbp(poundValue.toFixed(2));
        setYen(yenValue.toFixed(2))
        setUsd(dollarValue.toFixed(2))
    };

    return (
        <View style={gStyle.container}>
            <View style={gStyle.Row}>
                <TextInput
                    style={gStyle.input}
                    keyboardType="phone-pad"
                    placeholder="0"
                    value={selectedOption === 'dollar' ? usd :
                        selectedOption === 'pound' ? gbp :
                        selectedOption === 'yen' ?    yen : chf}
                    onChangeText={(value) => {
                        if (selectedOption === 'dollar') {
                            handleDollarChange(value);
                        } else if (selectedOption === 'pound'){
                            handlePoundChange(value);
                        }
                        else if (selectedOption === 'yen'){
                            handleYenChange(value);
                        }
                        else {
                            handleFrancChange(value);
                        }
                    }}
                />
                <SelectDropdown
                    buttonStyle={gStyle.select}
                    defaultValue={"usd"}
                    data={['usd', 'gbp', 'yen', 'chf']}
                    onSelect={(selectedItem, index) => {
                        setSelectedOption(index === 0 ? 'usd' :
                        index === 1 ?  'gbp':
                        index === 2 ? 'yen' : 'chf' );
                    }}
                />
            </View>

            <Values data={usd} icon={"usd"} full={"Dollar"}/>
            <Values data={gbp} icon={"gbp"} full={"Pound"}/>
            <Values data={yen} icon={"yen"} full={"Yen"}/>
            <Values data={chf} icon={"chf"} full={"Franc"}/>
        </View>
    );
};

export default CurrencyConverter;
