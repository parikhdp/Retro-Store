import { db } from "@/configs/db";
import { usersTable } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const {user}= await req.json();
    //Check if user exists
    const userData=await db.select().from(usersTable).where((eq(usersTable.email,user?.primaryEmailAddress.emailAddress)));

    if(userData?.length<=0)
    {
        //If not create a new user
        const result=await db.insert(usersTable).values({
            name:user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            image:user?.imageUrl
        }).returning(usersTable)

        return NextResponse.json(result[0]);
    }
    

    return NextResponse.json(userData[0]);
}