import { Router,Response, Request} from "express";
import {  BadRequestError } from '@angelgoezg/common';
import 'express-async-errors';
import { auth } from '../middlewares/auth';

import  Interacion2  from '../models/interacion';


const interactionRouter = Router()


interactionRouter.post('/',auth, async (req: Request, res:Response) => {
    try {
        const interaction = new Interacion2({...req.body, createdBy: req.user?._id})
        await interaction.save()
        res.status(201).send({interaction})
    } catch (error:any) {
      throw new BadRequestError(error.message)  
    }
})

interactionRouter.get('/', auth,async (req: Request, res:Response) => {
    try {
      const interaction = await Interacion2.find().populate('createdBy', 'name username email')
        res.send({interaction})
    } catch (error:any) {
      throw new BadRequestError(error.message)  
    }
})



export { interactionRouter }