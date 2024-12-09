import { TextLink } from "~/components/nav/text-link";
import { ContentSection } from "~/components/ui/content-section";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="welkom">
        <p>
          Welkom op de website van het{" "}
          <b>Whisky Informatie Centrum Nederland</b>. Het Whisky Informatie
          Centrum Nederland verzamelt en verspreidt informatie over whisky in de
          breedste zin van het product. Of het nu gaat over Schotse, Ierse,
          Amerikaanse, Canadese, Japanse, Duitse, Franse, Oostenrijkse,
          Nederlandse, Spaanse, Zwitserse, Zweedse, Letse, Belgische, Finse,
          Australische, Nieuwzeelandse, Indiase, Pakistaanse of Thaise whisky
        </p>
        <p>
          Het Whisky Informatie Centrum Nederland bezit een uitgebreid archief
          dat bestaat uit boeken, vakbladen, en andere naslagwerken. Vanuit dit
          archief kunnen de meest uiteenlopende vragen over whisky worden
          beantwoord. Deze vragen kunnen bijvoorbeeld gaan over
          productieprocessen of over de chemie van whisky. Vragen die eenvoudig
          zijn te beantwoorden zijn uiteraard kosteloos. Voor vragen die
          uitgebreid onderzoek vereisen zal een vergoeding in rekening worden
          gebracht. De hoogte van die vergoeding zal altijd in overleg worden
          vastgesteld. Voor uw vragen over whisky klik{" "}
          <TextLink href="/contact" title="hier" />.
        </p>
        <div className="my-2 flex flex-col gap-6 overflow-hidden lg:flex-row lg:gap-2">
          <ResponsiveImage
            src="/assets/images/warehouse-1.jpg"
            alt="warehouse"
            className="max-h-fit max-w-fit"
            width={500}
          />
          <ResponsiveImage
            src="/assets/images/distillery-1.jpg"
            alt="distillery"
            className="max-h-fit max-w-fit"
            width={500}
          />
        </div>
        <p>
          Buiten het beantwoorden van vragen over whisky oefent het Whisky
          Informatie Centrum Nederland nog andere activiteiten uit. Een van deze
          activiteiten is het produceren van artikelen over whisky voor het
          Nederlandse whiskyblad <i>Whisky Passion</i>. Ook geeft het Informatie
          Centrum Whisky boeken uit, waarvan de eerste uitgave met als titel{" "}
          <i>&quot;De chemie van Schotse maltwhisky&quot;</i> sinds oktober 2008
          een feit is. De tweede titel{" "}
          <i>&quot;Islay whisky - eiland vol geschiedenis&quot;</i> kwam uit op
          oktober 2010. Voor meer informatie over dit boek en hoe het te
          bestellen, klik <TextLink href="/boeken" title="hier" />.
        </p>
        <p>
          Bij voldoende belangstelling wordt door het Whisky Informatie Centrum
          Nederland twee jaarlijks De Schotse Malt Whisky Cursus georganiseerd.
          De cursus gaat over het productie proces van Schotse maltwhisky en de
          aroma&apos;s die hierin voorkomen. Het cursusboek is{" "}
          <i>&quot;De chemie van Schotse maltwhisky&quot;</i> en de
          whisky&apos;s die worden geproefd relateren aan het productieproces en
          de aroma&apos;s. Voor meer informatie over de cursus, klik{" "}
          <TextLink href="/cursus" title="hier" />.
        </p>
        <div className="my-2 flex flex-col gap-6 overflow-hidden lg:flex-row lg:gap-1">
          <ResponsiveImage
            src="/assets/images/laphroaig-1.jpg"
            alt="laphroaig"
            className="max-h-fit max-w-fit"
            width={1000}
          />
        </div>
      </ContentSection>
    </div>
  );
}
