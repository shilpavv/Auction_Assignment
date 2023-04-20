import { proxy } from "valtio";
import { listType } from "../model";

interface StoreType{
    list: listType[];
    
}
export const listStore = proxy<StoreType>({
    list: [],
});