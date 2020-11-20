import React, {Component, useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';

import { Container, Button,
} from 'semantic-ui-react';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
}from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,

}from "@reach/combobox";
//import {Link,BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import { formatRelative } from 'date-fns';
import '@reach/combobox/styles.css';
import  styles from './mapStyles';


require('dotenv').config();


const mapContainerStyle = {
width : '50vw',
height : '50vh',
};


const options = {

disableDefaultUI : true,
zoomControl : true,
};
const libraries=['places'];


function CustomGmap(){




const [markers, setMarkers] = useState([]);
const [selected, setSelected] = useState(null);
const center ={

lat : 37.621159,
lng : 127.074172,
};

const onMapClick = React.useCallback((event) => {

  setMarkers(current =>
    [...current, {
    lat : event.latLng.lat(),
    lng : event.latLng.lng(),
    time : new Date(),
  }
]);
}, []);
const mapRef = React.useRef();
const onMapLoad = React.useCallback((map) =>
{
  mapRef.current = map;
} , []);


  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey : 'AIzaSyBSvzkSRE6HON-gbgHmftLBK8SAJZgCe_k',
    libraries,
  });


const panTo = React.useCallback(({lat, lng})=>
{
  mapRef.current.panTo({lat,lng});
  mapRef.current.setZoom(14);
},[]);


  if(loadError) return "Error Loading Maps";
  if(!isLoaded) return "Loading Maps";


  return (
    <div>
      <Container text style={{ marginTop: '5em' }}>
      <div>
      <h1>
      여행 지역을 지정해주세요
      </h1>
      <Search panTo= {panTo}/>
      <Locate panTo ={panTo}/>
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      options = {options}
      styles = {styles}
      defaultOoptions={{
        styles:require('./mapStyles')
      }}
      onClick={onMapClick}
      onLoad = {onMapLoad}
      >
      {markers.map((markers) => (
        <Marker
        key ={markers.time.toISOString()}
        position ={{lat : markers.lat , lng : markers.lng}}
        onClick={ () => {
          setSelected(markers);
        }}

         />
       ))}

       {selected ? (<InfoWindow position= {{lat :selected.lat ,lng : selected.lng}} onCloseClick={() =>
        { setSelected(null);

       }}
       >
         <div>
         <h2>선택되었습니다.</h2>
         <p>선택됨 {formatRelative(selected.time , new Date())}</p>

         </div>

         </InfoWindow>) : null}
      </GoogleMap>

    </div>

    </Container>
    </div>

);
}export default CustomGmap;


function Locate({panTo})
{
  return <button
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
  }}>locate me!</button>
}




function Search({ panTo})
{
  const {ready, value, suggestions : {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions : {
      location : {
        lat : () => 37.621159,
      lng : () => 127.074172,
   },
   radius : 200 * 1000,

 },
});

return (
<div className="search">
  <Combobox
    onSelect = {async (address) =>{
      setValue(address,  false );
      clearSuggestions();

      try {

        const result = await getGeocode({address});
        const { lat , lng} = await getLatLng(result[0]);
        panTo({lat,lng});

  }catch(error){
    console.log("error");
  }
} }>
<ComboboxInput value ={value} onChange={(e) =>
{
  setValue(e.target.value);
}}
disable={!ready}
placeholder="Enter an address"
/>
<ComboboxPopover>
<ComboboxList>
{status === "OK" && data.map(({id,  description}) =>
(<ComboboxOption key ={id} value = {description} />
))}
</ComboboxList>
</ComboboxPopover>

</Combobox>
</div>
)


}
