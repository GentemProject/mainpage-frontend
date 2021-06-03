import { useEffect, useState } from 'react';

function useLocation(props: any) {
  const [coord, setCoord] = useState({
    y: '',
    x: '',
    zoom: 1,
  });
  const [url, setUrl] = useState<any>();

  useEffect(() => {
    setUrl(props);
    if (url === undefined) {
      setCoord({ y: '-26.231718', x: '-63.2485696', zoom: 0 });
    } else if (url !== undefined) {
      const cadena = url.indexOf('@');
      const cortado = url.slice(cadena + 1);
      const coma = cortado.indexOf(',');
      const ygriega = cortado.slice(0, coma);
      const cadena2: number = ygriega.length;
      const corta2 = url.slice(cadena2 + cadena + 2);
      const equis = corta2.slice(0, coma);
      setCoord({ y: ygriega, x: equis, zoom: 12 });
    }
  }, [props, url, coord.y, coord.x]);

  return { props: { ygriega: coord.y, equis: coord.x, zoom: coord.zoom } };
}

export default useLocation;
