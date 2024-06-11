import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const AllStudyInfo = () => {

    const { id } = useParams();
    const [disable, setDisable] = useState(false);

    const registrationStatus = (registration_end_date) => {
        const currentTime = new Date();
        const endDate = registration_end_date;
        return currentTime > endDate;
    };


    const { isPending, data } = useQuery({
        queryKey: ['allStudyInfo', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/studyServices/${id}`);
            return res.json();
        }

    });

    useEffect(() => {
        if (data) {
            const isRegistrationClosed = registrationStatus(data.registration_end_date);
            setDisable(isRegistrationClosed);
        }
    }, [data]);

    if (isPending) {
        return <span className="loading loading-spinner loading-lg text-error"></span>
    }


    const { session_title, tutor_name, average_rating, session_description, registration_start_date, registration_end_date, class_start_time, class_end_date, session_duration, registration_fee, reviews_of_the_study_session_provided_by_students } = data;
    console.log(data);

    return (
        <div>
            <h2 className="text-3xl py-2 mt-4 text-center font-bold uppercase text-[#5BBF96]">Details About "{session_title}"</h2>
            <div className="p-6 m-4 rounded-md shadow-md bg-gray-100 text-gray-900 mx-auto">
                <div className="mt-6 mb-6">
                    <h2 className="text-xl font-semibold uppercase"><span className="text-2xl">Session Title : </span>{session_title}</h2>
                    <p className="text-gray-800"><span className="text-2xl">Tutor Name : </span><span className="font-bold">{tutor_name}</span></p>
                    <p className="text-gray-800"><span className="text-2xl">Average Rating : </span>{average_rating}</p>
                    <p className="text-gray-800"><span className="text-2xl">Session Description : </span>{session_description}</p>
                    <p className="text-gray-800"><span className="text-2xl">Registration Start Date : </span>{registration_start_date}</p>
                    <p className="text-gray-800"><span className="text-2xl">Registration End Date : </span>{registration_end_date}</p>
                    <p className="text-gray-800"><span className="text-2xl">Class Start Time : </span>{class_start_time}</p>
                    <p className="text-gray-800"><span className="text-2xl">Class End Time : </span>{class_end_date}</p>
                    <p className="text-gray-800"><span className="text-2xl">Session Duration : </span>{session_duration}</p>
                    <p className="text-gray-800"><span className="text-2xl">Registration Fee : </span>{registration_fee}</p>
                    <p className="text-gray-800"><span className="text-2xl">Student Reviews : </span>{reviews_of_the_study_session_provided_by_students}</p>
                    <div className="mt-6">
                        {
                            disable ? (
                                <button className="btn btn-error btn-xs" disabled>Registration Closed</button>
                            ) : (
                                <Link className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Book Now</span>
                                </Link>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllStudyInfo;