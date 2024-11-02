import React from 'react';

const ResourcePage: React.FC = () => {
    return (
        <section className='p-4'>
            <ul className="timeline timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-end timeline-box w-full">
                        <details className="collapse collapse-arrow">
                            <summary className="collapse-title font-medium">Day 1</summary>
                            <div className="collapse-content">
                               <div className='shadow-xl shadow-base-200 px-4 py-2 rounded mb-4'>
                                <h1 className='font-semibold mb-2'>Development Environment Setup</h1>
                                <a href='https://www.youtube.com/watch?v=0gU-qrq3gjU&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=4&ab_channel=CodeHelp-byBabbar' target='_blank' className='bg-teal-500 px-4 py-2 rounded'>view</a>
                               </div>
                               <div className='shadow-xl shadow-base-200 px-4 py-2 rounded'>
                                <h1 className='font-semibold mb-2'>Basic HTML Structure & Tags</h1>
                                <a href='https://www.youtube.com/watch?v=KdWPGqT5GwE&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=5&ab_channel=CodeHelp-byBabbar' target='_blank' className='bg-teal-500 px-4 py-2 rounded'>view</a>
                               </div>
                            </div>
                        </details>
                    </div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr />
                    {/* <hr className="bg-teal-500" /> */}
                </li>
                {/* <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box">Day 4</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end timeline-box">Day 5</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                </li> */}
            </ul>
        </section>
    );
};

export default ResourcePage;