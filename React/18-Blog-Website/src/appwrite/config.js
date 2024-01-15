import conf from "../conf/conf"
import { Client, Databases, Storage, Query, ID} from "appwrite";


export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("653d30271e41cc94013d");
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost( {title,slug,content,featuredImage,status,userId} ){
        try {
            return await this.databases.createDocument(
                "653d31239604c72e5561",
                "653d316126522d47a61f",
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (err) {
            console.log("Error in config :: createPost :: " + err.message);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status} ) {
        try {
            return await this.databases.updateDocument(
                "653d31239604c72e5561",
                "653d316126522d47a61f",
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (err) {
            console.log("Error in config :: updatePost :: " + err.message);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                "653d31239604c72e5561",
                "653d316126522d47a61f",
                slug
            )
            return true;
        } catch (err) {
            console.log("Error in config :: deletePost :: " + err.message);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                "653d31239604c72e5561",
                "653d316126522d47a61f",
                slug
            )
        } catch (err) {
            console.log("Error in config :: getPost :: " + err.message);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                "653d31239604c72e5561",
                "653d316126522d47a61f",
                queries,
            )
        
        } catch (err) {
            console.log("Error in config :: getposts :: " + err.message);
            return false;
        }
    }

    async uplaodFile(file){
        try {
            return await this.bucket.createFile(
                "653de4403cf59ff97df9",
                ID.unique(),
                file
            )
        } catch (err) {
            console.log("Error in config :: uploadFile :: " + err.message);
            return false;
        }
    }

    async deleteFile(id){
        try {
            await this.bucket.deleteFile(
                "653de4403cf59ff97df9",
                id
            )
            return true;
        } catch (err) {
            console.log("Error in config :: deleteFile :: " + err.message);
            return false;
        }
    }

    getFilePreview(fileId){
        fileId = String(fileId);

        return this.bucket.getFilePreview(
            "653de4403cf59ff97df9",
            fileId
        )
    }
}


const databaseService = new DatabaseService();

export default databaseService;