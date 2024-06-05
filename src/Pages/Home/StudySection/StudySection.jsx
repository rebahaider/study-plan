import { useQuery } from '@tanstack/react-query';
import StudySectionCard from './StudySectionCard';

const StudySection = () => {

    const { data } = useQuery({
        queryKey: ['studyServices'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/studyServices');
            return res.json();
        }
    });

    return (
        <div>
            <h2 className="text-3xl border-y-2 py-2 text-center font-bold uppercase text-[#5BBF96]">About our study session</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    data?.map(service => <StudySectionCard key={service._id} service={service}></StudySectionCard>)
                }
            </div>
        </div>
    );
};

export default StudySection;