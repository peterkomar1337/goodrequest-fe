import { z } from "zod";

export const donationSchema = z
  .object({
    donationType: z.enum(
      ["shelter", "foundation"],
      "Vyber, komu chceš prispieť",
    ),
    amount: z.number("Zadaj sumu").positive("Suma musí byť väčšia ako 0"),
    shelterId: z.string(),
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
    phone: z
      .string()
      .regex(/^\+42[01]\d{9}$/, "Zadaj slovenské alebo české číslo"),
    consent: z.literal(true, "Bez súhlasu formulár odoslať nemôžeme"),
  })
  .refine(
    (data) => {
      const isForShelter = data.donationType === "shelter";

      if (!isForShelter) return true;

      return data.shelterId !== "";
    },
    { error: "Vyber útulok", path: ["shelterId"] },
  );

export type DonationFormValues = z.infer<typeof donationSchema>;
