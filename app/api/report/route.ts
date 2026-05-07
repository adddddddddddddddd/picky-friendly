import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function POST(req: NextRequest) {
  const { email, restaurant, severity, reason } = await req.json()

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  await notion.pages.create({
    parent: { database_id: process.env.NOTION_REPORT_DATABASE_ID! },
    properties: {
      Email: { title: [{ text: { content: email } }] },
      Restaurant: { rich_text: [{ text: { content: restaurant ?? "" } }] },
      Gravité: { rich_text: [{ text: { content: severity ?? "" } }] },
      Motif: { rich_text: [{ text: { content: reason ?? "" } }] },
    },
  })

  return NextResponse.json({ ok: true })
}
