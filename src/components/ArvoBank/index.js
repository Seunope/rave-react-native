import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'

//Scrollable view Library
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class index extends Component {
    constructor(props) {
        super(props);

        this.closeRave = this.closeRave.bind(this);
    }

    closeRave() {
        this.props.onClose();
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                paddingHorizontal: 25,
                paddingBottom: 20,
                height: '100%'
            },
            label: {
                color: "#ACACAC"
            },
            text: {
                fontSize: 22,
                fontWeight: '700',
                paddingTop: 50,
                color: '#12122c'
            },
            text2: {
                fontSize: 20,
                color: '#12122c'
            },
            text3: {
                paddingTop: 70,
                color: 'gray'
            },
            text4: {
                fontSize: 22,
                fontWeight: '700',
                paddingTop: 10,
                color: '#12122c'
            },
        });
        let lockIcon, closeIcon;
        lockIcon = <Icon name="md-lock" style={{ color: "#d1d1d1", marginTop: 10, marginRight: 0 }} />;
        
        closeIcon = <Icon name='md-close-circle' style={{ color: '#d1d1d1', marginTop: 0, marginRight: 0 }} />;
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
                <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps='always'>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: "space-between" }}><Text style={{ fontSize: 13, fontWeight: '400' }}>{lockIcon} SECURED BY FLUTTERWAVE</Text>
                            <TouchableOpacity onPress={this.closeRave}>{closeIcon}</TouchableOpacity>
                        </View>
                        <Text style={styles.text}>Make direct payment to our</Text>
                        <Text style={{ fontSize: 32, fontWeight: '700', paddingTop: 10, color: '#12122c' }}> Bank Account! </Text>
                        <View style={{ borderBottomWidth: 4, marginTop: 30, marginRight: '50%', borderBottomColor: '#065373' }}></View>
                        <Text/>
                        <Text style={styles.text2}>Bank: Guaranty Trust Bank</Text>
                        <Text style={styles.text2}>Account Number: 0257605619</Text>
                        <Text style={styles.text2}>Account Name: OLIVER MEAD</Text>
                        <Text style={styles.text4}>Amount: {this.props.currency} {this.props.amount}</Text>
                        <Text  style={styles.text3} note>If you are using a different name to make payment, please notify us of your payment by sending a mail to hello@arvofinance.com</Text>
                    </View>
                </KeyboardAwareScrollView>
            </KeyboardAvoidingView>
        )
    }
}