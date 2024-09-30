import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:3000/coffee/${_id}`, {
                        method: 'Delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                  swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                  });
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between w-full">
                    <div className="pl-6">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity:{quantity}</p>
                        <p>Supplier:{supplier}</p>
                        <p>Taste:{taste}</p>
                        <p>Category:{category}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-3">
                            <button className="btn">View</button>
                           <Link to={`updateCoffee/${_id}`}>
                           <button className="btn">Edit</button>
                           </Link>
                            <button className="btn" onClick={() => handleDelete(_id)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;