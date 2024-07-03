/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <p className="overflow-y-auto max-h-60">
              <p className=" font-bold mt-2 mb-4">
                Location: 123 Coastal Highway, Seaside Town, CA 90210
              </p>
              <ul className=" list-inside space-y-2 mt-5">
                <li>
                  {" "}
                  Nearby Sightseeing Attractions: Distances are displayed to the
                  nearest 0.1 mile and kilometer.
                </li>{" "}
                <li> Seaside Beach: 0.2 km / 0.1 mi</li>{" "}
                <li> Coastal Boardwalk: 0.8 km / 0.5 mi </li>
                <li> Seaside Lighthouse: 1.6 km / 1 mi </li>
                <li> Marine Aquarium: 3.2 km / 2 mi</li>
                <li> Seaside Museum of Art: 2.4 km / 1.5 mi</li>
                <li> Nature Trails at Seaside Park: 3.2 km / 2 mi </li>{" "}
                <li> Seaside Town Market: 1.3 km / 0.8 mi </li>
                <li> Coastal Golf Club: 4.8 km / 3 mi</li>
                <p> The nearest airports are: </p>
                <li> Seaside International Airport (SIA): 24.1 km / 15 mi </li>
                <li> City Airport (CTA): 32.2 km / 20 mi</li>
              </ul>
            </p>
            <a
              href=""
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-500 mt-5"
            >
              Open Map
            </a>
          </Card>
          <Card>
            <div className="map-container w-full h-60 bg-gray-300">
              <img
                src="https://via.placeholder.com/300x200?text=Map+Placeholder"
                alt="Map Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
