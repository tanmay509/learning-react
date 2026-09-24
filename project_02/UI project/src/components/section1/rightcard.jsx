import RightCardContent from "./rightcardcontent"

export default function RightCards() {
  const professionals = [
    { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop", no: 1, des: "Confident CEO leading startups with bold, strategic vision." },
    { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop", no: 2, des: "Creative marketing director crafting campaigns that inspire audiences." },
    { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop", no: 3, des: "Senior software engineer building scalable, reliable cloud applications." },
    { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop", no: 4, des: "Financial analyst turning complex market data into smart decisions." },
    { img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop", no: 5, des: "Product designer shaping intuitive, human-centered digital experiences." },
    { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop", no: 6, des: "Corporate lawyer defending clients with sharp, meticulous expertise." },
    { img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop", no: 7, des: "Healthcare consultant improving patient outcomes through smart systems." },
    { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop", no: 8, des: "Business strategist guiding companies toward sustainable, profitable growth." },
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop", no: 9, des: "HR manager building diverse, motivated, and high-performing teams." },
    { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop", no: 10, des: "Data scientist unlocking insights from complex, large-scale datasets." }
  ]

  return (
    <div className="flex gap-5 overflow-x-auto p-4">
      {professionals.map((elem) => (
        <RightCardContent
          key={elem.no}
          img={elem.img}
          no={elem.no}
          des={elem.des}
        />
      ))}
    </div>
  )
}