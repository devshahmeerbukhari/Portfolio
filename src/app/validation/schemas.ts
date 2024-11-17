import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z.string().email("Invalid email address"),
  contactNumber: z
    .string()
    .nonempty("Phone Number is required")
    .regex(/^\d+$/, "Phone Number must contain only digits"),
  subject: z.string().nonempty("Subject is required"),
  projectDetails: z
    .string()
    .nonempty("Project Details are required")
    .min(10, "Project Details must be at least 10 characters long"),
});