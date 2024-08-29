import { useState } from "react"

export default function Team(){

    const [Team , setTeam] = useState(11);
    
    const handleAdd = () => {

        const newAdd = Team + 1;
        setTeam(newAdd);
    }

    const handleReduce2 = () => {

        const newAdd = Team - 1;
        setTeam(newAdd);
    }


    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '12px'
    }

    return(

      
        <div style={teamStyle}>
            <h3>players:{Team}</h3>
            <button onClick={handleAdd}>add player</button>
            <button onClick={handleReduce2}>reduce player</button>

        </div>
    )
}