import React, {useState} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [movieName,setMovieName] = useState("")
  const [review,setReview] = useState("")
  const [submitting,setSubmitting] = useState(false)

  const submitReview = ()=>{
    setSubmitting(true)
    Axios.post("http://localhost:3306/api/insert",{movieName:movieName,
  review:review}).then(()=>{
    setMovieName("")
    setReview("")
    setSubmitting(false)
    // alert("success")
  })

  }

  return (
    <div className="App">
      <h1>CRUD</h1>
      <div className = "form">
        <label for = "movieName">Movie Name</label>
        <input type = "text" name = 'moveName' value = {movieName}
        onChange = {(e) =>{setMovieName(e.target.value)}} />
        {/* {movieName} */}
        <label for = "movieName">Review</label>
        <input type = "text" name = 'review' value = {review}
        onChange = {(e) =>{setReview(e.target.value)}}/> 
        {/* {review}  */}
      </div>
      <button onClick = {submitReview}>Submit</button>
      {
        submitting? <h1>Submitting . . .</h1>:null
      }

    </div>
  );
}

export default App;
