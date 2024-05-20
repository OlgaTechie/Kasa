import React from "react";
import "./HostInformation.scss"

function HostInformation ({house}) {
    return (
        <div className="host-info">
            <p className="host-name">
                {house.host.name.split(" ")[0]} <br />
                {house.host.name.split(" ")[1]}
            </p>
            <img src={house.host.picture} alt={house.host.name} className="host-image" />
        </div>
    );
};

export default HostInformation;