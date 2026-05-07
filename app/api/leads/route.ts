import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function POST(req: NextRequest) {
  const { email, restaurant, dishes, allergies, diets, reservationTime } = await req.json()

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  await notion.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID! },
    properties: {
      Email: { title: [{ text: { content: email } }] },
      Restaurant: { rich_text: [{ text: { content: restaurant ?? "" } }] },
      Dishes: { rich_text: [{ text: { content: dishes ?? "" } }] },
      Allergies: { rich_text: [{ text: { content: allergies ?? "" } }] },
      Diets: { rich_text: [{ text: { content: diets ?? "" } }] },
      "Reservation time": { rich_text: [{ text: { content: reservationTime ?? "pending" } }] },
    },
  })

  return NextResponse.json({ ok: true })
}
