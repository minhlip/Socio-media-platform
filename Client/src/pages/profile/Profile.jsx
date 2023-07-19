import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import {
  useQuery, useQueryClient, useMutation
} from '@tanstack/react-query' 
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";

const Profile = () => {
  const [openUpdate,setOpenUpdate] = useState(false)
  const queryClient = useQueryClient()
  const {currentUser} = useContext(AuthContext)
  const userId = parseInt(useLocation().pathname.split("/")[2])
  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );
  const mutation = useMutation(
    (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", {userId});
    },
    {
      onSuccess: () => {  
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );
  let cover = data?.coverPic;
  let profilePic = data?.profilePic;
  let name = data?.name;
  let city = data?.city;
  let website = data?.website;
  const handleFollow = () =>{
    mutation.mutate(relationshipData.includes(currentUser.id));
  }
  return (
    <div className="profile">
      <div className="images">
        <img
          src={"/upload/"+cover}
          alt=""
          className="cover"
        />
        <img
          src={"/upload/" + profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span className="name">{name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{website}</span>
              </div>
            </div>
            {rIsLoading 
            ? <div className="loading">Loading</div> 
            : userId === currentUser.id 
            ? (<button onClick={()=>setOpenUpdate(true)}>Update</button>) 
            : (<button onClick={handleFollow}>{relationshipData.includes(currentUser.id) 
            ? "Following" 
            : "Follow"}
            </button>)}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts userId={userId}/>
      </div>
      {openUpdate && <Update 
      setOpenUpdate={setOpenUpdate} 
      user={data}
      />}
    </div>
  );
};

export default Profile;