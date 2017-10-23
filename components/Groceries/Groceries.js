import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Link from "react-router-native/Link";

import ProductList from '../../components/ProductList/ProductList';
import Header from '../Header/Header';

import {Font} from 'expo';

export default class Groceries extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            'DINAlternate-Bold': require('../../assets/fonts/DINAlternate-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    renderListHeader = () => {
        return (
            <Header title='Groceries'>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Image source={require('../../assets/icons/settings_icon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Link to="/edit">
                        <Image source={require('../../assets/icons/edit_icon.png')}/>
                    </Link>
                </TouchableOpacity>
            </Header>
        );
    };
    render() {
        return (
            <View style={{flex: 1}}>
                {(this.state.fontLoaded) ? (
                    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'space-between'}}>
                        <ProductList renderListHeader={this.renderListHeader}/>
                    </View>) : null
                }
            </View>
        );
    }
}