import React, {useState} from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            setData('hi hi hi')
        }, 4000);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={100}
                    progressBackgroundColor="#5856D6"
                    colors={["red","yellow","blue"]}
                    size={500}
                    title="Refresing"
                    titleColor="black"
                />
            }
        >
            <View>
                <HeaderTitle title="Pull to refresh"/>
                <Text>{data}</Text>
            </View>
        </ScrollView>
    )
}
