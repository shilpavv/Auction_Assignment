import { proxy } from "valtio";
import { listType } from "../model";

interface StoreType{
    list: listType[];
    isLoading:boolean;
    error:string
    
}
export const listStore = proxy<StoreType>({
    list: [],
    isLoading:false,
    error:'something went wrong'
});