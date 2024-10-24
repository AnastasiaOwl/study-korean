import React, {useState} from "react" 
import food from '../tasks-images/food.png';
import clothes from '../tasks-images/clothes.png';
import family from '../tasks-images/family.png';
import "../styles/Tasks.css";

function Tasks(){
    const taskTopics = [
        { name: 'Food', image: food },
        { name: 'Clothes', image: clothes },
        { name: 'Family', image: family },
    ];

    return (
        <div className="task-container">
            {taskTopics.map((task, index) => (
                <div key={index} className="task-item">
                    <img 
                        src={task.image} 
                        alt={task.name} 
                        className="task-image" 
                    />
                    <p>{task.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Tasks;