import { Activity } from "../enums/Activity";

export interface EnterpriseDto{


    enterpriseId : number;
    enterpriseName :string;
    enterpriseDescription : string;
    enterpriseLogo : string;
    activity : Activity;


}