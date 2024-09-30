import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert'
const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const handleUpdateCoffee = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name,quantity,supplier,taste,category,details,photo};
        console.log(updateCoffee);
        form.reset();
        
        fetch(`http://localhost:3000/coffee/${coffee._id}`,{
          method:'put',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount > 0)
          {
            swal({
              title: "Success",
              text: "Updated data successfully..!!!",
              icon: "success",
            })
          }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h4 className="text-3xl font-bold mb-3">Update a coffee</h4>
            <form onSubmit={handleUpdateCoffee}>
                {/*row for Name & Quality*/}
                <div className="md:flex mb-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={coffee.name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={coffee.quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*row for supplier & test */}
                <div className="md:flex mb-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={coffee.supplier} placeholder="Enter the coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={coffee.taste} placeholder="Enter the coffee test" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row for category & details */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={coffee.category} placeholder="Enter the category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={coffee.details} placeholder="Enter the details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row for photo url */}
                <div className="mb-3">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={coffee.photo} placeholder="Enter the photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button className="btn btn-block mt-3 hover:bg-[#F4F3F0]">Update Coffee</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;