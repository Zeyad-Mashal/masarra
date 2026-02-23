"use client";
import React, { useState } from "react";
import "./OurServices.css";
import { LuHandshake } from "react-icons/lu";
import {
  MdFlightLand,
  MdHotel,
  MdDirectionsBus,
  MdRestaurant,
  MdCelebration,
  MdMeetingRoom,
  MdCamera,
  MdSupportAgent,
} from "react-icons/md";
import Modal from "../Modal/Modal";

const services = [
  {
    icon: <MdFlightLand />,
    title: "Arrival & First Impressions",
    subtitle: "Meet & Greet Services",
    description:
      "We set the tone from the moment your delegates land. Our VIP meet & greet teams ensure seamless arrivals, expedited immigration support, and a warm welcome that reflects your brand.",
    points: [
      "VIP airport meet & greet",
      "Immigration & customs facilitation",
      "Branded welcome kits",
      "Dedicated arrival coordinator",
    ],
  },
  {
    icon: <MdDirectionsBus />,
    title: "Ground Transportation",
    subtitle: "Premium Fleet Management",
    description:
      "From executive sedans to luxury coaches, our transport solutions are tailored to your group size and itinerary — punctual, professional, and pristine.",
    points: [
      "Executive & VIP vehicle fleet",
      "Group coach & shuttle services",
      "Real-time GPS tracking",
      "24/7 on-call transport support",
    ],
  },
  {
    icon: <MdHotel />,
    title: "Hotel Accommodation",
    subtitle: "Curated Property Selection",
    description:
      "We secure the best rooms at the best rates across Abu Dhabi's finest hotels — from iconic landmarks to boutique properties — all negotiated to your programme budget.",
    points: [
      "5-star & landmark hotel partnerships",
      "Group rate negotiation",
      "Room blocking & allocation",
      "Check-in/out coordination",
    ],
  },
  {
    icon: <MdMeetingRoom />,
    title: "Conference & Meetings",
    subtitle: "World-Class Venues",
    description:
      "We source and manage state-of-the-art conference venues fitted with the latest AV technology, ensuring your meetings run with precision and professionalism.",
    points: [
      "Venue selection & negotiation",
      "AV & technical production",
      "Seating & layout planning",
      "On-site technical support",
    ],
  },
  {
    icon: <MdRestaurant />,
    title: "Dining & F&B Experiences",
    subtitle: "Culinary Excellence",
    description:
      "From intimate gala dinners to large-scale banquets, our culinary team curates menus and dining experiences that delight delegates and leave a lasting impression.",
    points: [
      "Gala dinner conceptualisation",
      "Custom menu design",
      "Private chef & catering services",
      "Themed dining experiences",
    ],
  },
  {
    icon: <MdCelebration />,
    title: "Incentive Programmes",
    subtitle: "Reward That Resonates",
    description:
      "We design bespoke incentive trips that motivate, reward, and inspire. Every detail — from the destination to the farewell gift — is crafted to make your top performers feel extraordinary.",
    points: [
      "Destination incentive planning",
      "Team-building activities",
      "Exclusive excursions & experiences",
      "Personalised delegate gifts",
    ],
  },
  {
    icon: <MdCamera />,
    title: "Events & Entertainment",
    subtitle: "Memorable Experiences",
    description:
      "From product launches to cultural evenings, we produce creative events that engage audiences, amplify your message, and create lasting memories.",
    points: [
      "Event concept & theme development",
      "Entertainment sourcing & booking",
      "Stage & production design",
      "Photography & videography",
    ],
  },
  {
    icon: <MdSupportAgent />,
    title: "On-Site Operations",
    subtitle: "Flawless Execution",
    description:
      "Our dedicated on-site team is with your group from day one to farewell, managing every moment to ensure a seamless, stress-free experience for delegates and organizers alike.",
    points: [
      "Dedicated on-site event managers",
      "24/7 delegate support desk",
      "Emergency & contingency planning",
      "Real-time problem resolution",
    ],
  },
  {
    icon: <LuHandshake />,
    title: "DMC & Partner Services",
    subtitle: "Local Expertise, Global Standards",
    description:
      "As a trusted Destination Management Company, we partner with international agencies and corporates to deliver unmatched local expertise backed by global service standards.",
    points: [
      "DMC partnership programmes",
      "Local supplier network",
      "Regulatory & permit management",
      "Cultural consultation & guidance",
    ],
  },
];

const OurServices = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="OurServices">
      <div className="overlay"></div>
      <h1>Our Services</h1>
      <p>Everything It Takes. Delivered Seamlessly.</p>
      <div className="OurServices_list">
        {services.map((service, index) => (
          <div
            key={index}
            className="OurServices_item"
            onClick={() => setActiveModal(service)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveModal(service)}
          >
            {service.icon}
            <div className="item_content">
              <span>{service.title}</span>
              <p>{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        data={activeModal}
      />
    </div>
  );
};

export default OurServices;
