import { ContentSection } from "~/components/ui/content-section";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function Agenda() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="Agenda">
        <p>
          In deze agenda staat op welke evenementen het Whisky Informatie
          Centrum Nederland en Robin Brilleman aanwezig zijn. U kunt hier de
          boeken van Robin aanschaffen en eventueel laten signeren. Ook kan er
          informatie worden ingewonnen over de activiteiten van het Whisky
          Informatie Centrum, zoals over cursussen en lezingen.
        </p>
        <p>
          <b>Op dit moment zijn er geen activiteiten.</b>
        </p>
        <div className="my-2 flex flex-col gap-6 overflow-hidden lg:flex-row lg:gap-1">
          <ResponsiveImage
            src="/assets/images/signeren.jpg"
            alt="cursus"
            className="max-h-fit max-w-fit"
            width={1000}
          />
        </div>
      </ContentSection>
    </div>
  );
}
