'use client'

import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const RightSidebar =() => {

  const handleGoogleSignin =async  () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data,"data");
  }
  const handleGithubSignin =async  () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data,"data");
  }
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-4">
        <button className="btn btn-dash text-yellow-500" onClick={handleGoogleSignin}><FaGoogle /> Loginwith google</button>
        <button className="btn btn-dash text-pink-600" onClick={handleGithubSignin}><FaGithub /> Login with github</button>
      </div>
    </div>
  );
};


export default RightSidebar;