
'use server'

import User from "@/models/User"
import { connectToDatabase } from "./db"

export const createUser = async(user) => {
    try {
        await connectToDatabase()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        return JSON.parse(JSON.stringify("Failed to create user " + error))

    }
}