import z from "zod";

export const FormSchema = z.object({
  firstName: z.string().min(1, { message: "Firstname is required!" }),
  lastName: z.string().min(1, { message: "Lastname is required!" }),
  email: z.string().email({ message: "Email is required!" }),
  mobileNumber: z
    .number()
    .min(10)
    .max(10, { message: "Mobile number must contain 10 digits" })
    .optional(),
  message: z.string().optional(),
});
