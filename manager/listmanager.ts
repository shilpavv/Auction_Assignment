import { listService} from "../service/listService";

export class ListManager{
    static getAll=async () => {
        await listService.getAll();        
    };
}