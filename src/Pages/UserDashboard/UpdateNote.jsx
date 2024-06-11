import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateNote = () => {
    const { user } = useContext(AuthContext);
    const {_id,title,description} = useLoaderData()

    const handleNotes = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const title = form.title.value;
        const description = form.description.value;
        const note = { email, title, description };
        console.log(note);

        // add notes information to the server site
        try {
            const res = await axios.patch(`http://localhost:5000/notes/${_id}`, note);
            console.log('response', res.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Note Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data not saved",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div>
           <h2 className="text-3xl py-2 mt-4 text-center font-bold uppercase text-[#5BBF96]">Update your note</h2>
            <div className="bg-base-200">
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
                                <input type="text" name="title" defaultValue={title} placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Update Note</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateNote;