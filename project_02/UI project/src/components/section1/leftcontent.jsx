import { MoveUpRight } from "lucide-react";
import HeroText from "./herotext";
import Arraow from "./arrow";

export default function LeftContent() {
    return <div className="h-full w-1/3 flex flex-col justify-between">
        <HeroText/>
        <Arraow/>
    </div>
}