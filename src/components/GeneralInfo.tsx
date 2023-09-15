import React from "react";
import { CvDataType } from "../types/cvData";

type Props = {
    data: CvDataType;
    setData: React.Dispatch<React.SetStateAction<CvDataType>>;
};

const GeneralInfo = ({ data, setData }: Props) => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedDate = { ...data, [name]: value };
        setData(updatedDate);
    };

    return (
        <div>
            <h2>Personal Details</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={(e) => handleInput(e)}
            />
            <label htmlFor="Email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={(e) => handleInput(e)}
            />
            <label htmlFor="phone">Phone</label>
            <input
                type="number"
                name="phone"
                id="phone"
                max={15}
                value={data.phone}
                onChange={(e) => handleInput(e)}
            />
        </div>
    );
};

export default GeneralInfo;
