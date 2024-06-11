import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageNotes = () => {

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`http://localhost:5000/notes/${id}`);
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }

                } catch (error) {
                    console.error(error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deletaing the note",
                        icon: "error"
                    });
                }
            }
        });
    }

    const { data, isPending, refetch } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/notes');
            return res.json();
        }
    });
    if (isPending) {
        return <span className="loading loading-spinner loading-lg text-error"></span>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((noteInfo, index) => <tr key={noteInfo._id}>
                                <th>{index + 1} </th>
                                <td>
                                    <div className="font-bold">{noteInfo.email}</div>
                                </td>
                                <td>{noteInfo.title}</td>
                                <td>{noteInfo.description}</td>
                                <th>
                                    <Link to={`/userDashboard/updateNote/${noteInfo._id}`}><button className="btn btn-accent btn-xs">Update</button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(noteInfo._id)} className="btn btn-error btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageNotes;