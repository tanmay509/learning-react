import { MoveRight } from "lucide-react"

export default function RightCardContent({ img, no, des }) {
  return (
    <div className="relative h-96 w-50 shrink-0 overflow-hidden rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={img}
        alt={`professional-${no}`}
      />

      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <h2 className="bg-white text-black rounded-full h-10 w-10 flex justify-center items-center font-bold shadow-md">
          {no}
        </h2>

        <div>
          <p className="text-white font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {des}
          </p>

          <div className="flex items-center justify-between gap-2 mt-3">
            <button className="bg-blue-700 text-white rounded-full font-bold p-2 shadow-lg">
              Satisfied
            </button>
            <button className="bg-blue-700 text-white rounded-full flex items-center justify-center p-2 shadow-lg">
              <MoveRight className="size-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}