import React from "react";
import { CvDataType } from "../types/cvData";
import { v4 as uuidv4 } from "uuid";

type Props = {
    data: CvDataType;
    setData: React.Dispatch<React.SetStateAction<CvDataType>>;
};

const WorkExperience = ({ data, setData }: Props) => {
    const handleAddWorkExperience = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        // make a copy of the object
        const updatedData = { ...data };
        // new education object
        const newWorkExperience = {
            id: uuidv4(),
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
        };
        // push it in
        updatedData.workExperience.push(newWorkExperience);
        setData(updatedData);
    };

    const handleRemoveWorkExperience = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        // make a copy of the object
        const updatedData = { ...data };
        // filter the array with the condition to return a new array if the id on the button clicked does not match any of the other id's
        updatedData.workExperience = updatedData.workExperience.filter(
            (value) => value.id != id
        );
        setData(updatedData);
    };

    const handleInput = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const updatedWorkExperience = [...data.workExperience];
        updatedWorkExperience[index] = {
            ...updatedWorkExperience[index],
            [name]: value,
        };
        const updatedData = { ...data, workExperience: updatedWorkExperience };
        setData(updatedData);
    };

    return (
        <div>
            <h2>Work Experience</h2>
            {data.workExperience.map((work, index) => {
                return (
                    <div key={work.id}>
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={work.companyName}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            name="position"
                            id="position"
                            value={work.position}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            id="startDate"
                            value={work.startDate}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="text"
                            name="endDate"
                            id="endDate"
                            value={work.endDate}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={work.location}
                            onChange={(e) => handleInput(e, index)}
                        />
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            rows={2}
                            value={work.description}
                            onChange={(e) => handleInput(e, index)}
                        ></textarea>

                        <button
                            onClick={(e) =>
                                handleRemoveWorkExperience(e, work.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
            <button onClick={(e) => handleAddWorkExperience(e)}>Add</button>
        </div>
    );
};

export default WorkExperience;
