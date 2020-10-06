import { Request, Response } from 'express';

export async function useCoordenate(req: Request, res: Response) {
    const mapUrl = await req.body.map
    const initialPositionX = mapUrl.indexOf('@') + 1
    const firstComa = mapUrl.indexOf(',')
    const secondComa = mapUrl.indexOf(',', firstComa + 1)
    const x = mapUrl.slice(initialPositionX, firstComa)
    const y = mapUrl.slice(firstComa + 1, secondComa)
    return res.json({
        x: x,
        y: y
    })
}