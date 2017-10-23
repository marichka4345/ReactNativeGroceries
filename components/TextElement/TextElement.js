import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class TextElement extends React.Component {
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    };

    render() {
        return (
            <Text
                ref={component => this._root = component}
                style={[styles.commonText, this.props.extraStyles]}>
                {this.props.text}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    commonText: {
        fontFamily: 'DINAlternate-Bold',
        color: '#2f2b2c'
    }
});