'use strict';

var React = require('react-native');
var EditAddressPage = require('./editAddressPage');

var {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Component,
    ScrollView
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    checkoutButton: {
        height: 36,
        //borderWidth: 1,
        borderColor: '#800000',
        backgroundColor: '#800000',
        borderRadius: 8,
        marginBottom: 5,
        marginRight: 25,
        marginLeft: 25,
        marginTop: 0,
        
        //Keeps text aligned
        justifyContent: 'center',
        shadowRadius: 4,
        shadowOpacity: 0.8,
        shadowColor: 'gray',
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
    },
    scroll: {
        //borderColor: 'pink',
        justifyContent: 'center',
        flex: 0.8
    },
    editButton: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    editButtonText: {
        padding: 5,
        color: 'blue'
    }
});

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingAddress: this.props.user.address,
            billingAddress: this.props.user.address
        }
    }

    goToChangeAddress(type) {
        this.props.toRoute({
            name: 'Edit',
            component: EditAddressPage,
            passProp: {
                type: type,
                shipping: this.state.shippingAddress,
                billing: this.state.billingAddress
            }
        })
    }

    render() {
        return (
            <View>
                <ScrollView contentContainerStyle = {styles.scroll}>
                    <Text>
                        Billing Address: {this.state.billingAddress}
                    </Text>
                    <TouchableHighlight
                        underlayColor = 'transparent'
                        onPress = {this.goToChangeAddress.bind(this, 'billing')}>
                        <Text style = {styles.editButton}>
                            Edit
                        </Text>
                    </TouchableHighlight>
                    <Text>
                        Shipping Address: {this.state.shippingAddress}
                    </Text>
                    <TouchableHighlight
                        underlayColor = 'transparent'
                        onPress = {this.goToChangeAddress.bind(this, 'shipping')}>
                        <Text style = {styles.editButton}>
                            Edit
                        </Text>
                    </TouchableHighlight>
                </ScrollView>
                <TouchableHighlight 
                    style = {styles.checkoutButton}>
                    <Text style = {styles.buttonText}> Checkout </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = CheckoutPage;