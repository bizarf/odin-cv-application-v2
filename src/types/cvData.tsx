export type CvDataType = {
    name: string;
    email: string;
    phone: string;
    education: EducationType[];
    workExperience: WorkExperienceType[];
};

type EducationType = {
    id: string;
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
};

type WorkExperienceType = {
    id: string;
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
};
