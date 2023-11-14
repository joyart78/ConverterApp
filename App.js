import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import MainStack from "./navigate";
import {gStyle} from "./styles";

export default function App() {

  return (
    <View style={gStyle.main}>
      <MainStack/>
    </View>
  );
}

