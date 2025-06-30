"use client"
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import Header from "./_components/Header";

export default function Provider({ children }) {

  const { user } = useUser();

  useEffect(() => {
    user && CheckIsNewUser();
  }, [user])

  const CheckIsNewUser = async () => {
    const result = await axios.post('/api/user', {
      user: user
    });

    console.log(result.data);
  }

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

//on the client side