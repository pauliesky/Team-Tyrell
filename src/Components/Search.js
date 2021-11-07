import React, { useState } from "react";
import "../Styled Components/search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import img from "../img/logo.png";

function Search() {

    const [input, setInput] = useState("")
    const h1 = <div className='h1_container'><h1>{input}</h1></div>
    const image = <div className='img_container'><img src={img} alt="logo"/></div>


  return (
    <div className="search">
      <div className="logo">{input === "" ? image : h1}</div>

      <div className="input_container">
        <SearchIcon className="input_icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="mic-icon" />
      </div>
    </div>
  );
}

export default Search;
