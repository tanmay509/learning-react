import Leftcontent from "./leftcontent";
import RightContent from "./rightcontent";

export default function Page1(){
    return <div className="py-10 flex items-center h-[90vh] bg-gray-900">
       
        <LeftContent/>
        <RightContent/>
    </div>
}