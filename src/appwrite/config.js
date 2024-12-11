import conf from "../config/conf";
import { Databases,Client,ID,Account,Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases ;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appWriteUrl).setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client); //stroage
    }

    async createPost({title, slug, content, featuredImage, status, userid }){
        try{
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid,

                }
            )
        }catch(error){
            throw error
        }
        
    }

    async updatePost(slug,{title,content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(error){
            throw error
        }
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )

            return true
        } catch (error) {
            console.log("AppWrite serive : : delete post :: error , error", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,

            )
        } catch (error) {
            throw error
        }
    }

    //file upload service 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            ) 
        } catch (error) {
            throw error
        }
    }

    // delete file 

    async deleteFile(fileId){
        try {
            return await this.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }


    //get file preview
    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }

}

const service = new Service()