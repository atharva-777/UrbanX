import { CorsOptions } from "cors";

export const corsOptions:CorsOptions = {
    origin:'http://localhost:3000',
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials: true, 
    optionsSuccessStatus:200
}