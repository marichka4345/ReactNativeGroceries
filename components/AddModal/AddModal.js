import React from 'react';
import { Modal, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Link from "react-router-native/Link";

import Header from '../Header/Header';
import TextElement from '../TextElement/TextElement';

import {connect} from 'react-redux';
import {addItem} from '../../actions';

class AddModal extends React.Component {
    constructor () {
        super();
        this.state = {
            modalVisible: true,
            itemNameText: '',
            inputLengthLimit: 27
        };
    }

    render() {
        const maxInputLength = 27;
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <Header title='Add new list item'>
                        <TouchableOpacity>
                            <Link to="/edit">
                                <TextElement text='Cancel' />
                            </Link>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.addItem({
                                    type: 'home',
                                    name: this.state.itemNameText
                                });
                                this.props.history.push('/');
                            }
                            }
                        >
                            <TextElement text='Done' />
                        </TouchableOpacity>
                    </Header>
                    <View  style={{height: 200, padding: 22}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TextElement text='Add new list item' />
                            <TextInput
                                placeholder='Enter item name'
                                value={this.state.itemNameText}
                                maxLength={27}
                                onChangeText={(itemNameText) => this.setState({
                                    itemNameText,
                                    inputLengthLimit: maxInputLength - itemNameText.length
                                })}
                                style={{width: '100%', marginTop: 30, padding: 10}}
                            />
                            <View style={{alignSelf: 'flex-end', flex: 1, flexDirection: 'row'}}>
                                <TextElement text='Characters left ' />
                                <TextElement text={this.state.inputLengthLimit} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
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
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(AddModal);