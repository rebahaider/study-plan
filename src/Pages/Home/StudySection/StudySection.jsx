import { useQuery } from '@tanstack/react-query';
import StudySectionCard from './StudySectionCard';

const StudySection = () => {

    const { isPending, data } = useQuery({
        queryKey: ['studyServices'],
        queryFn: async () => {
            const res = await fetch('assignment-12-server-one-flax.vercel.app/studyServices');
            return res.json();
        }
    });
    if (isPending) {
        return <span className="loading loading-spinner loading-lg text-error"></span>
    }

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