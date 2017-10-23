import React from 'react';
import {View, FlatList} from 'react-native';

import ProductItem from './components/ProductItem/ProductItem';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import {updateItem, removeItem} from '../../actions';

class ProductList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: this.props.data,
            filteredData: this.props.data,
            isFiltered: false
        };
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    backgroundColor: "#d5d6d6"
                }}
            />
        );
    };

    renderFooter = () => {
        return <Footer showAllItems={this.showAllItems} showCartItems={this.showCartItems} />;
    };
    showCartItems = () => {
        this.setState({
            filteredData: this.props.data.filter(item => item.type === 'cart'),
            isFiltered: true
        })
    };

    showAllItems = () => {
        this.setState({
            data: this.props.data,
            isFiltered: false
        });
    };

    updateData = (newType, title) => {
        this.props.updateData({title, newType});
    };

    removeItem = (name, type) => {
        this.props.removeItem({name, type});
    };

    render() {
        const keyExtractor = (item, index) => item.name;
        const renderItem = ({item}) => (
            <ProductItem
                type={item.type}
                title={item.name}
                updateData={this.updateData}
                removeItem={this.removeItem}
                editable={this.props.editable}
            />
        );
        const data = this.state.isFiltered ?
            this.state.filteredData :
            this.state.data;

        return (
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.props.renderListHeader}
                ListFooterComponent={this.renderFooter}
            />
        );
    }
}

function mapStateToProps (state) {
    return {
        data: state.itemsData.data
    }
}

function mapDispatchToProps (dispatch) {
    return {
        updateData: (item) => dispatch(updateItem(item)),
        removeItem: (item) => dispatch(removeItem(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)
(ProductList);