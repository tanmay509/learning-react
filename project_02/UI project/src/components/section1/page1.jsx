import LeftContent from "./leftcontent";
import RightContent from "./rightcontent";

export default function Page1(){
    return <div className="py-10 px-18 flex items-center gap-10 h-[90vh] ">
       
        <LeftContent/>
        <RightContent/>
    </div>
}