/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./Card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Modal from "react-modal";

const position = [51.505, -0.09];
const zoomLevel = 13;

Modal.setAppElement("#root");

const HomeCards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <div className="p-4 py-10">
              <div className="overflow-y-auto max-h-60">
                <p className="font-bold mt-2 mb-4">
                  Location: 123 Coastal Highway, Seaside Town, CA 90210
                </p>
                <ul className="list-inside space-y-2 mt-5">
                  <li>
                    Nearby Sightseeing Attractions: Distances are displayed to
                    the nearest 0.1 mile and kilometer.
                  </li>
                  <li>Seaside Beach: 0.2 km / 0.1 mi</li>
                  <li>Coastal Boardwalk: 0.8 km / 0.5 mi</li>
                  <li>Seaside Lighthouse: 1.6 km / 1 mi</li>
                  <li>Marine Aquarium: 3.2 km / 2 mi</li>
                  <li>Seaside Museum of Art: 2.4 km / 1.5 mi</li>
                  <li>Nature Trails at Seaside Park: 3.2 km / 2 mi</li>
                  <li>Seaside Town Market: 1.3 km / 0.8 mi</li>
                  <li>Coastal Golf Club: 4.8 km / 3 mi</li>
                  <li>The nearest airports are:</li>
                  <li>International Airport (SIA): 24.1 km / 15 mi</li>
                  <li>City Airport (CTA): 32.2 km / 20 mi</li>
                </ul>
              </div>
              <button
                onClick={openModal}
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-500 mt-5"
              >
                Open Map
              </button>
            </div>
          </Card>
          <Card>
            {!modalIsOpen && (
              <div className="w-full h-96">
                <MapContainer
                  center={position}
                  zoom={zoomLevel}
                  scrollWheelZoom={true}
                  className="w-full h-full"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position}></Marker>
                </MapContainer>
              </div>
            )}
          </Card>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Map Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
      >
        <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl p-4">
          <MapContainer
            center={position}
            zoom={zoomLevel}
            scrollWheelZoom={true}
            className="w-full h-96"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}></Marker>
          </MapContainer>
          <button
            onClick={closeModal}
            className="mt-4 inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-500"
          >
            Close Map
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default HomeCards;
