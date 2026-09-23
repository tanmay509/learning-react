import { MoveRight } from "lucide-react"

export default function RightCards(props) {
  return (
    <div className="h-full w-50 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="pic1"
      />
      <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
          1
        </h2>

        <div>
          {/* paragraph on its own line */}
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quasi!
          </p>

          {/* only button + arrow in the row, pushed to opposite ends */}
          <div className="flex items-center justify-between">
            <button>Satisfyied</button>
            <button className="flex items-center justify-center  p-2 mr-16">
              <MoveRight className="size-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}