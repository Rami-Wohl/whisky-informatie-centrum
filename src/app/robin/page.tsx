import { ContentSection } from "~/components/ui/content-section";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function Robin() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="Robin">
        <p>
          Het <b>Whisky Informatie Centrum Nederland</b> is in 2003 opgericht
          door Robin Brilleman, met als doel het verzamelen en verspreiden van
          kennis over whisky in de breedste zin van het woord.
        </p>
        <p>
          Robin is schrijver, uitgever, fotograaf en cursusleider met een meer
          dan gemiddelde interesse in het product whisky, en Schotse maltwhisky
          in het bijzonder.
        </p>
        <div className="relative flex h-fit flex-col overflow-hidden pt-2 lg:mt-2 lg:block">
          <ResponsiveImage
            src="/assets/images/wijn-en-bier.jpg"
            alt="een glas bier"
            className="float-none mb-8 max-h-fit max-w-fit self-center p-4 lg:float-left lg:mb-4 lg:mr-6 lg:p-0"
            width={250}
          />
          <h3 className="mb-4 text-start text-xl font-semibold">
            Wijn en bier
          </h3>
          <p>
            Zijn interesse ontstond echter via een omweg. Tijdens zijn horeca
            opleiding (SVH) raakte hij gefascineerd door wijn en gaf hieraan
            uiting door wijnboeken te kopen, het wijncertificaat van de SVH te
            behalen en onder meer bezoeken te brengen aan het Bordeaux gebied in
            Frankrijk en diverse gebieden in Spanje en Portugal. De fascinatie
            werd doorgezet door de wijnacademie, de hoogste opleiding in
            Nederland op het gebied van wijn, te gaan volgen en hier in 1989 als
            vinoloog af te studeren. Door verandering van werkgever werd zijn
            horizon verbreed en ging hij zich verdiepen in het bier. Er werden
            weer boeken gekocht, het SVH biercertificaat werd gehaald en er werd
            weer een uitvoerig reisverslag geschreven, ditmaal over zijn
            rondreis langs alle Nederlandse en Belgische Trappistenkloosters
            (ook de kloosters die geen bier brouwden, maar wel andere
            ambachtelijke producten maakten).
          </p>
        </div>
        <div className="relative flex h-fit flex-col overflow-hidden pt-2 lg:mt-2 lg:block">
          <ResponsiveImage
            src="/assets/images/whisky-cask.jpg"
            alt="een vat whisky"
            className="float-none mb-8 max-h-fit max-w-fit self-center p-4 lg:float-right lg:mb-4 lg:ml-6 lg:p-0"
            width={300}
          />
          <h3 className="mb-4 text-start text-xl font-semibold">Whisky</h3>
          <p>
            Toen hij zich in het café eens liet ontvallen dat hij whisky niet
            lekker vond, werd hem door zijn metgezel op die avond snel duidelijk
            gemaakt hoe onterecht dit was. Hij kreeg drie &quot;single
            malts&quot; te proeven, en een nieuwe interesse was geboren. Na
            diverse boeken en een reis naar Schotland (met bezoek aan een aantal
            distilleerderijen) rees het plan om een boek te gaan schrijven over
            alle single maltwhisky producerende distilleerderijen in Schotland.
            Om daarvoor een goede basis te leggen, werd eerst de
            liquoristenopleiding gevolgd, zodat hij in 1995 afstudeerde als
            liquorist aan de wijnacademie.
          </p>
        </div>
        <div>
          <div className="relative h-fit overflow-hidden pt-2 lg:mt-2 lg:block">
            <ResponsiveImage
              src="/assets/images/ardbeg-1.jpg"
              alt="ardbeg distillery"
              className="float-none mb-8 max-h-fit w-full p-4 lg:float-left lg:mb-4 lg:mr-6 lg:w-auto lg:p-0"
              width={250}
            />
            <h3 className="mb-4 text-start text-xl font-semibold">Schotland</h3>
            <span>
              Het jaar daarop werd begonnen met de vele reizen naar Schotland,
              want de meer dan 100 distilleerderijen waren onmogelijk in één
              keer te bezoeken. Omdat het ditmaal de bedoeling was het boek
              daadwerkelijk uit te geven, werd de zaak ook professioneler
              aangepakt. Een computer werd aangeschaft, een standaard
              vragenlijst werd opgesteld en van elke distilleerderij werden
              zowel foto&apos;s als dia&apos;s genomen.{" "}
            </span>
            <ResponsiveImage
              src="/assets/images/whisky-passion.jpg"
              alt="whisky passion magazine"
              className="float-right my-4 ml-6 max-h-fit max-w-fit p-4 lg:p-0"
              width={140}
            />
            <span>
              Al met al duurde het ruim drie jaar voor het boek af begon te
              raken. In de tussentijd werd hem, na enkele ontmoetingen met
              Michael Jackson (The Malt Whisky Companion, The Beer Hunter)
              gevraagd voor het Engelstalige glossy{" "}
              <i>&quot;Whisky Magazine&quot;</i> te schrijven. Ervaring met
              publicatie had hij intussen al opgedaan bij het schrijven voor het
              Nederlandse magazine <i>&quot;De Kiln&quot;</i>, verenigingsblad
              van de Usquebaugh Society. Tegenwoordig verschijnen de meeste
              artikelen van zijn hand in het Nederlandstalige{" "}
              <i>&quot;Whisky Passion&quot;</i>.
            </span>
          </div>
        </div>
        <h3 className="text-start text-xl font-semibold">Boeken</h3>
        <p>
          In november 2001 kwam het boek dan eindelijk officieel uit, onder de
          titel:{" "}
          <i>
            &quot;Schotse Malt Whisky; Een rondreis langs de distilleerderijen
            van Schotland&quot;
          </i>
          , in een oplage van ruim 4200 exemplaren. Binnen anderhalf jaar was
          het boek bij de uitgever uitverkocht. Een nieuwe, geactualiseerde
          uitgave is inmiddels al weer op de markt als{" "}
          <i>
            &quot;De Gids - Schotse Malt Whisky - Alle distilleerderijen van
            Schotland&quot;
          </i>
          . Na een korte schrijfpauze ontstond het idee om een nieuw boek te
          gaan schrijven, dat zich ditmaal volledig zou concentreren op het
          productieproces. Om hiertoe een goed inzicht te krijgen, werd stage
          gelopen bij vier Schotse distilleerderijen, zodat alle ins en outs van
          het productieproces goed konden worden bestudeerd.
        </p>
        <p>
          Door de vele enthousiaste reacties van whiskyliefhebbers die graag
          meer willen weten over hun favoriete drank is toen echter besloten om
          het verzamelde materiaal om te vormen tot een cursus. Deze cursus
          bestaat uit twee korte opleidingen van in totaal vijf avonden, waarin
          per avond acht tot tien single maltwhisky&apos;s worden geproefd die
          refereren aan de gebruikte grondstoffen, productiemethodes en smaken.
        </p>
        <p>
          De inhoud van deze cursus heeft vervolgens weer haar weerslag gevonden
          in het boek <i>&quot;De Chemie van Schotse maltwhisky&quot;</i>, dat
          in eigen beheer is uitgegeven en dat een van de redenen is voor het
          oprichten van het Whisky Informatie Centrum Nederland. In 2010 kwam
          het boek
          <i>&quot;Islay, Whisky-eiland vol geschiedenis&quot;</i> uit na
          aanleiding voor de liefde van het Schotse eiland Islay.
        </p>
      </ContentSection>
    </div>
  );
}
