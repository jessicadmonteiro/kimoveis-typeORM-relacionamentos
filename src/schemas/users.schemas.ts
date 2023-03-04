import { z } from "zod"

const userCreateSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().min(4).max(120)
})

const userUpdateSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().min(4).max(120)
}).omit({
    admin: true,
    password: true
})

const returnUserSchema = userCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.date().nullable()
}).omit({
    password: true
})

const arrayUserSchema = returnUserSchema.array()

const updateUserSchema = userCreateSchema.partial()


export {
    userCreateSchema,
    returnUserSchema,
    arrayUserSchema,
    updateUserSchema,
    userUpdateSchema
}