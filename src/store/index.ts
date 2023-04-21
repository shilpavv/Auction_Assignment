import { proxy } from "valtio";
import { listType } from "../model";

interface StoreType{
    list:listType[];
    isLoading:boolean;
    error: string | null;  
}
export const listStore = proxy<StoreType>({
    list: [],
    isLoading:false,
    error: null,
});