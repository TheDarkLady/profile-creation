export interface FormData {
    id: string;
    firstName: string;
    lastName : string; 
    email:string;
    password:string;
    confirmPassword?:string;
    department:string;
    designation:string;
}

export interface  User {
    name: string | null;
    email: string | null;
    profilePic:string | null;
}