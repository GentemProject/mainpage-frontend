import { Response } from 'express';

export async function useCoordenate(map: string, res: Response) {
  const mapUrl = await map;
  const initialPositionX = mapUrl.indexOf('@') + 1;
  const firstComa = mapUrl.indexOf(',', initialPositionX);
  const secondComa = mapUrl.indexOf(',', firstComa + 1);
  const y = mapUrl.slice(initialPositionX, firstComa);
  const x = mapUrl.slice(firstComa + 1, secondComa);
  return {
    x: x,
    y: y,
  };
}
