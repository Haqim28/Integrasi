import "../components/assets/css/profile.css"
import Ceklis from "../components/assets/ceklis.png"
import Cancel from "../components/assets/cancel.png"




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
                        <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Sugeng No Pants</td>
                        <td>Cileungsi</td>
                        <td>Paket Geprek</td>
                        <td className="text-warning">Waiting Approve</td>
                        <td className="text-center"> <button className="bg-danger text-white btn-light">cancel</button> <button className="bg-success text-white btn-light ">Approve</button> </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2</th>
                        <td>Haris Gams</td>
                        <td>Serang</td>
                        <td>Paket Geprek</td>
                        <td className="text-success">Success</td>
                        <td className="text-center"> <img src={Ceklis} alt="" /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">3</th>
                        <td>Aziz Union</td>
                        <td>Bekasi</td>
                        <td>Paket Geprek</td>
                        <td className="text-danger">Cancel</td>
                        <td className="text-center"> <img src={Cancel} alt="" /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2</th>
                        <td>Haris Gams</td>
                        <td>Serang</td>
                        <td>Paket Geprek</td>
                        <td className="text-success">Success</td>
                        <td className="text-center"> <img src={Ceklis} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
           
    </div>
    );
  }
  export default IncomeTransaction;