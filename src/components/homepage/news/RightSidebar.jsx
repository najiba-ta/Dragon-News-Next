import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const RightSidebar = () => {
    return (
        <div>
            <h2 className="font-bold text-lg mb-4">Login with</h2>
          <div className="flex flex-col gap-4">
              <button className="btn btn-dash text-yellow-500"><FaGoogle /> Login with google</button>
            <button className="btn btn-dash text-pink-600"><FaGithub /> Login with github</button>
          </div>
        </div>
    );
};
//relmlk;we'we

export default RightSidebar;