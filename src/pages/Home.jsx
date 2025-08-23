import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Home() {
  return (
    <div>
      <div className="flex justify-center mt-[33vh] mr-[50vh]">
        <div className="items-left text-left">
          <h1 className="text-5xl">Shindanai Sudprasert</h1>
          <h3 className="text-2xl font-medium pt-3">Student Developer</h3>
          <p className="text-xl font-normal pt-6 max-w-2xl leading-relaxed">
            Based in Thailand, I'm a student developer aspiring to be a software engineer specialized in full-stack development. I'm currently build a project to sharpen my skills, turning my ideas into reality by coding and technology.
          </p>
        </div>
      </div>
      <div className="flex flex-col z-50 justify-center items-center mb-5">
        <Accordion type="single" collapsible className="w-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Placeholder</AccordionTrigger>
            <AccordionContent>
              Web Development
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Placeholder</AccordionTrigger>
            <AccordionContent>
              Web Development
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Placeholder</AccordionTrigger>
            <AccordionContent>
              Web Development
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Placeholder</AccordionTrigger>
            <AccordionContent>
              Web Development
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>  
  );
}



export default Home;
