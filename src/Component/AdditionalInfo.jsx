/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const AdditionalInfo = () => {
  return (
    <section className="py-4">
      <h1 className="text-3xl mt-20 px-5">Additional Info</h1>

      <div className="px-3 mt-9">
        <div className="border border-black px-5 mt-4">
          <h2 className="font-extrabold text-lg mt-4">
            Popular Hotel Amenities and Features
          </h2>
          <p className="mt-2">
            Pamper yourself with a visit to the spa, which offers massages, body
            treatments, and facials. You're sure to appreciate the recreational
            amenities, including a health club, an indoor pool, and a spa tub.
            Additional features at this Edwardian hotel include complimentary
            wireless internet access, concierge services, and gift
            shops/newsstands.
          </p>

          <h2 className="font-extrabold text-lg mt-4">
            Business, Other Amenities
          </h2>
          <p className="mt-2">
            Featured amenities include a 24-hour business center, limo/town car
            service, and express check-in. This hotel has 22604 square feet
            (2100 square meters) of space consisting of conference space and
            meeting rooms. Guests may use a cruise ship terminal shuttle for a
            surcharge, and self parking (subject to charges) is available
            onsite.
          </p>
          <h2 className="font-extrabold text-lg mt-6">
            Hotel Accommodations and Guest Rooms
          </h2>
          <p className="mt-2">
            Make yourself at home in one of the 431 air-conditioned rooms
            featuring minibars and flat-screen televisions. Wireless internet
            access (surcharge) keeps you connected, and cable programming is
            available for your entertainment. Private bathrooms with bathtubs or
            showers feature designer toiletries and hair dryers. Conveniences
            include phones, as well as safes and desks.
          </p>
          <h2 className="font-extrabold text-2xl mt-9 bg-gray-100" id="spa">
            Spa Service Guidelines and Rules
          </h2>
          <p className="mt-2">
            To ensure a pleasant visit for all our guests, please review the
            following guidelines and rules:
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-5">
            <li>
              <strong>Reservations and Cancellations:</strong> Make reservations
              in advance. Cancel at least 24 hours prior to avoid a fee.
            </li>
            <li>
              <strong>Arrival Time:</strong> Arrive at least 15 minutes early
              for check-in and preparation.
            </li>
            <li>
              <strong>Health and Safety:</strong> Inform us of any medical
              conditions. Shower before using facilities.
            </li>
            <li>
              <strong>Spa Etiquette:</strong> Maintain quiet. Phones on silent.
              Children under 16 need an adult. Wear swimwear in communal areas.
            </li>
            <li>
              <strong>Personal Belongings:</strong> Use provided lockers. Do not
              bring valuables as we are not responsible for lost items.
            </li>
            <li>
              <strong>Payment and Gratuities:</strong> Charge services to your
              room or pay directly. Gratuities are appreciated for exceptional
              service.
            </li>
            <li>
              <strong>After Your Treatment:</strong> Relax and enjoy our lounge
              with complimentary refreshments.
            </li>
            <li>
              <strong>Feedback:</strong> Share your experience with our manager
              or via our satisfaction survey.
            </li>
          </ol>

          <h2 className="font-extrabold text-2xl mt-9 bg-gray-100" id="pool">
            Swimming Pool Guidelines and Rules
          </h2>
          <ul className=" list-inside space-y-2 mt-5">
            <li>
              <strong>Pool Hours:</strong> The pool is open from 6 AM to 10 PM
              daily. Please adhere to these hours.
            </li>
            <li>
              <strong>Shower Before Entering:</strong> Please shower before
              using the pool to maintain hygiene.
            </li>
            <li>
              <strong>No Diving:</strong> Diving is prohibited to ensure the
              safety of all guests.
            </li>
            <li>
              <strong>Supervise Children:</strong> Children under 16 must be
              accompanied by an adult at all times.
            </li>
            <li>
              <strong>Proper Swimwear:</strong> Appropriate swimwear is
              required. No street clothes or shoes in the pool.
            </li>
            <li>
              <strong>No Running:</strong> Running around the pool area is not
              allowed to prevent accidents.
            </li>
            <li>
              <strong>No Glass Containers:</strong> Glass containers are not
              permitted in the pool area.
            </li>
            <li>
              <strong>Respect Others:</strong> Please be considerate of other
              guests and avoid excessive noise or rough play.
            </li>
            <li>
              <strong>Personal Belongings:</strong> Do not leave personal
              belongings unattended. The hotel is not responsible for lost
              items.
            </li>
            <li>
              <strong>Health and Safety:</strong> Inform the pool staff of any
              medical conditions that might affect your safety.
            </li>
          </ul>
          <h2 className="font-extrabold text-2xl mt-9 bg-gray-100" id="bar">
            Bar and Lounge Guidelines and Rules
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-5 mb-7">
            <li>
              <strong>Age Requirement:</strong> Guests must be 21 or older to
              enter the bar and lounge area.
            </li>

            <li>
              <strong>Hours of Operation:</strong> The bar and lounge are open
              from 5 PM to 2 AM daily.
            </li>
            <li>
              <strong>ID Verification:</strong> Please be prepared to show a
              valid ID for age verification upon request.
            </li>
            <li>
              <strong>Responsible Drinking:</strong> Drink responsibly. We
              reserve the right to refuse service to guests who appear
              intoxicated.
            </li>
            <li>
              <strong>No Outside Food or Drink:</strong> Outside food and
              beverages are not permitted in the bar and lounge area.
            </li>
            <li>
              <strong>Smoking Policy:</strong> Smoking is not allowed inside the
              bar and lounge. Please use designated smoking areas.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
