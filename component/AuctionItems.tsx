import {useSnapshot} from 'valtio';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {AuctiontManager} from '../manager/AuctionManager';
import {listStore} from '../store';
import {useEffect} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

const Auctionitem = () => {
  const {list, isLoading} = useSnapshot(listStore);
  //console.log('list data', list);
  const loadList = async () => {
    await AuctiontManager.getAll();
  };
  useEffect(() => {
    loadList();
  }, []);
  return (
    <View>
      <Text style={styles.heading}>Upcoming Auctions</Text>
      {isLoading ? (
        <Text>loading....</Text>
      ) : (
        <FlatList
          data={list}
          keyExtractor={auctionItem => auctionItem.id.toString()}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.title}</Text>
              <Text style={styles.itemCount}>({item.itemCount} items)</Text>
              <TouchableOpacity style={styles.button}>
                <ArrowRightIcon color="black" size={30}  style={{ marginLeft: 5 }}/>
              </TouchableOpacity>
            </View>
          )}
        />
        
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffcd00',
    padding: 6,
    width: '10%',
    position: 'absolute',
    right: 5,
    top: 30,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    position: 'relative',
    top: 15,
  },
  listItem: {
    backgroundColor: '#2f2f2f',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 8,
  },
  itemCount: {
    color: '#ffcd00',
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Auctionitem;
