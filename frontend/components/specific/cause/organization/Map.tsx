import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

import style from './organization.module.scss'

function Map(props: any) {
  const { location } = props
  const [coordenates, setCoordenates] = useState({
    y: -26.231718,
    x: -63.2485696,
  })
  const [zoom, setZoom] = useState(1)
  useEffect(() => {
    if (location.coordenates) {
      setCoordenates({
        x: location.coordenates.x,
        y: location.coordenates.y,
      })
      console.log('ndeaa')
      setZoom(12)
    }
  }, [location])

  return (
    <div className={style.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAQyrX0Pjjnrlz--nYA-UapCAragOrRdtw',
        }}
        defaultCenter={{ lat: coordenates.y, lng: coordenates.x }}
        defaultZoom={zoom}
        options={{ styles: styles }}
      >
        {props.location && (
          <Marcador
            location={props.location}
            lat={coordenates.y}
            lng={coordenates.x}
            name="My Marker"
            color="blue"
          />
        )}
      </GoogleMapReact>
    </div>
  )
}

export default Map

export function Marcador(props: any) {
  const { color, name, location } = props

  return (
    <>
      <div
        className={style.marker}
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className={style.mapInfo}>
        <div className={style.marker}>
          <div className={style.markerFill}></div>
          <div className={style.markerFillFill}></div>
        </div>
        <div className={style.address}>
          <div className={style.textContainer}>
            <div /* className={style.textContainerCity} */>
              {location && `${location.city}, ${location.country}`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const styles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
]
