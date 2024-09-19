import {StyleSheet, View, Image, Text} from 'react-native';
import React from "react";

const Customtextinput = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                   source={{ uri: "https://plus.unsplash.com/premium_photo-1726611746510-9772d3ad18bb?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}>
            </Image>

            <Text style={{ fontSize: 20, backgroundColor: "white", fontWeight: "bold", marginTop: 10 }}>
                EVERY REACT NATIVE APP
            </Text>

            <View style={{ marginTop: 20, alignItems: "center", marginBottom: 20 }}>
                <View style={{ backgroundColor: "white", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "green" }}>We did it again</Text>
                </View>

                <View style={{ backgroundColor: "white", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "green" }}>WAIT NOT TOO MUCH</Text>
                </View>

                <View style={{ backgroundColor: "white", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "green" }}>HAPPY WEEKEND</Text>
                </View>

                <View style={{ backgroundColor: "white", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "green" }}>LAST TEXT</Text>
                </View>

            </View>
        </View>

    )
}

export default Customtextinput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logo: {
        width: 100,
        height: 100,
    }
});