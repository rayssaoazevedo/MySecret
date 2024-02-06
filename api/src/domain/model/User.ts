export interface UserModel{
    userId:number;
    name:string | null;
    email:string;
    pictureUrl:string | null;
    password:string;
    createdAt:Date;
    updatedAt:Date;   

}