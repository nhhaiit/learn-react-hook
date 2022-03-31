import React from "react";
import { useState } from "react";
function Radio(){
    const courses = [
        {
          id: 1,
          name: 'HTML, CSS'
        },
        {
          id: 2,
          name: 'JavaScript'
        },
        {
          id: 3,
          name: 'ReactJS'
        }
      ]
    
    const [checked, setChecked] = useState();
    
    const onSubmit = () => {
      ///call API
      console.log(checked)
    }

    return(
        <div style = {{padding: 32}}>
        {courses.map(course => (
          <div key={course.id}>
            <input
              type="radio"
              checked = {checked === course.id}
              onChange={() => setChecked(course.id)}
            />
            {course.name}
          </div>
        ))}
    
        <button onClick={onSubmit}>Submit</button>
        </div>
    );
}
export default Radio;