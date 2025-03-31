"use client"
import { ai_mock_interview } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import Webcam from 'react-webcam'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
        console.log(params.interviewId);
        GetInterviewDetails();
    }, []);

    /** Fetches interview details from the database via mockId or interviewId */
    const GetInterviewDetails = async () => {
        const result = await db.select().from(ai_mock_interview)
            .where(eq(ai_mock_interview.mockId, params.interviewId));

        setInterviewData(result[0] || null); // Ensure interviewData is null if no result
    };

    return (
        <div className='my-10 flex flex-col'>
            <h2 className='font-bold text-2xl mb-6 text-center'>Let's Start Your Interview</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Display Interview Details Only if Data is Available */}
                {interviewData && (
                    <div className='flex flex-col my-5 items-start text-left w-full max-w-lg'>
                        {/* Interview Details */}
                        <div className='flex flex-col p-5 rounded-lg border mb-5'>
                            <h2 className='text-lg'><strong>Job Role/Job Position:</strong> {interviewData.jobPosition}</h2>
                            <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc}</h2>
                            <h2 className='text-lg'><strong>Years of Experience:</strong> {interviewData.jobExperience}</h2>
                        </div>

                        {/* Information Section */}
                        <div className='p-5 rounded-lg border-yellow-300 bg-yellow-100'>
                            <h2 className='flex gap-2 items-center text-yellow-500'>
                                <Lightbulb /><span> Information</span>
                            </h2>
                            <h2 className='mt-3 text-yellow-600'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                        </div>
                    </div>
                )}

                {/* Webcam and Button Section */}
                <div className='flex flex-col items-center'>
                    {webCamEnabled ? (
                        <Webcam mirrored={true} style={{ height: 300, width: 300 }} />
                    ) : (
                        <>
                            <WebcamIcon className='h-72 w-72 my-5 p-10 bg-secondary rounded-lg border' />
                            <Button variant="ghost" className='w-[300px] mt-4' onClick={() => setWebCamEnabled(true)}>
                                Enable Web Cam & Microphone
                            </Button>
                        </>
                    )}
                    {/* Start Button Below Enable Web Cam Button */}
                    <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
                    <Button className='w-[300px] mt-5'>Start Interview</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Interview;
