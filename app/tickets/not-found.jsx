import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>We hit a brick wall</h2>
        <p>Can't find that ticket</p>
        <p>Go Back to <Link href="/tickets">Ticket page</Link></p>
    </main>
  )
}
