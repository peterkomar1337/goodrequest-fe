import { z } from "zod";

const contributorFields = {
  amount: z.number("Zadaj sumu").positive("Suma musí byť väčšia ako 0"),
  firstName: z
    .string()
    .max(20, "Meno môže mať najviac 20 znakov")
    .refine(
      (value) => value === "" || value.length >= 2,
      "Meno musí mať aspoň 2 znaky",
    ),
  lastName: z
    .string()
    .min(2, "Priezvisko musí mať aspoň 2 znaky")
    .max(30, "Priezvisko môže mať najviac 30 znakov"),
  email: z.email("Zadaj platný email"),
  phone: z.string().regex(/^\+42[01]\d{9}$/, "Zadaj číslo v správnom tvare"),
  consent: z.literal(true, "Bez súhlasu formulár odoslať nemôžeme"),
};

export const donationSchema = z.discriminatedUnion("donationType", [
  z.object({
    ...contributorFields,
    donationType: z.literal("shelter"),
    shelterId: z.string().min(1, "Vyber útulok"),
  }),
  z.object({
    ...contributorFields,
    donationType: z.literal("foundation"),
    shelterId: z.string(),
  }),
]);

export type DonationFormValues = z.infer<typeof donationSchema>;
