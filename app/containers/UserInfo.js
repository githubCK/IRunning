'use strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    TouchableWithoutFeedback,
    StatusBar,
    Platform,
    BackAndroid,
} from 'react-native';

var widthSrc = Dimensions.get('window').width;
var heightSrc = Dimensions.get('window').height;
import PostDynamic from './PostDynamic';
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const { navigator } = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：' + routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为  
        }
        return false;//默认行为  
    };

    _backFunction() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    _postDynamic() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'PostDynamic',
                component: PostDynamic,
            });
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, height: heightSrc, width: widthSrc }}>
                <View style={{ width: widthSrc, height: 40, backgroundColor: '#453d4b' }}>
                    <TouchableOpacity onPress={() => this._backFunction()}>
                        <Image style={{ width: 35, height: 35, marginLeft: 10, marginTop: 10 }} source={require('../img/backicon.png')} resizeMode='center'></Image>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: '#453d4b', height: 240, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 70, height: 70, borderRadius: 70, marginTop: 20 }} source={require('../img/backicon.png')} resizeMode='center'></Image>
                        <Text style={{ color: '#FFFFFF', fontSize: 15 }}>NICKNAME</Text>
                        <Text style={{ color: '#D3D3D3', fontSize: 11, marginTop: 10 }}>上海,浦东新区</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#D3D3D3', fontSize: 12 }}>1 关注 </Text><Text style={{ color: '#D3D3D3', fontSize: 12, marginLeft: 10 }}>5 粉丝</Text>
                        </View>
                        <Image style={{ marginLeft: 300, width: 17, height: 17, marginTop: 5 }} source={require('../img/camera.png')} resizeMode='center'></Image>
                    </View>


                    <View style={{ width: widthSrc - 20, height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, marginRight: 0 }}>
                        <Text style={{ fontSize: 15 }}>训练</Text>
                        <View></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>665分钟</Text>
                            <Image style={{ width: 17, height: 17, marginLeft: 7 }} resizeMode='contain' source={require('image!jumpto')}  ></Image>
                        </View>
                    </View>

                    <View style={{ width: widthSrc, height: 0.3, backgroundColor: '#D2D2D2' }}></View>

                    <View style={{ width: widthSrc - 20, height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, marginRight: 0 }}>
                        <Text style={{ fontSize: 15 }}>徽章</Text>
                        <View></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>6</Text>
                            <Image style={{ width: 17, height: 17, marginLeft: 7 }} resizeMode='contain' source={require('image!jumpto')}  ></Image>
                        </View>
                    </View>

                    <View style={{ width: widthSrc, height: 10, backgroundColor: '#DaDaDa' }}></View>

                    <Text style={{ height: 45, fontSize: 15, width: widthSrc - 20, marginLeft: 15, marginTop: 10 }}>动态</Text>

                    <View style={{ height: 300, width: widthSrc, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginTop: 5 }} source={require('../img/dongtai.png')} resizeMode='center'></Image>
                        <Text style={{ color: '#C0C0C0' }}>还没有发布动态</Text>
                        <TouchableOpacity onPress={() => this._postDynamic()}>
                            <View style={{ flexDirection: 'row', width: 90, marginTop: 10, height: 35, backgroundColor: '#006400', justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../img/pen.png')} resizeMode='center'></Image>
                                <Text style={{ fontSize: 15, color: '#FFFFFF' }}>新动态 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}