
import { listService} from "../service/listService";
import { listStore } from "../store";

export class ListManager{
    static getAll=async () => {
        const lists=await listService.getAll();
        listStore.list=lists;
        
    };
}