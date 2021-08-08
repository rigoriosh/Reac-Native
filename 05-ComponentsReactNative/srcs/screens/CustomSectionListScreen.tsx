import React from 'react'
import { SectionList, Text } from 'react-native';
import { View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

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
            
            <SectionList 
              keyExtractor={(item, index)=> item + index}
              stickySectionHeadersEnabled
              ListHeaderComponent={()=><HeaderTitle title="Section List "/>}
              ListFooterComponent={()=><HeaderTitle title={"Total casas " + casas.length}/>}
              renderSectionHeader={({section})=><Text style={{fontWeight:'bold', marginLeft:10, fontSize:20}}>{section.casa}</Text>}
              renderSectionFooter={({section})=>(
                <HeaderTitle title={"Total: " + section.data.length}/>
              )}
              sections={casas}
              renderItem={({item})=><Text style={{marginLeft:20}}>{item}</Text>}
              SectionSeparatorComponent={()=><ItemSeparator/>}
              /* ItemSeparatorComponent={()=><ItemSeparator/>} */
              showsVerticalScrollIndicator={false }
            />
        </View>
    )
}
