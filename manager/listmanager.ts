
import { listService} from "../service/listService";
import { listStore } from "../store";

export class ListManager{
    static getAll=async () => {
        await listService.getAll();        
    };
}