import React from "react";

export const InfoStrip  = props => { 
    console.log(props);
    let { object_key,value } = props;
    return (
        <div className="info-strip">
            <p>{object_key} =============> </p>
            <p>{value}</p>
        </div>
    )

}

