export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="snap-y snap-mandatory pt-16">{children}</main>;
}
