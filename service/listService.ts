import axios from "axios";
import { listType } from "../model";
export class listService {
  static getAll = async () => {
    const response = await axios.get<listType[]>(
      "https://www.bigiron.com/api/app/auctions?includeOtherAuction=true&itemsPerPage=20"
    );
    return response.data;
  };
}

