import React from "react";
import '@styles/components/loading-view.scss';
import loadingIndicator from "../assets/loading.gif";

const Loading = () => {
    return (
        <div className="loading-view">
            <img src={loadingIndicator} alt="loading indicator gif" />
        </div>
    )
}

export default Loading