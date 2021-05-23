import React from "react";

const Forminput = (props) => {

   
  return (
    <div className="mb-3">
      <label className="form-label">
        {props.title}
      </label>
      <input 
        name={props.name} 
        value={props.value} 
        type="text" 
        className="form-control" 
        id={props.id} 
        onChange={props.onChange}
      />
    </div>
  );
};

export default Forminput;
