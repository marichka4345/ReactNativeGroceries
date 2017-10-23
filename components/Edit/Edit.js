import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Link from "react-router-native/Link";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TextElement from '../TextElement/TextElement';
import ProductList from '../ProductList/ProductList';

import { connect } from 'react-redux';
import {removeItem} from '../../actions';

class Edit extends React.Component {
    renderListHeader = () => {
        return (
            <Header title='Groceries'>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Link to="/add">
                        <Image source={require('../../assets/icons/add_icon.png')}/>
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link to="/">
                        <TextElement text='Done' />
                    </Link>
                </TouchableOpacity>
            </Header>
        );
    };
    render() {
        return (
            <View>
                <ProductList renderListHeader={this.renderListHeader} editable={true}/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        data: state.itemsData.data
    }
}

export default connect(mapStateToProps)
(Edit);