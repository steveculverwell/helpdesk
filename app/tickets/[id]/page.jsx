
async function getTicket(id) {
    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60 // use 0 to opt out of using cache
        }
})

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
