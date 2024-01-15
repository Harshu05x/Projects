import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
import { toast } from "react-hot-toast";

export class AuthService  {
    client = new Client();
    account;

    constructor() {
        // creating client instance
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("653d30271e41cc94013d");

        // creating account instance
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}) {
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                // call login method
                toast.success("Account Created !!!")
                return this.login(email,password);
            }
            else{
                toast.error("Error creating account");
                return userAccount;
            }
        }
        catch(err){
            toast.error("Error: " + err.message);
            console.log("Error in Auth :: createAccount :: " + err.message);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            toast.error(error.message);
            console.log("Error in Auth :: login :: " + error.message);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (err) {
            console.log("Error in Auth :: getCurrentUser :: " + err.message);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            console.log("Error in Auth :: logout :: " + err.message);
        }
    }
}

const authService = new AuthService();

export default authService;