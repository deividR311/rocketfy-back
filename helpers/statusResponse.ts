import { Response } from "express";


export const statusResponse = (code: number, message: string, res: Response, response: any, status: string) => {
    return res.status(code).json({
        status: status,
        message: message,
        response: response
    })
}