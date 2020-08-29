// import "./Sidebar.css";
import React from "react";

export default function Sidebar({ width, height, children }) {
    return (
        <div className="side-bar" style={{ width: width, minHeight: height }}>
            <React.Fragment>{children}</React.Fragment>
        </div>
    );
};