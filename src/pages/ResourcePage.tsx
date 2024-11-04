import React, { useState } from 'react';
import { FaCss3, FaGithub, FaHtml5, FaRegFile } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Resource {
    icon: JSX.Element;
    title: string;
    link: string;
}

interface FormField {
    name: string;
    label: string;
    type: string;
}

interface FormConfig {
    url: string;
    fields: FormField[];
}

interface ResourceData {
    day: number;
    done: boolean;
    resources: Resource[];
    form?: FormConfig;
}

const resourceData: ResourceData[] = [
    {
        day: 1,
        done: true,
        resources: [
            {
                icon: <VscVscode />,
                title: 'Development Environment Setup',
                link: 'https://www.youtube.com/watch?v=0gU-qrq3gjU&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=4&ab_channel=CodeHelp-byBabbar'
            },
            {
                icon: <FaHtml5 />,
                title: 'Basic HTML Structure & Tags',
                link: 'https://www.youtube.com/watch?v=KdWPGqT5GwE&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=5&ab_channel=CodeHelp-byBabbar'
            },
            {
                icon: <FaRegFile />,
                title: 'HTML Cheatsheet',
                link: 'https://filebin.net/2yl42pzq1bnhweml/Html%20Cheatsheet.pdf'
            }
        ]
    },
    {
        day: 2,
        done: true,
        resources: [
            {
                icon: <FaGithub />,
                title: 'Learn Git & GitHub',
                link: 'https://youtu.be/Ez8F0nW6S-w?si=L_U1rCrEICDDY4bA'
            },
            {
                icon: <FaRegFile />,
                title: 'Git Cheatsheet',
                link: 'https://filebin.net/v0l1tmjgdvycx6gu/git-cheat-sheet-education.pdf'
            }
        ],
        form: {
            url: 'https://formspree.io/f/mvgokvar',
            fields: [
                { name: 'name', label: 'Your Name', type: 'text' },
                { name: 'userId', label: 'Github Username', type: 'text' }
            ]
        }
    },
    {
        day: 3,
        done: false,
        resources: [
            {
                icon: <FaCss3 />,
                title: 'Learn Basic CSS (Lecture 13 - 20)',
                link: 'https://www.youtube.com/watch?v=tU4xz1r_aE8&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=13&ab_channel=CodeHelp-byBabbar'
            },
            {
                icon: <FaRegFile />,
                title: 'CSS Cheatsheet',
                link: 'https://filebin.net/iqf2gqrz8m3q5267/CSS%20Cheatsheet.pdf'
            }
        ],
    },
];

const ResourceItem: React.FC<Resource> = ({ icon, title, link }) => (
    <div className='shadow-xl shadow-base-200 px-4 py-2 rounded mb-4'>
        <span>{icon}</span>
        <h1 className='font-semibold mb-2'>{title}</h1>
        <a href={link} target='_blank' rel="noopener noreferrer" className='bg-teal-500 px-4 py-2 rounded'>view</a>
    </div>
);

const DynamicForm: React.FC<{ formConfig: FormConfig }> = ({ formConfig }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(formConfig.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('submitted successfully!');
                setFormData({});
            } else {
                toast.error('submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='shadow -xl shadow-base-200 px-4 py-2 rounded'>
            <form onSubmit={handleSubmit}>
                {formConfig.fields.map((field) => (
                    <div key={field.name} className="mb-4">
                        <label className='mb-2 font-semibold block' htmlFor={field.name}>{field.label}</label>
                        <input
                            className='bg-base-300 p-2 w-full'
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button className={loading ? 'loading loading-spinner text-teal-500 mx-4' : 'bg-teal-500 px-4 py-2 hover:bg-teal-700 rounded'} disabled={loading} type="submit">Submit</button>
            </form>
        </div>
    );
};

const ResourcePage = () => {
    return (
        <section className='p-4'>
            <ToastContainer />
            <ul className="timeline timeline-compact timeline-vertical">
                {resourceData.map((day, index) => (
                    <li key={day.day}>
                        {index > 0 && <hr className={day.done ? "bg-teal-500" : ""} />}
                        <div className="timeline-end timeline-box w-full">
                            <details className="collapse collapse-arrow">
                                <summary className="collapse-title font-medium">Day {day.day}</summary>
                                <div className="collapse-content">
                                    {day.resources.map((resource, idx) => (
                                        <ResourceItem key={idx} {...resource} />
                                    ))}
                                    {day.form && <DynamicForm formConfig={day.form} />}
                                </div>
                            </details>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={day.done ? "text-teal-500 h-5 w-5" : "h-5 w-5"}>
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <hr className={day.done ? "bg-teal-500" : ""} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResourcePage;