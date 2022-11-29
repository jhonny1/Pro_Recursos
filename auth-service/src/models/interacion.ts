import { Schema, model,Types } from 'mongoose'

const Interactions = new Schema({
    titulo: {
     type: String,
     required: true,
     
    },
    telefono: {
      required: true,
       type: Number,
       
      },
    demandante: {
    required: true,
     type: String,
     
    },
    Observacion: {
        type: String,
        required: true,
         trim: true
       },
     email: {
        type: String,
        required: true,
       },
    createdBy: {
     type: Types.ObjectId, 
     ref:'User'
    },
    isActive: {
     type: Boolean,
     require: true,
     default:true
    },

   })

const Interacion2 = model('Interacion', Interactions)

export default Interacion2