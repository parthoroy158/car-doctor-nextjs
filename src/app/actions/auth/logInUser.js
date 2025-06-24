"use server"
import bcrypt from "bcrypt";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect"

export const logInUser = async (payload) => {
    const { email, password } = payload
    const userCollection = dbConnect(collectionNameObject.userCollection)
    const user = (await userCollection).findOne({ email })
    console.log("This is the user from the server:", user)
    if (!user) {
        return null
    }
    const isPasswordOk = bcrypt.compare(user.password, password)
    if (!isPasswordOk) {
        return null
    }

    return user;
}