import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ChatBot from 'react-simple-chatbot';


const steps = [
  {
    id: "Greet",        
    message: "Hello, Welcome to our website",        
    trigger: "Done",        
  },        
  {       
    id: "Done",        
    message: "Please enter your name!",        
    trigger: "waiting1",        
  },      
  {      
    id: "waiting1",      
    user: true,      
    trigger: "Name",      
  },      
  {       
    id: "Name",     
    message: "Hi {previousValue}, Please select your issue",     
    trigger: "issues",     
  },      
  {      
    id: "issues",   
    options: [   
      {    
        value: "professional",   
        label: "professional",        
        trigger: "professional",       
      },       
      { value: "Templates", label: "Templates", trigger: "Templates" },       
    ],       
  },       
  {       
    id: "professional",       
    message:        
      "Thanks for letting know your preferance, Our team will resolve your issue ASAP",        
    end: true,       
  },       
  {       
    id: "Templates",       
    message:       
      "Thanks for letting know your preferance, Our team will resolve your issue ASAP",       
    end: true,       
  },       
];
const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Chat" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Homzy</span>{" "}
          <ChatBot steps={steps} />
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue choosing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
