import React, { useState, useEffect } from 'react'
import * as style from '../../styles/organization.module.scss'

import GoogleMapReact from 'google-map-react'

function Map(props: any) {
  console.log(props)
  let geometryY = -26.231718
  let geometryX = -63.2485696
  const [zoom, setZoom] = useState(1)
  console.log(props)
  if (props.coordenates !== undefined) {
    geometryY = parseFloat(props.coordenates.props.ygriega) || -26.231718
    geometryX = parseFloat(props.coordenates.props.equis) || -63.2485696
    useEffect(() => {
      setZoom(props.coordenates.props.zoom)
    }, [props.coordenates.props.zoom])
  }

  return (
    <div className={style.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key:
            'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCDr1CIiG6Nop7lpjmIbVk8NVC1IjW_oXE',
        }}
        defaultCenter={{ lat: geometryY, lng: geometryX }}
        defaultZoom={zoom}
        options={{ styles: styles }}
      >
        {props.location ? (
          <Marcador
            location={props.location}
            lat={geometryY}
            lng={geometryX}
            name="My Marker"
            color="blue"
          />
        ) : (
          <Marcador
            lat={geometryY}
            lng={geometryX}
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
  const { color, name } = props

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
            <div className={style.textContainerCity}>
              {props.location !== undefined
                ? `${props.location.city}, ${props.location.country}`
                : `Desde LATAM, Hacia el mundo`}
              {/*          {props.region ? props.region : 'Desde LATAM'},{' '}
              {props.pais ? props.pais : 'Hacia el mundo'} */}
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
