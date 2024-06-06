import { Link } from "react-router-dom";


const StudySectionCard = ({ service }) => {
    const { _id,session_title, session_description } = service;
    return (
        <div>
            <div className="p-6 m-4 rounded-md shadow-md bg-gray-100 text-gray-900">
                <div className="mt-6 mb-6">
                    <h2 className="text-xl font-semibold tracking-wide">{session_title}</h2>
                    <p className="text-gray-800">{session_description}</p>
                </div>

                <div className="space-x-4">
                    <Link href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">On Going</span>
                    </Link>
                    <Link to={`/allStudyInfo/${_id}`} className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Read More</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StudySectionCard;