import PlayerCard from "@/components/PlayerCard";
import DeckLineup, { type CardInformation } from "@/components/DeckLineup";
const sampleDeck: CardInformation[] = [{
    id: 1,
    name: "Knight",
    elixir_cost: 3,
    image: {
      src: "/cards/skeletons.jpg",
      title: "Photo of the Knight"
    }, 
  },
    {
    id: 2,
    name: "Archers",
    elixir_cost: 3,
    image: {
      src: "/cards/skeletons.jpg",
      title: "Photo of the Archers"
    },
    },
     {
    id: 3,
    name: "Skeletons",
    elixir_cost: 1,
    image: {
      src:   "/cards/skeletons.jpg",
      title: "Photo of the Skeletons"
    },
    },
    {
    id: 4,
    name: "Ice Spirit",
    elixir_cost: 1,
    image: {
      src: "/cards/knight.jpg",
      title: "Photo of the Archers"
    },
    },
  ]
export default function Home() {
  return (
    <main>
      <h1 className="flex-none text-xl text-center font-bold bg-blue-800">Clashstash</h1>
       <PlayerCard name="Sam" wins="12" losses="2"/>
       <DeckLineup cards={sampleDeck} />
    </main>
  );
}