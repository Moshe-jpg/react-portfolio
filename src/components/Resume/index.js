import React from "react";
import workResume from "../../assets/Moshe-Work-Resume-Updated.pdf";

const Resume = () => {
    return (
        <>
        <object width="100%" height="800" data={workResume} type="application/pdf" aria-label="resume"/>
        </>
    )
}

export default Resume;