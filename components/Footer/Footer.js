import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export  default class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    onPress={this.props.showAllItems}
                    style={styles.footerIcon}>
                    <Image source={require('../../assets/icons/list_icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.props.showCartItems}
                    style={styles.footerIcon}>
                    <Image source={require('../../assets/icons/cart_icon2.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 21,
        paddingBottom: 21,
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1
    },
    footerIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});