'use server'
import { AuthUser } from "@/types/user";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const getUser = async()=>{
    const token = (await cookies()).get("accessToken")?.value as string;
    const user = jwtDecode(token) as AuthUser
    return user
  }

  export default getUser; 