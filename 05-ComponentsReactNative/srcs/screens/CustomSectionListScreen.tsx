import React from 'react'
import { SectionList, Text } from 'react-native';
import { View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];


export const CustomSectionListScreen = () => {
    return (
        <View>
            <HeaderTitle title="Section List "/>
            <SectionList sections={casas} keyExtractor={(item, index)=> item + index} /* stickySectionHeadersEnabled */
             renderItem={({item})=><Text style={{marginLeft:20}}>{item}</Text>}
             renderSectionHeader={({section})=><Text style={{fontWeight:'bold', marginLeft:10}}>{section.casa}</Text>}
            />
        </View>
    )
}
