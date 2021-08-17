import { Request, Response, NextFunction } from 'express';
import { AxiosResponse } from 'axios';
import Connection from '../Model/connection';
import IPost from '../interface/Post';

class PostController{
    static async getPosts(req: Request, res: Response, next: NextFunction){
        let result: AxiosResponse = await Connection.getDB().get('/posts');
        // get some posts
        let posts: [IPost] = result.data;
        return res.status(200).json({
            message: posts
        });
    }

    static async getPost(req: Request, res: Response, next: NextFunction){
        // get the post id from the req
        let id: string = req.params.id;
        // get the post
        let result: AxiosResponse = await Connection.getDB().get(`/posts/${id}`);
        let post: IPost = result.data;
        return res.status(200).json({
            message: post
        });
    }

    static async updatePost(req: Request, res: Response, next: NextFunction){
        // get the post id from the req.params
        let id: string = req.params.id;
        // get the data from req.body
        let title: string = req.body.title ?? null;
        let body: string = req.body.body ?? null;
        // update the post
        let response: AxiosResponse = await Connection.getDB().put(`/posts/${id}`, {
            ...(title && { title }),
            ...(body && { body })
        })

        // return response
        return res.status(200).json({
            message: response.data
        });
    }

    static async deletePost(req: Request, res: Response, next: NextFunction){
        // get the post id from req.params
        let id: string = req.params.id;
        // delete the post
        let response: AxiosResponse = await Connection.getDB().delete(`/posts/${id}`);
        // return response
        return res.status(200).json({
            message: 'post deleted successfully'
        });
    }

    static async addPost(req: Request, res: Response, next: NextFunction){
        // get the data from req.body
        let title: string = req.body.title;
        let body: string = req.body.body;
        // add the post
        let response: AxiosResponse = await Connection.getDB().post(`/posts`, {
            title,
            body
        });
        // return response
        return res.status(200).json({
            message: response.data
        });
    }
}

export = PostController;