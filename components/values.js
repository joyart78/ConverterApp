import {StyleSheet, Text, View} from "react-native";


const Values = (props) => {
    const {data, icon, full} = props;

    return (
    <View style={styles.container}>
        <Text style={styles.items}>{data}</Text>
        <Text style={styles.items}>{icon}</Text>
        <Text style={styles.items}>{full}</Text>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#CCCCFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
    items: {
        width: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 4,
    }
});

export default Values;