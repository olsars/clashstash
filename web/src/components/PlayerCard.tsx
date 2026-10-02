export default function PlayerCard({name, wins, losses}){
    return (
        <article>
            <h1 className="text-center text-lg font-medium text-blue-400">{name}'s Card</h1>
            <p className="text-center mt-2 text-sm text-blue-600">  Wins: {wins} </p>
             <p className="text-center mt-2 text-sm text-blue-600">  Losses: {losses} </p>
        </article>
    )
}