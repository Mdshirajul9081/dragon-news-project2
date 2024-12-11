import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiInstagram } from "react-icons/fi";
import Qzone1 from "../../../assets/swimming.png"
import Qzone2 from "../../../assets/class.png"
import Qzone3 from "../../../assets/playground.png"


const RightSideNav = () => {
  return (
    <div>
       <div className="p-4 space-y-3">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FcGoogle className="text-2xl"></FcGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-2xl"></FaGithub>
          Login with github
        </button>
       </div>
       <div className="p-4 ">
        <h2 className="text-3xl">Find Us On</h2>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
          <FaFacebook className="mr-3"></FaFacebook>
          <span>facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
          <FiInstagram className="mr-3"></FiInstagram>
          <span>Instagram</span>
        </a>
        
       </div>
       {/* q zone */}
       <div className="p-4 space-y-3">
        <h2 className="text-3xl">Q Zone</h2>
        <img className="bg-black p-4 rounded" src={Qzone1} alt="" />
        <img className="bg-black p-4 rounded" src={Qzone2} alt="" />
        <img className="bg-black p-4 rounded" src={Qzone3} alt="" />
        
        
       </div>
    </div>
  );
};

export default RightSideNav;