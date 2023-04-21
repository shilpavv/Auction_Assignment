import {useSnapshot} from 'valtio';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {ListManager} from '../manager/listmanager';
import {listStore} from '../store';
import {useEffect} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';


const Listitem = () => {
  const {list, isLoading} = useSnapshot(listStore);
  //console.log('list data', list);
  const loadList = async () => {
    await ListManager.getAll();
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
              {/* <TouchableOpacity style={styles.button}> */}
                {/* <Text><Icon name="arrow-right" size={20} color="black" /> </Text> */}
              {/* </TouchableOpacity> */}
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
    backgroundColor: 'yellow',
    padding:6,
    width:"10%",position: 'absolute', right: 5,
    bottom:2,
    
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    top: 15,
  },
  listItem: {
    backgroundColor: '#2f2f2f',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  itemCount: {
    color: 'yellow',
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Listitem;
