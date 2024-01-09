// import React from 'react'
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const Body = () => {
  const [greetText, setGreetText] = useState("");
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString("default", {
    weekday: "long",
  });
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  useEffect(() => {
    let currentHour = currentDate.getHours();
    if (currentHour < 12) setGreetText("Good Morning!");
    else if (currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  }, []);
  return (
    <>
      <div className=" mx-4 rounded-md shadow-sm min-h-[600px]">
        <div className="rounded header ">
          <div className="flex items-center justify-between p-3 text-white">
            <div className="z-40 greetings">
              <h3 className="font-semibold xsm:text-lg xxsm:text-sm md:text-2xl">{greetText}</h3>
            </div>
            <div className="z-40 capitalize date ">
              <span className="text-base font-semibold ">{date}</span>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
