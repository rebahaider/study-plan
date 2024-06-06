import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";



const AllStudyInfo = () => {

    const { id } = useParams();
    console.log(id);


    const { isPending, data } = useQuery({
        queryKey: ['allStudyInfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/studyServices/${id}`);
            return res.json();
        }

    });
    if (isPending) {
        return <span className="loading loading-spinner loading-lg text-error"></span>
    }


    const { session_title, tutor_name, average_rating, session_description, registration_start_date, registration_end_date, class_start_time, class_end_date, session_duration, registration_fee, reviews_of_the_study_session_provided_by_students } = data;
    console.log(data);

    return (
        <div>
            <h2 className="text-3xl py-2 mt-4 text-center font-bold uppercase text-[#5BBF96]">Details About {session_title}</h2>
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
                </div>

            </div>
        </div>
    );
};

export default AllStudyInfo;