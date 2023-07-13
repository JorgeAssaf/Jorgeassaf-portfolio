import SiteHeader from "@/components/layout/site-header"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  )
}
