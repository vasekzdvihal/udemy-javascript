import React from "react";

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return <div>
        <input type="text" onChange={onChange}/>
    </div>
};

export default EventComponent;
