// import { auth, currentUser } from '@clerk/nextjs/server';
"use client"
import { UserButton } from "@clerk/nextjs";

const ProtectedPage = async () =>{
    // const user = await currentUser();
    // const {userId} = auth()
    return(
        <div>
           <UserButton 
           afterSignOutUrl="/"
           />
            {/* User: {user?.firstName}
            User: {userId} */}
        </div>
    )
}

export default ProtectedPage