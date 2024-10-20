import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

function AcordianDem() {
    return (
        <div>
            <Accordion type="single" collapsible className="w-96 m-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            
            </Accordion>
        </div>
    );
}

export default AcordianDem;