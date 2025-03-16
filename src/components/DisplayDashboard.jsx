import "./dashboard.css";
import {useEffect, useState} from "react";

export default function DisplayDashboard() {
    const [player, isPlayer] = useState(0);
    const [icon, setIcon] = useState(Array(9).fill("/images/plain.jpg"));
    const [winner, setWinner] = useState(null);

    function checkWinner() {
        const checkLiners = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
        for (let [a, b, c] of checkLiners) {
            if (icon[a] === icon[b] && icon[a] === icon[c]) {
                if(icon[a] === "/images/x.jpg") {
                    setWinner("X");
                } else if (icon[a] === "/images/o.jpg") {
                    setWinner("Y");
                }
            }
        }
    }

    function handleClick(index) {
        
        console.log("clicked!", index);
        const newIcons = [...icon];
        
        if(player%2 ===0) {
            if(newIcons[index]!=="/images/x.jpg" && newIcons[index]!=="/images/o.jpg") {
                newIcons[index] = "/images/x.jpg";
                isPlayer((player)=>(player+1));
            }            
        } else {
            if(newIcons[index]!=="/images/x.jpg" && newIcons[index]!=="/images/o.jpg") {
                newIcons[index] = "/images/o.jpg";
                isPlayer((player)=>(player+1));
            } 
        }
        setIcon(newIcons);
        if(player===8){
            window.location.reload();
        }
        //checkWinner();
    }

    useEffect(() => {
        checkWinner();
        if(winner) {
            alert(winner);
            window.location.reload();
        }
    });


    return (
        <div className="center-div">
            <div className="row">
                <img className="icon-images" src={icon[0]} alt="plain" onClick={() => handleClick(0)} />
                <img className="icon-images" src={icon[1]} alt="plain" onClick={() => handleClick(1)} />
                <img className="icon-images" src={icon[2]} alt="plain" onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <img className="icon-images" src={icon[3]} alt="plain" onClick={() => handleClick(3)} />
                <img className="icon-images" src={icon[4]} alt="plain" onClick={() => handleClick(4)} />
                <img className="icon-images" src={icon[5]} alt="plain" onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <img className="icon-images" src={icon[6]} alt="plain" onClick={() => handleClick(6)} />
                <img className="icon-images" src={icon[7]} alt="plain" onClick={() => handleClick(7)} />
                <img className="icon-images" src={icon[8]} alt="plain" onClick={() => handleClick(8)} />
            </div>
        </div>
    );
}