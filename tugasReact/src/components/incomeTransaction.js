import "../components/assets/css/profile.css"


function IncomeTransaction() {
    return (
    <div className="container">
        <div className="container mt-5 ml-4">
            <h2>Income Transaction</h2>
            <div className="table-responsive bg-white">
                <table class="table table-bordered">
                    <thead class="bg-white">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Products Order</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
           
    </div>
    );
  }
  export default IncomeTransaction;