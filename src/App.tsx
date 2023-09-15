import "./App.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import { CvDataType } from "./types/cvData";

const App = () => {
    const [data, setData] = useState<CvDataType>({
        name: "",
        email: "",
        phone: "",
        education: [],
        workExperience: [],
    });

    return (
        <>
            <div>
                <h1 className="header">CV App</h1>
                <form className="cvForm">
                    <GeneralInfo data={data} setData={setData} />
                    <Education data={data} setData={setData} />
                    <WorkExperience data={data} setData={setData} />
                </form>
            </div>
        </>
    );
};

export default App;
