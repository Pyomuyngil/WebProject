import React, {Component, useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,

} from '@react-google-maps/api';
import { Container, Button,
} from 'semantic-ui-react';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
}from "use-places-autocomplete";

import Geocode from "react-geocode";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,

}from "@reach/combobox";

import { formatRelative } from 'date-fns';
import '@reach/combobox/styles.css';
import styles from './mapStyles';
Geocode.setApiKey('AIzaSyBSvzkSRE6HON-gbgHmftLBK8SAJZgCe_k');
Geocode.enableDebug();

const libraries=['places'];

const mapContainerStyle = {
width : '50vw',
height : '400px',
};
const options = {
styles : styles,
disableDefaultUI : true,
zoomControl : true,
};
const center ={

lat : 36.621159,
lng : 127.074172,
};



function CustomGmap(){


  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey : 'AIzaSyBSvzkSRE6HON-gbgHmftLBK8SAJZgCe_k',
    libraries,

  });


const [markers, setMarkers] = useState([]);
const [selected, setSelected] = useState(null);
const [address2, setAddress2] = useState('');
const [city, setCity] = useState('');
const [area , setArea] = useState('');
const [resultaddress, setResultAddress] = useState([]);
const [location,setLocation] = useState({
  location : []
});


const [tags,setTags] = useState([]);
const addTags = () => {};


function getGeo(lat,lng){


  Geocode.fromLatLng(lat,lng).then( response =>
    {
      location.location = response.results[0].formatted_address;
      console.log(location.location);
      setLocation(location.location);


    });
    console.log(location);
    return location;

}


const onMapClick = React.useCallback((event) => {

  setMarkers(current =>
    [...current,
      {
        lat : event.latLng.lat(),
        lng : event.latLng.lng(),
        time : new Date(),
        location : getGeo(event.latLng.lat(), event.latLng.lng()),
      }
    ]
  );

}, []);


const mapRef = React.useRef();
const onMapLoad = React.useCallback((map) =>
{
  mapRef.current = map;
} , []);




const panTo = React.useCallback(({lat, lng})=>
{
  mapRef.current.panTo({lat,lng});
  mapRef.current.setZoom(14);
},[]);


  if(loadError) return "Error Loading Maps";
  if(!isLoaded) return "Loading Maps";




  return (
    <div>
      <div text style={{ marginTop: '5em'}}>
      <div>
      <h1>
      여행 지역을 지정해주세요
      </h1>
      <Search panTo= {panTo}/>
      <Locate panTo ={panTo}/>
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={7}
      center={center}
      options = {options}
      onClick={onMapClick}  //맵 클릭시 setMarkers에 현재 클릭한것에 대한 정보를 저장
      onLoad = {onMapLoad}
      >
      {
        markers.map((marker) => (
        <Marker
        key ={`${markers.lat}-${marker.lng}`}
        position ={{lat : marker.lat , lng : marker.lng}}
        onClick={ () =>
          {
          setSelected(marker);
          console.log(markers);
          }
                }

         />
       ))
      }

       {

         selected ?
         (



           <InfoWindow  //해당 마커 클릭시 플로팅되는 작은
            position= {{lat :selected.lat ,lng : selected.lng}}
            onCloseClick= {() =>
              {
                setSelected(null);

              }}

            >
           <div>
           <h2>{location}</h2>
           <p>선택됨 {formatRelative(selected.time , new Date())}</p>

           </div>

         </InfoWindow>
       ) : null}
      </GoogleMap>
    </div>

    </div>
    <div>
    <ul>
    <li>
    <span>Tag1</span>
    <i>close</i>
    </li>
    <li>
    <span>Tag2</span>
    <i>close</i>
    </li>
    </ul>
    </div>

    </div>




);
}export default CustomGmap;


function Locate({panTo})
{
  return (
    <button
      onClick= {() =>{
        navigator.geolocation.getCurrentPosition(
          (position) =>{
            panTo({
              lat : position.coords.latitude,
              lng : position.coords.longitude,
            });
          },

          () =>null

        );

      }}>locate me!
      </button>
    );
}




function Search({panTo})
{
  const {
    ready,
    value,
    suggestions : {status, data},
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete(
     {
    requestOptions :
    {
        location : { lat : () => 37.621159,  lng : () =>  127.074172 },
        radius : 200 * 1000,

    },
    });
    const handleInput = (e) =>
    {
      setValue(e.target.value);
    };








    const handleSelect = async(address) => {
      setValue(address,false);
      clearSuggestions();

      try {
        const results = await getGeocode({address});
        const {lat , lng} = await getLatLng(results[0]);
        panTo({lat,lng});


         const address2 =results[0].formatted_address,
              address2Array = results[0].address_components;

              console.log(address2);


      }catch (error) {
        console.log("Error : " , error);
      }


    };



    return (
        <div className="search">
          <Combobox onSelect={handleSelect}>
          <ComboboxInput
          value ={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Enter an address"
          />
          <ComboboxPopover>
            <ComboboxList>
            {status === "OK" &&
              data.map(({id,  description}) =>(
                <ComboboxOption
                key ={id}
                value = {description} />
            ))}
            </ComboboxList>
            </ComboboxPopover>

            </Combobox>
       </div>
);



}
