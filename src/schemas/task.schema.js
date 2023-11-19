import { z } from "zod";

export const createSchema = z.object({
    title: z.string({
        required_error: "Title is Requiered",
    }),
    description: z.string({
        required_error: "Description is Requiered",
    }),
    date: z.string().datetime().optional(),
})