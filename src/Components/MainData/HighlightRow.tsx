import HighlightCards from "../HighlightCards";

function HightlightRow(){
return (
    <div className="flex flex-wrap gap-6 justify-center">
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
       <HighlightCards title="UV Index" data="3.8" footer="Low" />
    </div>
)
}
export default HightlightRow;