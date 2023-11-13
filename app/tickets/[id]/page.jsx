import { notFound } from "next/navigation";

// what to do when page hasn't been pre rendered
export const dynamicParams = true;

// function to run ahead and get ids to build static pages and routes
export async function getStaticParams() {
    const res = await fetch('http://localhost:4000/tickets/')
    const tickets = await res.json()

    return tickets.map((ticket) => {
        id: ticket.id
    })
}


async function getTicket(id) {
    
    //imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            // dont set this to 0 if you are using static params
            revalidate: 60 // use 0 to opt out of using cache
        }
})

// if not ok then manually serve 404
// notFound() serves it up
if (!res.ok) {
    notFound();
}

return res.json()
}  
export default async function TicketDetails({params}) {

    const ticket = await getTicket(params.id)
    
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
