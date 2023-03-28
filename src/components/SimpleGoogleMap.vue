<template>
  <div class="map" id="map"></div>
</template>
<script setup>
import { ref, inject } from "vue";

const props = defineProps({
    msg: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    zoom: { type: Number, required: true },
})

const map = ref();
const key = 'AIzaSyC-XKM4M5JRa54NW5xkjaR9rLkaC-vjcPU';//inject("GOOGLE_MAP_API_KEY");

// INITIALIZE GOOGLEMAPS
(() => {
  if (window.google?.maps) {
    window.initMap();
    return;
  }

  const googleMapScript = document.createElement("SCRIPT");
  googleMapScript.setAttribute(
    "src",
    `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
  );
  googleMapScript.setAttribute("defer", "");
  googleMapScript.setAttribute("async", "");
  document.head.appendChild(googleMapScript);
})();

// from the callback, initialize the map when we know
// the script is loaded
window.initMap = () => {
  map.value = new google.maps.Map(document.getElementById("map"), {
    zoom: props?.zoom || 8,
    center: {lat: props.lat, lng: props.lng},
    disableDefaultUI: props?.disableDefaultUI || false,
    mapTypeId: props?.mapType,
  });

  map.value.setOptions({ styles: customTheme });
};

const customTheme = [
    {
      featureType: "road",
      stylers: [
        { hue: "#353454" },
        { saturation: -79 },
      ]
    },
    {
      featureType: "poi",
      stylers: [
        { saturation: -78 },
        { hue: "#353454" },
        { lightness: -47 },
        { visibility: "off" }
      ]
    },
    {
      featureType: "road.local",
      stylers: [
        { lightness: 22 }
      ]
    },
    {
      featureType: "landscape",
      stylers: [
        { hue: "#353454" },
        { saturation: -11 }
      ]
    },
    {
      featureType: "water",
      stylers: [
        { hue: "#f1f0fe" },
        { lightness: 60 }
      ]
    },
    {
      featureType: "road.local",
      stylers: [
        { weight: 1.3 },
        { lightness: 30 }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        { visibility: "simplified" },
        { hue: "#353454" },
        { saturation: -16 }
      ]
    },
    {
      featureType: "transit.line",
      stylers: [
        { saturation: -72 }
      ]
    },
  ];

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.map {
  width: 100%;
  height: 300px;
  /*color: #6600ff;
  color: #5e00ff;
  color: #1900ff;

  color: #f1f0fe;
  color: #353454;*/
}
</style>
