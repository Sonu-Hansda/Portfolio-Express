import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { toast } from 'react-toastify';
import SuccessCard from './SuccessCard';

const MultiForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        programmingLanguages: [],
        developmentSkills: [],
        registrationNumber: '',
        email: '',
    });

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const handleChange = (data: any) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };
    const handleSubmit = async () => {
        const { registrationNumber, email, firstName, lastName, gender, programmingLanguages, developmentSkills } = formData;

        const cleanRegistrationNumber = registrationNumber.trim().toLowerCase();
        const cleanEmail = email.trim().toLowerCase();

        const regEx = /^\d{4}ugcm0(0[0-3]|[1-2][0-9]|30)$/;
        const year = parseInt(cleanRegistrationNumber.substring(0, 4), 10);

        if (!regEx.test(cleanRegistrationNumber)) {
            toast('Invalid registration number! Please check the format.');
            return;
        }

        if (year < 2022) {
            toast('Sir, aap yaha kaise? 🤔');
            return;
        } else if (year === 2023) {
            toast('Bhai, ab kya shikhoge? 🤷‍♂️');
            return;
        } else if (year > 2024) {
            toast('Bhai, agle saal aana! 😂');
            return;
        }

        const emailRegEx = /^[a-zA-Z0-9._%+-]+@(nitjsr\.ac\.in|gmail\.com)$/;
        if (!emailRegEx.test(cleanEmail)) {
            toast('Invalid email! Only @nitjsr.ac.in or @gmail.com are allowed.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('fullName', `${firstName} ${lastName}`);
        formDataToSend.append('registrationNumber', registrationNumber);
        formDataToSend.append('email', email);
        formDataToSend.append('gender', gender);
        formDataToSend.append('programmingLanguages', JSON.stringify(programmingLanguages));
        formDataToSend.append('developmentSkills', JSON.stringify(developmentSkills));

        try {
            setIsLoading(true);
            const response = await fetch('https://formspree.io/f/mrbgpeno', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (response.ok) {
                toast.success("Successfully submitted the form");
                setStep(4);
            } else {
                toast.error("Error submitting the form.");
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            {step === 1 && (
                <StepOne
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                />
            )}
            {step === 2 && (
                <StepTwo
                    formData={formData}
                    handleChange={handleChange}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleSubmit={handleSubmit}
                />
            )}
            {step === 3 && <StepThree formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} isLoading={isLoading} />}
            {step === 4 && <SuccessCard />}
        </div>
    );
};

export default MultiForm;