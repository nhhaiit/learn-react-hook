import { useState } from "react";

function TodoList(){
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        console.log(storageJobs);
        return storageJobs ?? [];
    });
    const [job, setJob] = useState('');

    const addJob = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            
            //save to local storage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);
            //localStorage.clear();

            return newJobs;
        });
        setJob('');
    }


    return(
        <div style={{padding: 32}}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />

            <button onClick={addJob}>Add</button>

            <ul>
                {jobs.map((job, index)=> (
                    <li key={index}> {job} </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;