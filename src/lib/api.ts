import { z } from "zod";

const API_URL = "https://frontend-assignment-api.goodrequest.dev/api/v1";

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
