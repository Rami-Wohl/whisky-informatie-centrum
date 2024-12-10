import { ExternalLink } from "~/components/nav/text-link";
import { ContentSection } from "~/components/ui/content-section";

function LinkSectionTitle({ title }: { title: string }) {
  return <h3 className="text-lg text-amber-900">{title}</h3>;
}

export default function Links() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="Links">
        <div className="mt-8 flex w-full flex-col gap-4">
          <LinkSectionTitle title="Whisky reizen" />
          <ul className="mb-6 list-inside list-disc">
            <li>
              <ExternalLink
                href="https://www.cruise-specialisten.nl/cruise-specialisten/teun-van-wel/"
                title="Teun van Wel"
              />
            </li>
            <li>Travel4Reasons</li>
            <li>Collega&apos;s</li>
            <li>Marcel van Gils</li>
            <li>Hans Offringa</li>
            <li>RareWhisky</li>
          </ul>
          <LinkSectionTitle title="Whiskyproeverijen" />
          <ul className="mb-6 list-inside list-disc">
            <li>Whiskybus</li>
            <li>Henri Goossen Whisky Entertaining</li>
          </ul>
          <LinkSectionTitle title="Tijdschriften" />
          <ul className="mb-6 list-inside list-disc">
            <li>
              <ExternalLink
                href="https://whiskypassion.nl/"
                title="Whisky Passion"
              />
            </li>
          </ul>
          <LinkSectionTitle title="Video" />
          <ul className="mb-6 list-inside list-disc">
            <li>Islay jaren 60</li>
            <li>Joseph William Hobbs</li>
            <li>Potstill Festival 2013</li>
            <li>Nederland Whiskyland</li>
          </ul>
          <LinkSectionTitle title="Importeurs" />
          <ul className="mb-6 list-inside list-disc">
            <li>Van Wees</li>
            <li>Bresser & Timmer</li>
            <li>Whisky Import Nederland</li>
          </ul>
          <LinkSectionTitle title="Aanbevolen overnachting Schotland" />
          <ul className="mb-6 list-inside list-disc">
            <li>Glentorets B&B, Tomintoul</li>
            <li>Kincardine Lodge B&B, Lochranza, Isle of Arran</li>
          </ul>
          <LinkSectionTitle title="Cafe's / Restaurants" />
          <ul className="mb-6 list-inside list-disc">
            <li>Whisky Cafe L&B, Amsterdam</li>
            <li>
              {" "}
              <ExternalLink
                href="http://www.dedriedorstigeherten.nl/"
                title="Proeflokaal de drie dorstige herten, Utrecht"
              />
            </li>
            <li>Cafe in de Wildeman, Amsterdam</li>
            <li>Cafe &apos;t Arendsnest, Amsterdam</li>
            <li>Proeflokaal &apos;t Gelagh, Oisterwijk</li>
            <li>Schots restaurant Hielander, Alkmaar</li>
            <li>Restaurant De Koebrug, Stavoren</li>
            <li>DéGust eten, bieren, wijnen, gedistilleerd, Hoogeveen</li>
            <li>Restaurant ZuS, Roosendaal </li>
          </ul>
          <LinkSectionTitle title="Festivals" />
          <ul className="mb-6 list-inside list-disc">
            <li>International Whisky Festival, Den Haag</li>
            <li>Whisky weekend Amsterdam</li>
            <li>Maltstock, bij Nijmegen</li>
            <li>Het Pot Still Festival, Amersfoort</li>
            <li>Whisky Festival Noord Nederland</li>
            <li>Whisky & Rum aan de zee, IJmuiden</li>
            <li>Whisky On Board, Goudestein</li>
          </ul>
          <LinkSectionTitle title="De boeken op deze website zijn ook te koop bij:" />
          <ul className="mb-6 list-inside list-disc">
            <li>Kookboekwinkel</li>
            <li>Van Wees, Amersfoort</li>
            <li>Whiskyboeken.nl</li>
            <li>Algemene Boekhandel, Amersfoort</li>
          </ul>
          <LinkSectionTitle title="Whisky Miniaturen" />
          <ul className="mb-6 list-inside list-disc">
            <li>Alex de Vries</li>
            <li>Leon Theuws</li>
            <li>Diversen</li>
            <li>Pagodawhisky</li>
            <li>Glenlochy</li>
          </ul>
        </div>
      </ContentSection>
    </div>
  );
}
