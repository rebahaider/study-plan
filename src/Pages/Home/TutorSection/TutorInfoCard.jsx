

const TutorInfoCard = ({ tutorInfo }) => {

    const { tutor_name, session_title } = tutorInfo;

    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <img className="rounded-full w-20 h-20 mx-auto mt-4" src="https://i.ibb.co/tL2NRJt/240-F-383258331-D8ima-EMl8-Q3lf7-EKU2-Pi78-Cn0-R7-Kk-W9o.jpg" alt="" />
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tutor_name}</h2>
                    <p>Subject Name: {session_title}</p>
                </div>
            </div>
        </div>
    );
};

export default TutorInfoCard;