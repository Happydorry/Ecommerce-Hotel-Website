/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <p className="mt-2 mb-4">
              Location: 123 Coastal Highway, Seaside Town, CA 90210
            </p>
            <p>
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
              <a
                href=""
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-500 mt-5"
              >
                Open Map
              </a>
            </p>
          </Card>
          <Card bg="bg-pink-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
