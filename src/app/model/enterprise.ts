import { Activity } from "../enums/Activity";
import { Product } from "./Product";
import { Provider } from "./Provider";


export interface Enterprise{


    enterpriseId : number;
    enterpriseName :string;
    enterpriseDescription : string;
    enterpriseLogo : string;
    activity : Activity;
    phoneNumber : string;
    email:string

    provider : Provider;
    products : Product[];
}