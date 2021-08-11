import React, { useState } from 'react'
import { View, SafeAreaView, ImageSourcePropType, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';

const {height: screenHeight, width:screenWidth} = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any>{}

export const SlideScreen = ({navigation}:Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const {fadeIn, opacity} = useAnimation();
    return (
        <SafeAreaView style={{
            flex:1, backgroundColor:'red', paddingTop:50
        }}>
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({item})=>renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={(index)=>{
                setActiveIndex(index);
                if(index === 2)fadeIn()
              }}
              
            />
            <View style={{/* backgroundColor:'green', */ flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <Pagination 
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    // dotColor='#5856D6'
                    dotStyle={{width:20, height:20, borderRadius:50, backgroundColor:'#5856D6'}}
                />
                {
                    activeIndex === 2 &&
                    <Animated.View style={{opacity}}>
                        <TouchableOpacity 
                            style={{flexDirection:'row', backgroundColor:'#5856D6', width:150, height:50, borderRadius:10, paddingLeft:10, justifyContent:'center', alignItems:'center',
                                
                            }}
                            activeOpacity={0.5}
                            onPress={()=>navigation.navigate('HomeScreen')}
                        >
                            <Text style={{fontSize:25, color:'white'}}>{'Retornar'}</Text>
                            <Icon name="chevron-forward-outline" color='white' size={40}/>
                        </TouchableOpacity>

                    </Animated.View>
                }
            </View>
        </SafeAreaView>
    )
}
function renderItem(item: Slide): (React.ReactElement<any, string | React.JSXElementConstructor<any>> & (boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | undefined)) | null {
    return <View style={{flex:1, backgroundColor:'white', borderRadius:5, padding:40, justifyContent:'center'}}>
        <Image 
            source={item.img}
            style={{width:350, height:400, resizeMode:'center'}}
        />
        <Text style={styles.tittle}>{item.title}</Text>
        <Text style={styles.subTittle}>{item.desc}</Text>
    </View>;
}

const styles = StyleSheet.create({
    tittle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#5856D6'
    },
    subTittle:{
        fontSize:16
    }
})