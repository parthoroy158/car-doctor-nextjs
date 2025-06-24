"use server";
import bcrypt from "bcrypt";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const { email, name, password } = payload;

    const db = await dbConnect(collectionNameObject.userCollection);
    const user = await db.findOne({ email });

    if (user) {
        console.log("User already exists:", user);
        return { success: false, message: "Email already used" };
    }

    if (!user) {
        const hashPassword = await bcrypt.hash(password, 10)
        payload.password = hashPassword
        const result = await db.insertOne(payload);
        return { success: true, data: result };
    }
};
