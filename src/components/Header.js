import React, { useState } from 'react';

import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

 
 function Header() {
  const [counts1,setCounts1]=useState("Prajwal");
  const [counts2,setCounts2]=useState("Prajju");
  const [counts3,setCounts3]=useState("Heyyy");
  
   

  function high()
  {
    setCounts1("Varshini");
     
  }
  function low()
  {
    setCounts2("Varshinimegha");
  }
  function mid()
  {
    setCounts3("itzzz mee");
      
  }
   return (
      <div>
        <button onClick={high}> Another name</button>
        <span>{counts1}</span>
        <br></br>
        <button onClick={low}> Another name</button>
        <span>{counts2}</span>
        <br></br>
        <button onClick={mid}> Another name </button>
        <span>{counts3}</span>
        <br></br>
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxJkmNltkJqWTNPKD0bmx2IQiKbAQ3IA_0aAdGKWYeUOeFqS0B' alt='gsh'></img>
        <SlLike />
        <FaRegComment />
        <IoMdShareAlt />
      </div>
   )
 
   }
 export default Header


    
    