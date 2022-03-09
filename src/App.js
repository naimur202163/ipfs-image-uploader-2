import React, { useState } from "react";
import './App.css';
function App() {
  const [loginData,setLoginData]=useState({})

       
    const handleOnBlur=(e)=>{
          const field=e.target.name;
          const value=e.target.value;
          const newLoginData={...loginData};
          newLoginData[field]=value;
          setLoginData(newLoginData);
    }

    const handleSubmit=(e)=>{
      console.log(loginData);
      e.preventDefault();
    }

  return (
    <div className="App">
      <form  onSubmit={handleSubmit}>
        <input name="name" type="name" placeholder="interyour Name" onBlur={handleOnBlur} />
        <br/>
        <br/>
        <input name="emai" type="email" placeholder="enter  you email" onBlur={handleOnBlur}/>
        <br/>
        <br/>
        <input name="number" type="number" placeholder="enter you number    "  onBlur={handleOnBlur}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
