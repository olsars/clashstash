export interface CardInformation{
    id: number; 
    name: string;
    elixir_cost: number;
    image: {
        src: string;
        title: string;
    }
}

export interface DeckLineupProps{
    cards: CardInformation[];
}

export default function DeckLineup({ cards }: DeckLineupProps){
    return( 
        <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto text-left">
            {cards.map(function (card) {
                return(
                    <div key={card.id}>
                        <img
                            src={card.image.src}
                            className="w-full h-autp"/>
                        <p>{card.name}</p>
                    </div>
                );
            })}
        </div>

    )
}