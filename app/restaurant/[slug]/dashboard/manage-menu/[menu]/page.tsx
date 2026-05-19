export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ slug: string; menu: string }>
}) {
  const { menu } = await params
  return <p>{menu}</p>
}
