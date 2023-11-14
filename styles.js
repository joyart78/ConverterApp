import {Dimensions} from 'react-native';
import styleSheet from "react-native-web/dist/exports/StyleSheet";

const screenWidth = Dimensions.get('window').width;
const imageWidth = Math.floor(screenWidth / 2.5);

export const gStyle = styleSheet.create({
    main: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        margin: 5,
    },
    title: {
        // fontsize: 20,
        textAlign: 'center',
        padding: 10,
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 5,
    },
    select: {
        width: 100,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    Row: {
        flexDirection: "row",
        display: "flex",
        flexWrap: "wrap",
        margin: 5,
    },
    image: {
        height: Math.floor(imageWidth),
        width: Math.floor(imageWidth),
        margin: 5,
    },
})