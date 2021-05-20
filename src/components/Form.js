import React from "react";

 
const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.song);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  function sayUpdate() {
    alert('Song has been updated!');
  }
  
   return (
    <form onSubmit={(e) => {props.handleCreate(formData)
      e.preventDefault()
    }}>
          
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <input
        type="number"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
     
      <button onClick={sayUpdate}>Update</button>

    </form>
  );
};

export default Form;