import React from "react";
import { CvDataType } from "../types/cvData";
import { v4 as uuidv4 } from "uuid";

type Props = {
    data: CvDataType;
    setData: React.Dispatch<React.SetStateAction<CvDataType>>;
};

const Education = ({ data, setData }: Props) => {
    const handleAddEducation = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        // make a copy of the object
        const updatedData = { ...data };
        // new education object
        const newEducation = {
            id: uuidv4(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
        };
        // push it in
        updatedData.education.push(newEducation);
        setData(updatedData);
    };

    const handleRemoveEducation = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        // make a copy of the object
        const updatedData = { ...data };
        // filter the array with the condition to return a new array if the id on the button clicked does not match any of the other id's
        updatedData.education = updatedData.education.filter(
            (value) => value.id != id
        );
        setData(updatedData);
    };

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const updatedEducation = [...data.education];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
        };
        const updatedData = { ...data, education: updatedEducation };
        setData(updatedData);
    };

    return (
        <div>
            <h2>Education</h2>
            {data.education.map((eduData, index) => {
                return (
                    <div key={eduData.id}>
                        <label htmlFor="school">School</label>
                        <input
                            type="text"
                            name="school"
                            id="school"
                            value={eduData.school}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="degree">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            id="degree"
                            value={eduData.degree}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            id="startDate"
                            value={eduData.startDate}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="text"
                            name="endDate"
                            id="endDate"
                            value={eduData.endDate}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={eduData.location}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <button
                            onClick={(e) =>
                                handleRemoveEducation(e, eduData.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
            <button onClick={(e) => handleAddEducation(e)}>Add</button>
        </div>
    );
};

export default Education;
