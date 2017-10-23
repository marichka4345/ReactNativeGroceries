import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextElement from '../TextElement/TextElement';

export default class Header extends React.Component {
    render() {
        const children = React.Children.toArray(this.props.children);
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    {children[0]}
                    <TextElement
                        style={styles.headerTitle}
                        text={this.props.title}
                    />
                    {children[1]}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 128,
        paddingTop: 67,
        paddingBottom: 26,
        paddingRight: 32,
        paddingLeft: 32,
        backgroundColor: '#f8f9f9',
        borderBottomColor: '#b2b2b2',
        borderBottomWidth: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 34,
        textAlign: 'center'
    }
});