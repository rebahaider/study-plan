import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const CreateNotes = () => {
    const {user} = useContext(AuthContext);
    
    const handleNotes = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const title= form.title.value;
        const description= form.description.value;
        const note = {email,title,description};
        console.log(note);
    }
    return (
        <div>
            <h2>create notes</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleNotes} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Note</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNotes;