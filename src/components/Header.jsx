import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate=useNavigate()
  const [isDialogOpen, setDialogOpen] = useState(false);
  const {pathname}=useLocation();

  const bgColor = pathname !== '/registration' && pathname !== '/payment' ? "bg-background2" : "bg-white";

  console.log(pathname);
  const handleOpenDialog = () => {
    setDialogOpen(true);
    
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className={`flex justify-between items-center p-6 sm:px-12 py-3 shadow-md ${bgColor} `}>
        <div className="w-[120px] sm:w-[200px] md:[320px] cursor-pointer"
          onClick={()=>{
            window.open("https://sageturtle.in/daffodils/training/gbu", "_blank");

          }}
        >
          <img src={Logo} alt="" />
        </div>
        {
  pathname !== '/registration' && pathname !== '/payment' && (
    <div className="sm:w-[96px] md:w-[140px]">
      <button
        className="bg-secondary p-4 rounded-lg uppercase text-primary font-sans text-[12px] sm:text-[16px]"
        onClick={handleOpenDialog}
      >
        Enroll Now
      </button>
    </div>
  )
}
  
      </div>
      <div className="w-full">
       <Dialogbox
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title="150 hours Intensive Paid Training"
  
      >
        <Card title={<span>Individual<br />fee</span>} price={15000} student={{min:1,max:1}}/>
        <Card title={<span>Group of 5<br />fee</span>} price={15000} student={{min:1,max:5}} discount={10}/>
        <Card title={<span>Group of 10<br />fee</span>} price={15000} student={{min:1,max:10}} discount={15}/>

      </Dialogbox>

      </div>
    
    </>
  );
};

export default Header;
