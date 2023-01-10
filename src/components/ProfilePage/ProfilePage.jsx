import NewPostContainer from "./NewPost/NewPostContainer";
import Profile from "./Profile/Profile";

const ProfilePage = (props) => {
   return (
      <>
         <Profile />
         <NewPostContainer store={props.store} />
      </>
   );
};

export default ProfilePage;
