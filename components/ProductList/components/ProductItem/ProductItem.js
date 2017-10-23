import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import TextElement from '../../../TextElement/TextElement';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        const {type} = props;
        this.state = {
            type
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.type !== this.state.type) {
            this.props.updateData(nextState.type, this.props.title);
        }
    }

    onSwipeLeft(gestureState) {
        if(this.state.type === 'home') this.setState({type: 'cart'});
    }

    onSwipeRight(gestureState) {
        if(this.state.type === 'cart') this.setState({type: 'home'});
    }

    defineItemStyle = () => {
        const {type} = this.state;
        if (type === 'home'){
            return {
                flexDirection: 'row'
            }
        } else if (type === 'cart') {
            return {
                flexDirection: 'row-reverse'
            }
        }
    };
    defineIconStyle = () => {
        const {type} = this.state;
        if (type === 'home'){
            return {
                borderLeftWidth: 5
            }
        } else if (type === 'cart') {
            return {
                borderRightWidth: 5
            }
        }
    };

    render() {
        const {title} = this.props;
        const source = this.state.type === 'home' ?
            require('../../../../assets/icons/home_icon.png') :
            require('../../../../assets/icons/cart_icon.png');
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80
        };
        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={styles.productItemContainer}
            >
                <View style={[this.defineItemStyle(),styles.productItem]}>
                    {this.props.editable ? (
                            <TouchableOpacity
                                onPress={() => this.props.removeItem({
                                        name: this.props.title, type: this.state.type
                                    })
                                }
                                style={styles.closeButton}
                            >
                                <Image source={require('../../../../assets/icons/close_icon.png')}/>
                            </TouchableOpacity>) : null}
                    <TextElement text={title} />
                    <TouchableOpacity
                        onPress={() => {}}
                        style={[this.defineIconStyle(), styles.itemIcon]}
                    >
                        <Image source={source} />
                    </TouchableOpacity>
                </View>
            </GestureRecognizer>
        );
    }
}

const styles = StyleSheet.create({
    productItemContainer: {
        height: 100,
        position: 'relative'
    },
    productItem: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 50
    },
    itemIcon: {
        backgroundColor: '#e6e7e8',
        paddingRight: 21,
        paddingLeft: 21,
        paddingTop: 31,
        paddingBottom: 31,
        borderColor: '#dddedf',
    },
    closeIcon: {
        position: 'absolute',
        left: 0
    }
});
