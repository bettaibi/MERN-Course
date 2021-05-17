import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

interface PagintionShape {
    result: any[];
    nextPage?: number;
    previousPage?: number;
    records: number;
}

export const getPaginatedData = (model: mongoose.Model<any>) => {
    try{
        return async (req: Request, res: Response, next: NextFunction) => {
            const records = await model.countDocuments().exec();
            const page = +(req.query.page || 0);
            const limit  = +(req.query.limit || 0);
        
            const startingIndex = (page - 1) * limit;
            const endingIndex = page * limit;
        
            const results: PagintionShape ={result: await model.find().skip(startingIndex).limit(limit), records};
        
            if(endingIndex < records){
                results.nextPage = page +1;
            }
            if (startingIndex > 1){
                results.previousPage = page - 1; 
            }

            res.locals.posts = results;
            next();
        }
    }
    catch(err){
        throw err;
    }
}