import axios from 'axios';
import {listType} from '../model';
import {listStore} from '../store';
export class listService {
  static getAll = async () => {
    try {
      listStore.isLoading = true;
      const response = await axios.get(
        'https://www.bigiron.com/api/app/auctions?includeOtherAuction=true&itemsPerPage=20',
      );
    //   console.log('response.data', response.data.response.allUpcomingAuctions);
      if ( response.data && response.data.response &&response.data.response.allUpcomingAuctions
      ) {
        listStore.list = response.data.response.allUpcomingAuctions;
      } else {
        listStore.error = 'Something wrong';
      }
      listStore.isLoading = false;
    } catch (error) {
      console.log('I AM ERROR', error);
      listStore.isLoading = false;
    //   return [];
    }
  };
}
