import { z } from "zod";
import type { DonationFormValues } from "@/lib/donationSchema";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://frontend-assignment-api.goodrequest.dev/api/v1";

const shelterSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const sheltersResponseSchema = z.object({
  shelters: z.array(shelterSchema),
});

export type Shelter = z.infer<typeof shelterSchema>;

export async function fetchShelters(): Promise<Shelter[]> {
  const response = await fetch(`${API_URL}/shelters`);

  if (!response.ok) {
    throw new Error("Útulky sa nepodarilo načítať");
  }

  const data = sheltersResponseSchema.parse(await response.json());

  return data.shelters;
}

export type ContributePayload = {
  contributors: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }[];
  shelterID: number | null;
  value: number;
};

export function toContributePayload(
  values: DonationFormValues,
): ContributePayload {
  return {
    contributors: [
      {
        // API rejects an empty firstName workaround
        firstName: values.firstName || " ",
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      },
    ],
    shelterID:
      values.donationType === "shelter" ? Number(values.shelterId) : null,
    value: values.amount,
  };
}

const contributeResponseSchema = z.object({
  messages: z.array(
    z.object({
      message: z.string(),
      type: z.enum(["SUCCESS", "ERROR", "WARNING", "INFO"]),
    }),
  ),
});

export async function contribute(payload: ContributePayload) {
  const response = await fetch(`${API_URL}/shelters/contribute`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Formulár sa nepodarilo odoslať");
  }

  const data = contributeResponseSchema.parse(await response.json());
  const error = data.messages.find((item) => item.type === "ERROR");

  if (error) {
    throw new Error(error.message);
  }
}

const statsSchema = z.object({
  contributors: z.number(),
  contribution: z.number().nullable(),
});

export type Stats = z.infer<typeof statsSchema>;

export async function fetchStats(): Promise<Stats> {
  const response = await fetch(`${API_URL}/shelters/results`);

  if (!response.ok) {
    throw new Error("Štatistiku sa nepodarilo načítať");
  }

  return statsSchema.parse(await response.json());
}
