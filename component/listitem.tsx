import {useSnapshot} from 'valtio';
import {StyleSheet, Text, View} from 'react-native';
import {ListManager} from '../manager/listmanager';
import {listStore} from '../store';
import {useEffect} from 'react';
const Listitem = () => {
  const {list, isLoading} = useSnapshot(listStore);
  //   console.log('list data', list);
  const loadList = async () => {
    await ListManager.getAll();
  };
  useEffect(() => {
    loadList();
  }, []);
  return (
    <View>
      <Text style={styles.heading}>Action List</Text>
      {isLoading ? (
        <Text>loading....</Text>
      ) : (
        <View >
          {list &&
            list.length > 0 &&
            list.map((auctionItem, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.listItemText}>{auctionItem.title}</Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: '#2f2f2f',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
   
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  },
});
export default Listitem;
