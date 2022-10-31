import Vespa from "../components/assets/vespa.png";
import "../components/assets/css/navbar.css";
import Finish from "../components/assets/Finsihed.png"
import "../components/assets/css/profile.css"
import Geprek from '../components/assets/menu/sambelMatah.png'
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import {useQuery} from "react-query"
import {API} from "../config/api"

function ProfilePartner() {
   const navigate = useNavigate()
   const handleEditProfile = () => {
      navigate('/edit-profile-partner')
   }

   const [state] = useContext (UserContext)
   let id = state.user.id
   const { data: profile } = useQuery("profileCache", async () => {
    const response = await API.get(`/user/${id}`);
    return response.data.data;
  });
  
    return (
     <div className="container">
        <div className="d-md-flex justify-content-space-between">
            <div className="justify-content-start ml-5 mr-5 mt-5 ">
                <div className="mb-3 title-edit">Profile Partner</div>
                <div className="d-md-flex">
                    <div className="justify-content-start">
                    <img
                src={
                  profile?.image === "http://localhost:5000/uploads/"
                    ? Geprek
                    : profile?.image
                }
                alt=""
                width={250}
              ></img>
                        
                    </div>
                    <div className="justify-content-end ml-3">
                        <div className="mb-3">
                            <h5 className="subtitle-edit">Nama Partner</h5>
                            <span className="isiProfile-edit">{profile?.fullname}</span>
                        </div>
                        <div className="mb-3">
                            <h5 className="subtitle-edit">Email</h5>
                            <span className="isiProfile-edit">{profile?.email}</span>
                        </div>
                        <div>
                            <h5 className="subtitle-edit">Phone</h5>
                            <span className="isiProfile-edit">{profile?.phone}</span>
                        </div>
                    </div>
                </div>
                <button className="btn-block btn-edit-css mt-2 text-white" onClick={handleEditProfile}>Edit Profile</button>
                
            </div>
            <div className=" mt-5 ml-auto">
                <div className="title-edit">History Order</div>
                <div  className="d-md-flex p-3 bg-white  border"  >
                    <div className="justify-content-start">
                        <h5 className="history-title">Andi</h5>
                        <h5 className="history-day"><span className="font-weight-bold">Saturday</span>, 12 March 2021</h5>
                        <span className="history-ttl">Total : Rp 45.000</span>
                    </div>
                    <div className="justify-content-end ml-5">
                        <span className="waysfood">WaysFood</span>
                        <img src={Vespa} alt=''></img>
                        <div>
                            <img src={Finish} alt=''></img>
                        </div>
                        
                    </div>
                </div>
               
                
            </div>
        </div> 
            
      </div>
    );
  }
  export default ProfilePartner;