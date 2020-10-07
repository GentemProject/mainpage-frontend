import { Response } from 'express';

export async function useCoordenate(map: string, res: Response) {
  const mapUrl = await map;
  const initialPositionX = mapUrl.indexOf('@') + 1;
  const firstComa = mapUrl.indexOf(',');
  const secondComa = mapUrl.indexOf(',', firstComa + 1);
  const x = mapUrl.slice(initialPositionX, firstComa);
  const y = mapUrl.slice(firstComa + 1, secondComa);
  return {
    x: x,
    y: y,
  };
}
