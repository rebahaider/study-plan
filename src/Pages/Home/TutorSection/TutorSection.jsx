import { useQuery } from "@tanstack/react-query";
import TutorInfoCard from "./TutorInfoCard";

const TutorSection = () => {

    const { data, isPending } = useQuery({
        queryKey: ['tutorInfo'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/studyServices');
            return res.json();
        }
    });
    if (isPending) {
        return <span className="loading loading-spinner loading-lg text-error"></span>
    }
    return (
        <div>
            <h2 className="text-3xl border-y-4 py-2 mt-4 mb-4 text-center font-bold uppercase text-[#5BBF96]">Tutor information</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
                {
                    data.map(tutorInfo => <TutorInfoCard key={tutorInfo._id} tutorInfo={tutorInfo}></TutorInfoCard>)
                }
            </div>

        </div>
    );
};

export default TutorSection;