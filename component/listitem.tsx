import {useSnapshot} from 'valtio';
import {Text, View} from 'react-native';
import {ListManager} from '../manager/listmanager';
import {listStore} from '../store';
import {useEffect, useState} from 'react';
import List from './list';
const Listitem = () => {
  const {list} = useSnapshot(listStore);
  const [auctionList,setAuctionList] = useState<any>([])
  console.log('list data', list);
  const loadList = async () => {
    await ListManager.getAll();
  };
  useEffect(() => {
    loadList();
    setAuctionList(list)
  }, []);
  return (
    <View>
        <Text>helooooo</Text>
        {
            auctionList && auctionList.map((item:any)=>{
                console.log('TEST',item);
                
                return(
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )
            })
        }
        <Text>test</Text>
      
    </View>
  );
};
export default Listitem;
