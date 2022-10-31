import Vespa from "../components/assets/vespa.png";
import "../components/assets/css/navbar.css";
import Orang from "../components/assets/orang.png";
import Finish from "../components/assets/Finsihed.png";
import "../components/assets/css/profile.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import { useQuery } from "react-query";

function Profile() {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);
//   const [profile, setProfile] = useState(null);
  const id = state.user.id;
  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const { data: profile } = useQuery("profileCache", async () => {
    const response = await API.get(`/user/${id}`);
    return response.data.data;
  });

  return (
    <div className="container">
      <div className="d-md-flex justify-content-space-between">
        <div className="justify-content-start ml-5 mr-5 mt-5 ">
          <div className="mb-3 title-edit">My Profile</div>
          <div className="d-md-flex">
            <div className="justify-content-start" onClick={handleEditProfile}>
              <img
                src={
                  profile?.image === "http://localhost:5000/uploads/"
                    ? Orang
                    : profile?.image
                }
                alt=""
                width={250}
              ></img>
              <button className="btn-block btn-edit-css mt-2 text-white">
                Edit Profile
              </button>
            </div>
            <div className="justify-content-end ml-3">
              <div className="mb-3">
                <h5 className="subtitle-edit">FullName</h5>
                <span className="isiProfile-edit">
                  {profile?.fullname ? profile?.fullname : "-"}
                </span>
              </div>
              <div className="mb-3">
                <h5 className="subtitle-edit">Email</h5>
                <span className="isiProfile-edit">
                  {profile?.email ? profile?.email : "-"}
                </span>
              </div>
              <div>
                <h5 className="subtitle-edit">Phone</h5>
                <span className="isiProfile-edit">
                  {profile?.phone ? profile?.phone : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 ml-auto">
          <div className="title-edit">History Transaction</div>
          <div className="d-md-flex p-3 bg-white  border">
            <div className="justify-content-start">
              <h5 className="history-title">Geprek Bensu</h5>
              <h5 className="history-day">
                <span className="font-weight-bold">Saturday</span>, 12 March
                2021
              </h5>
              <span className="history-ttl">Total : Rp 45.000</span>
            </div>
            <div className="justify-content-end ml-5">
              <span className="waysfood">WaysFood</span>
              <img src={Vespa} alt=""></img>
              <div>
                <img src={Finish} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
