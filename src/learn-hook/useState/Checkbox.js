import React from "react";

import { useState } from "react";

function Checkbox (){
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
    
    const [checked, setChecked] = useState([]);

    console.log({ids: checked});

    const handleChecked = (id) => {
        const isChecked = checked.includes(id);
        setChecked(prev => {
            if(isChecked){
                return checked.filter(item => item !== id)
             }else{
                 return [...prev, id];
             }
        })
    }

    return(
        <div style={{padding: 32}}>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked = {checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    );
}

export default Checkbox;