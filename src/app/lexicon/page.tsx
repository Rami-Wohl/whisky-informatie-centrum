import { type ReactNode } from "react";
import { ContentSection } from "~/components/ui/content-section";

function DefinitionCard({ title, texts }: { title: string; texts: string[] }) {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <h3 className="text-lg text-amber-900">{title}</h3>
      {texts.map((text, idx) => {
        return (
          <p key={idx} className="mb-2">
            {text}
          </p>
        );
      })}
    </div>
  );
}

function Letter({ children }: { children: ReactNode }) {
  return (
    <h1 className="w-full self-center border-t border-amber-950 pb-2 pt-8 text-center text-2xl font-bold">
      {children}
    </h1>
  );
}

export default function Lexicon() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="Lexicon">
        <div className="mt-8 flex w-full flex-col gap-4">
          <Letter>A</Letter>
          <DefinitionCard
            title="A'BUNADH"
            texts={[
              "Een oud Gaelic woord dat in de Speyside werd gebruikt in de tijd dat men nog whisky bij de distilleerderij kon kopen, direct uit het vat en op vatsterkte. Het woord wordt als “a-boen-ah” uitgesproken en betekent “echt oorspronkelijk van de bron”. Aberlour bottelt een single malt met deze naam.",
            ]}
          />
          <DefinitionCard
            title="ABV"
            texts={[
              "Alcohol By Volume. Het alcoholpercentage uitgedrukt als deel van het totale volume van een vloeistof.",
            ]}
          />
          <DefinitionCard
            title="AGE"
            texts={[
              "Leeftijd. De minimum leeftijd voor Schotse whisky is 3 jaar. Dit betekend dat de new spirit minimaal 3 jaar op eikenhouten fusten gerijpt moet zijn voor het whisky mag heten. Dit geldt niet alleen voor Schotse whisky maar ook voor de rest van de wereld, op drie landen na, te weten Canada, Zweden en de Verenigde Staten van Amerika. De eerste twee landen eisen dat whisky - waar dan ook vandaan - minimaal 5 jaar moet hebben gerijpt. In de VS bepaalt de wet dat whisky minimaal twee jaar moet rijpen, in nieuwe eikenhouten vaten. Alleen de staat Californië schrijft weer een minimum rijping van drie jaar voor.",
              "Als op een etiket alleen het aantal jaren staat aangeduid - 12 jaar oud bijvoorbeeld - moet de jongste whisky die er in verwerkt is minimaal 12 jaar oud zijn, ook al is de hoeveelheid 12 jaar oude whisky kleiner dan de hoeveel oudere whisky. De leeftijd van de jongste whisky is bepalend.",
              "Als op een etiket een distilleerdatum en een botteldatum vermeld staat en het laatste jaar is vanaf de distilleerdatum gerekend niet volledig, dan mag dit niet als een volledig jaar worden geteld. Een voorbeeld: Als de whisky is gedistilleerd op 22 oktober 1975 en gebotteld in februari 1996, dan is de whisky 20 jaar oud en niet 21 jaar.",
              "Als op een etiket aan de whisky een jaartal wordt toegekend - bijvoorbeeld 1975 – dan moet die fles ook voor 100% whisky bevatten die in dat jaar is gedistilleerd.",
              "Deze regelgeving geld zowel voor malt als blended whisky en wordt zeer streng gecontroleerd door de bevoegde instanties van het Verenigd Koninkrijk.",
            ]}
          />
          <DefinitionCard
            title="ALCOHOL"
            texts={[
              "Het woord alcohol komt uit het Arabisch “al kohl” dat ‘van de aarde’ betekende. Het was ook de naam voor zwarte oogschaduw waarmee dames zich in die tijd opmaakten. Er zijn verschillende alcoholen, maar alleen ethanol is geschikt voor menselijke consumptie. Alcohol ontstaat door vergisting (fermentation) van vergistbare suikers.",
            ]}
          />
          <DefinitionCard
            title="ANGELS SHARE"
            texts={[
              "“Het deel van de engelen”. Dit is het deel van de whisky dat verdampt via de poriën van het hout waarvan het vat gemaakt is waarop de whisky ligt te rijpen. ",
              "Per jaar verdampt er ongeveer 1,5 tot 2% van de opgeslagen vloeistof op deze manier, waarvan zo’n 85% uit pure alcohol bestaat. Over heel Schotland gerekend is dit naar schatting ongeveer 90 miljoen liter per jaar. Een oude grap van een distilleerderij manager is dan ook: “Als ik aan de hemelpoort kom en vertel dat ik manager ben geweest in een distilleerderij in Schotland, zal Petrus me niets meer vragen en kan ik gewoon doorlopen”.",
            ]}
          />
          <Letter>B</Letter>
          <DefinitionCard
            title="BARLEY"
            texts={[
              "Gerst, de enige graansoort die gebruikt wordt voor de productie van malt whisky. Barley wordt in combinatie met andere granen ook voor grain whisky gebruikt.",
            ]}
          />
          <DefinitionCard
            title="BARREL"
            texts={[
              "Dit is de naam voor een vat van rond de 180 liter. De barrel staat ook bekend als American barrel, en bevindt zich als inhoudsmaat tussen de Quarter en de Hogshead. De barrel is gemaakt van Amerikaans eiken.",
            ]}
          />
          <DefinitionCard
            title="BLENDED WHISKY"
            texts={[
              "Een blend of blended whisky is een whisky bestaande uit een mix van grain whiskies en malt whiskies. Beide onderdelen van de mix moeten minimaal 3 jaar in eikenhouten vaten gerijpt zijn. De kwaliteit van een blend is afhankelijk van de leeftijd en van de hoeveelheid malt whisky die er in is verwerkt.",
              "Blended whisky is het meest verkochte type Schotse whisky.",
            ]}
          />
          <DefinitionCard
            title="BLENDING"
            texts={[
              "Het mengen van malt whisky en grain whisky in de juiste verhouding. Vaten van beide worden boven een goot in de vloer gerold, de whisky wordt gekeurd op bederf en na goedkeuring worden de vaten geleegd in de goot. Het mengsel wordt opgevangen in een grote tank en daarna weer in eikenhouten vaten overgebracht om de marriage periode te ondergaan.",
            ]}
          />
          <DefinitionCard
            title="BODEGA'S"
            texts={[
              "De algemene naam voor wijn producerende bedrijven in Spanje. Vooral de Bodega&apos;s in Jerez de la Frontera (het sherry gebied) zijn voor de whisky industrie in Schotland belangrijk, in verband met de aanvoer van sherry vaten.",
            ]}
          />
          <DefinitionCard
            title="BONDED WAREHOUSE"
            texts={[
              "Bovengronds pakhuis waar whisky rijpt in eikenhouten vaten, de maturation. Over de whisky die in bonded warehouses ligt te rijpen is nog geen accijns betaald. Dit wordt pas betaald als de whisky de warehouses verlaat, en dit scheelt een distillateur veel renteverlies. De eerste distilleerderij in Schotland die bonded warehouses had, was Port Ellen op Islay. Officieel zijn de sleutels zodanig verdeeld onder de exciseman en distillery manager, dat de een niet de warehouses in kan zonder de ander.",
              "De warehouses hebben dikke muren om de temperatuurverschillen tussen zomer en winter op te vangen.",
            ]}
          />
          <br />
          BREWER
          <br />
          Ook productie manager of assistent manager. De persoon die
          verantwoordelijk is voor het algemeen funktioneren van de
          distilleerderij.
          <br />
          <br />
          <br />
          BROKER
          <br />
          Whisky makelaar. Een whiskyhandelaar die als tussenpersoon optreedt
          tussen distilleerderij en blenders en/of onafhankelijke bottelaars.
          Een broker heeft meerdere vaten malt whisky van verschillende
          distilleerderijen in voorraad.
          <br />
          <br />
          <br />
          BUNG
          <br />
          Is een taps toelopende ronde stop die gebruikt wordt om het vulgat van
          het eikenhouten vat te dichten. Een bung is meestal gemaakt van het
          vrij zachte populierenhout en wordt met een hamer in het vulgat
          vastgeslagen.
          <br />
          <br />
          <br />
          BUNGCLOTH
          <br />
          Wanneer het vulgat van een vat te groot is of de bung te klein, wordt
          er een jute doek tussengeklemd zodat de bung toch strak in het vulgat
          steekt. Dit kleedje wordt een bungcloth genoemd.
          <br />
          <br />
          <br />
          BURN
          <br />
          In het Engels betekent dit ‘branden’, maar in het Schots betekent het
          ‘beek’ of ‘stroom’. De naam van een beek in Schotland bevat vaak het
          woord Burn. Voorbeeld: Burn of Aberlour of Black Burn.
          <br />
          <br />
          <br />
          BURNT ALE
          <br />
          Zie: pot ale .
          <br />
          <br />
          <br />
          BUTT
          <br />
          Dit is de naam voor een vat met een inhoud van rond de 500 liter en is
          met de puncheon het grootste vat dat gebruikt wordt voor het rijpen
          van Schotse whisky. De butt is gemaakt van Spaans eiken en is gebruikt
          om sherry in te rijpen.
          <br />
          <br />
          <br />
          <Letter>C</Letter>
          <br />
          CARAMEL
          <br />
          Een smaak- en geurloze substantie die verkregen is uit suiker. Het
          wordt gebruikt om whisky bij te kleuren, om zodoende niet alleen in
          smaak en geur maar ook in kleur een standaardproduct te verkrijgen.
          Het komt het meest voor in blended whisky&apos;s. Bij malt whisky
          gebruikt men vaak whisky uit oudere sherryvaten om het eindresultaat
          aan te kleuren. Per 1 januari 1999 moet op het etiket staan of er
          gekleurd is met caramel.
          <br />
          <br />
          <br />
          CASK
          <br />
          De Engelse naam voor vat. In Schotland gebruikt men altijd
          “tweedehands” vaten, die al eerder zijn gebruikt om iets te bewaren of
          in te rijpen. Zo gebruikt men sherry-, bourbon-, port-, wijn-,
          Madeira- en rumvaten. Vroeger werden er ook haring- en botervaten
          gebruikt.
          <br />
          De whisky zal altijd iets van de smaak overnemen van het product dat
          in het vat heeft gezeten. Een vat wordt 2 tot 3 maal gebruikt,
          gemiddeld zo’n 30 jaar lang. Het vat wordt dan aangeduid als een
          refill vat.
          <br />
          <br />
          <br />
          CASK SAMPLE
          <br />
          Een cask sample whisky is een single malt van één distilleerderij, uit
          één vat, die al dan niet teruggebracht is tot een consumptiesterkte
          van 40, 43 of 46%. Doorgaans is deze malt niet bijgekleurd of chill
          filtered.
          <br />
          Op een etiket van een cask sample wordt wordt meestal aangegeven
          wanneer de whisky is gedistilleerd, wanneer ze is gebotteld, het
          nummer van het vat en de hoeveelheid flessen die uit dat vat zijn
          gebotteld.
          <br />
          <br />
          <br />
          CASK STRENGTH
          <br />
          Een cask strength whisky is een single malt van één distilleerderij,
          uit één of meerdere vaten, meestal met een alcoholpercentage van rond
          de 60 %. Het alcoholpercentage van de whisky in de fles is dezelfde
          als van de whisky in het vat, en dus niet met water afgezwakt naar die
          bewuste sterkte.
          <br />
          Cask strength whisky&apos;s worden meestal niet bijgekleurd of chill
          filtered.
          <br />
          <br />
          <br />
          CHILL-FILTERING
          <br />
          Een koude filtering geschiedt net voor de whisky wordt gebotteld. De
          whisky wordt afgekoeld tot vlak onder het vriespunt, zodat er een
          samenklontering van vaste bestanddelen ontstaat die voor een
          vertroebeling zorgt. Deze vertroebeling kan er alleen worden
          uitgefilterd als ze ontstaat bij een lage temperatuur. De reden voor
          de koude filtering is dat men wil voorkomen dat de whisky troebel
          wordt als de consument er ijs of water aan toevoegt. Het nadeel is
          echter dat niet alleen de troebeling verdwijnt, maar ook enkele
          kleur-, geur- en smaakstoffen. De laatste jaren wordt de koude
          filtering bij veel single malts achterwege gelaten, en zet men op het
          etiket de aanduiding “non chill-filtered”.
          <br />
          <br />
          <br />
          COFFEY STILL
          <br />
          Aeneas Coffey kreeg in 1831 een octrooi op een door Robert Stein
          uitgevonden continu-werkende distilleerkolom. Deze kolom wordt naast
          Coffey still ook wel Patent still genoemd.
          <br />
          De Coffey still bestaat uit twee kolommen. De analyzer, die er voor
          zorgt dat de alcohol uit het beslag wordt gewonnen, en de rectifier,
          die er voor zorgt dat de alcohol van het water wordt gescheiden en de
          alcohol zuiver is.
          <br />
          Het beslag stoomt in een gesloten pijp door de rectifier naar beneden
          om zo op te warmen, waarna het naar boven in de analyzer wordt geleid
          en daar vrij komt. In de analyzer vloeit het door geperforeerde platen
          naar beneden. Van onder wordt er stoom in de analyzer geblazen, zodat
          door deze warmte de alcohol uit het beslag verdampt en ontstijgt, en
          het alcoholloze beslag naar beneden vloeit en wordt afgevoerd.
          <br />
          De alcohol en de stoom verlaten bovenin de analyzer en worden naar
          onder in de rectifier geleidt waar ze vrijkomen en opstijgen. Het
          temperatuurverschil tussen het koude en het warme beslag dat in de
          pijp door de rectifier heen loopt (boven koud en onder warm), zorgt er
          voor dat het water en de alcohol op een bepaalde hoogte in de
          rectifier condenseren. Een deel ervan (water en hoog kokende
          componenten) condenseert het eerst, loopt als Feints uit de rectifier
          en wordt nogmaals naar boven in de analyzer gepompt. De rest stijgt
          verder naar boven waar de condensor zit, die gevuld is met stromend
          koud water en waar de Spirit, de alcohol dus, terug valt naar de
          zogeheten Spirit plate en op een sterkte van 94.8% de rectifier wordt
          uitgeleid.
          <br />
          Dit proces gaat continu door. De alcohol die langs deze weg is
          verkregen wordt niet alleen voor blended whisky gebruikt, maar ook
          voor graanwhisky, gin en wodka. Voor deze manier van distilleren kan
          en mag elk soort graan worden gebruikt.
          <br />
          <br />
          <br />
          CONCORDAT
          <br />
          Toen de distilleerderij van Port Ellen in 1983 haar deuren sloot
          dreigde een aantal jaren later wegens overcapaciteit ook de mouterij
          te sluiten. De mouterij, eigendom van United Distillers, voorzag op
          dat moment alleen Lagavulin en Caol Ila van mout. Om de
          werkgelegenheid op het eiland te garanderen kwamen de verschillende
          eigenaars van alle distilleerderijen op het eiland overeen dat men
          voor deze distilleerderijen voortaan alle mout zou betrekken van de
          mouterij in Port Ellen. Deze overeenkomst staat bekend als het
          “Concordat”.
          <br />
          <br />
          <br />
          COLOUR CODE
          <br />
          De pijpleidingen in een distilleerderij in Schotland hebben een
          kleurcodering, om in één oogopslag te kunnen zien welke vloeistof waar
          door heen loopt. Wit is voor water, rood voor wash, blauw voor low
          wines en zwart voor de spirit. Vaak zie je dat ook de rand van het
          mangat in een still in de juiste kleur is geschilderd. De
          kleurcodering is wettelijk vastgelegd en daarom in elke
          distilleerderij hetzelfde.
          <br />
          <br />
          <br />
          CONDENSOR
          <br />
          Een lange, smalle, koperen bak waardoor van onder naar boven koud
          water stroomt. Door de bak loopt een koperen buis waar bovenin de
          dampen uit de still in uitkomen. Door het koude water condenseren deze
          dampen tot een vloeistof.
          <br />
          <br />
          <br />
          COOPERAGE
          <br />
          Cooperage is het Engelse woord voor kuiperij. In kuiperijen worden de
          vaten onderhouden en gerepareerd. Een aantal distilleerderijen in
          Schotland hebben nog een eigen kuiperij, zoals Glenfiddich, Macduff,
          Glenrothes, Macallan en Auchroisk. Er zijn ook bedrijven die zich
          hebben gespecialiseerd in het restaureren, vermaken of nieuw maken van
          vaten. Het bekendste voorbeeld hiervan is wel de Speyside cooperage,
          op de weg tussen Craigellachie en Dufftown.
          <br />
          <br />
          <br />
          CUTTING
          <br />
          De scheiding van de voor- en naloop (foreshots en feints) van de
          middenloop (middle cut) tijdens de laatste distillatie. In Schotland
          is dit meestal de tweede distillatie. De cutting geschiedt in de
          spirit safe.
          <br />
          <br />
          <br />
          <Letter>D</Letter>
          <br />
          D.C.L.
          <br />
          Deze afkorting stond voor Distillers Company Limited. Dit bedrijf is
          ontstaan door een serie van handelsovereenkomsten tussen verschillende
          bedrijven. De eerste was in 1877 tussen zes grote
          graandistilleerderijen in de lowlands, om een handelsoorlog door
          overproductie te voorkomen.
          <br />
          In 1930 werden de malt- en de grain distilleerderijen gesplitst in
          twee firma’s, respectievelijk, S.M.D. (Scottish Malt Distilleries) en
          S.G.D. (Scottish Grain Distilleries).
          <br />
          In de maand april van het jaar 1986 werd D.C.L. opgekocht door het
          Ierse bedrijf Guinness. D.C.L. veranderde in juni 1987 haar naam in
          U.D. (United Distillers).
          <br />
          Een jaar later richtte men U.G.M.D. (United Grain &amp; Malt
          Distillers) op om S.M.D. en S.G.D. weer onder te brengen in één firma.
          Na de samenvoeging van Grand Metropol en Guinness in Diageo werd U.D
          omgedoopt in U.D.V. (United Distillers &amp; Vintners)
          <br />
          <br />
          <br />
          DARK GRAINS
          <br />
          Dark grains is veevoer. Het zijn gedroogde en geperste pellets
          (korrels) die bestaan uit burnt ale of pot ale en gedroogde draff.
          Dark grain bevat ongeveer een kwart meer eiwitten dan light grain.
          <br />
          <br />
          <br />
          DARK GRAINS PLANT
          <br />
          Een fabriek waar dark grain wordt gemaakt. Zulke fabrieken vind men
          soms naast een malt whisky distilleerderij, en zijn onder andere te
          vinden bij The Glenlivet, Dailuaine, Macduff en Aultmore.
          <br />
          <br />
          <br />
          DIASTASE
          <br />
          Is de verzamelnaam van de enzymen die ontstaan tijdens het mouten van
          de gerst en die er voor zorgen dat de zetmeel wordt omgezet in
          vergistbare suikers tijdens het mashen.
          <br />
          <br />
          <br />
          DISTILLING
          <br />
          Distilleren is het scheiden van vloeistoffen door gebruik te maken van
          de verschillende kookpunten van die vloeistoffen. Alcohol heeft een
          kookpunt van 78,3°C, en water kookt bij 100°C.
          <br />
          <br />
          <br />
          DRESSER
          <br />
          De mout wordt ontdaan van de “huzaar”, de kiem (in Schotland noemt men
          dat ‘the combing of rootlet’). Dit wordt gedaan in de dresser (de
          dressing machine) en de rootlets dienen als veevoer.
          <br />
          <br />
          <br />
          DRAFF
          <br />
          Dit is het afvalproduct na de mashing . Het zijn de harde, houtachtige
          schilletjes van de gerstekorrel, die voor de mashing samen met het
          zetmeel grist werden genoemd.
          <br />
          Deze schilletjes zijn zeer eiwitrijk en kunnen direct dienen als
          veevoer. Door de draff te drogen en tot pellets (korrels) te persen is
          het als veevoer langer te bewaren en beter te transporteren. Gedroogde
          draff heet light grain. Wanneer hier pott ale aan wordt toegevoegd
          heet het dark grain.
          <br />
          <br />
          <br />
          DRAM
          <br />
          Dit is de Schotse naam voor een glas whisky. In een bar in Schotland
          bestelt men vaak “a pint and a wee dram” ofwel “een grote bier en een
          kleine whisky”.
          <br />
          <br />
          <br />
          DRUM MALTING
          <br />
          In plaats van de methode waarbij de gerst op een vloer ontkiemt,
          gebeurt dat hier in grote ronde horizontaal liggende cilinders
          (trommels). Om te voorkomen dat de groeiende gerst verstikt door de
          vrij komende warmte die tijdens de ontkieming ontstaat, worden de
          trommels gedraaid, wordt de temperatuur gereguleerd en wordt er lucht
          door de groenmout geblazen. Dit gaat allemaal automatisch. Dit systeem
          scheelt veel ruimte en arbeidstijd ten opzichte van een floor malting.
          Twee andere verschillen ten opzichte van een floor malting is dat de
          wekende gerst kan worden belucht, zodat de tijd van de pauzes zonder
          water verkort kunnen worden en dat de droge lucht, al of niet met
          turfrook, met hoge druk door een veel dikkere laag groenmout gaat in
          de kiln, om zo de droogtijd in te korten.
          <br />
          Glen Grant was in 1898 de eerste distilleerderij waar een oude vorm
          van een trommelmouterij werd geïnstalleerd. Eind jaren zestig en begin
          jaren zeventig van de 20e eeuw ging men in Schotland massaal over op
          dit systeem. Er werden toen grote trommelmouterijen gebouwd die in
          staat waren om meerdere distilleerderijen van mout te voorzien, onder
          andere bij de distilleerderijen Ord, Glen Esk en Port Ellen.
          <br />
          <br />
          <br />
          <Letter>E</Letter>
          <br />
          ENZYMEN
          <br />
          Zie Diastase.
          <br />
          <br />
          <br />
          EXCISE
          <br />
          Excise komt van het oude Nederlandse woord accijns of excijs. Accijns
          is een belasting op o.a. alcoholische drank. Nederland was in 1596 het
          eerste land dat een algehele belasting hief op alcoholische dranken.
          De reden hiervoor was vrijwel zeker de bedoeling om het overmatige
          alcoholgebruik door burgers onder controle te krijgen en te
          ontmoedigen. In Duitsland gold, om dezelfde reden, al sinds 1360 een
          belasting op wijndistillaten.
          <br />
          Het parlement van Schotland begon in het jaar 1644 met een
          accijnsheffing op sterk alcoholische dranken, om precies te zijn op 31
          januari. In dit geval was niet overmatig alcoholgebruik de reden voor
          deze belasting, maar de wens om geld bijeen te krijgen om de legers te
          betalen die werden ingezet tegen de Engelsen.
          <br />
          <br />
          <br />
          EXCISEMAN
          <br />
          De accijnsofficier of belastingambtenaar is de persoon die de
          belasting over alcoholische dranken vaststelt en incasseert.
          <br />
          Tot in 1983 was er in Schotland op elke distilleerderij dag en nacht
          een exciseman aanwezig. Hij woonde op het terrein van de
          distilleerderij, meestal in het grootste huis.
          <br />
          <br />
          <br />
          <Letter>F</Letter>
          <br />
          FEINTS
          <br />
          Ook wel aftershot genoemd. Dit is de naloop, ook bekend als ‘tail’,
          van de tweede distillatie en bevat ongeveer 25% alcohol. De feints
          bevat voor de rest water, foezels en andere niet geschikte
          bestanddelen.
          <br />
          De Feints wordt samen met de foreshot teruggebracht naar de spirit
          still, om daar samen met de Low Wine weer gedistilleerd te worden.
          <br />
          Er zijn distilleerderijen die hierop een uitzondering maken, namelijk
          Springbank, Mortlach en Benrinnes. Zij behandelen de feints apart.
          <br />
          <br />
          <br />
          FERMENTATION
          <br />
          Vergisting. Gist bestaat uit ééncellige organismen die door een enzym
          in staat zijn de suiker die zich in de wash bevindt om te zetten in
          alcohol en koolzuurgas. 180 gram suiker wordt omgezet in 92 gram
          alcohol en 88 gram koolzuur. De vergisting geschiedt in Schotland in
          de washbacks.
          <br />
          <br />
          <br />
          FILLINGS
          <br />
          Zo wordt de new spirit in de vaten genoemd tot het drie jaar oud is.
          <br />
          <br />
          <br />
          FILLING STORE
          <br />
          De ruimte waar de vaten worden gevuld met de new spirit voor de
          rijping van minimaal drie jaar.
          <br />
          <br />
          <br />
          FLOOR MALTING
          <br />
          Een moutvloer is een overdekte houten of betonnen vloer, waarop de met
          water ingeweekte gerst tot ontkieming komt. De laag gerst die op de
          vloer ligt is zo’n 30 centimeter dik. Om te voorkomen dat de gerst
          verstikt door de warmte die vrijkomt tijdens de kieming wordt de gerst
          elke acht uur met de hand en een zogenoemde maltshuffle gekeerd. De
          moutvloer is een ouderwetse vorm van mouten, malting. Het is
          arbeidsintensief en gebruikt veel ruimte. Vroeger beschikte elke
          distilleerderij over een eigen moutvloer, voor de productie van mout
          naar eigen behoefte. In de jaren 60 van de 20e eeuw zijn de meeste
          moutvloeren buiten werking gesteld en verbouwd tot warehouse of
          bezoekerscentrum. De meeste distilleerderijen betrekken hun mout
          tegenwoordig van grote mouterijen, waar ze de mout naar eigen recept
          kunnen bestellen.
          <br />
          De distilleerderijen die nog over een eigen moutvloer beschikken zijn
          Bowmore, Laphroaig, Springbank, Highland Park en The Balvenie. Bij de
          Benriach, Glendronach en Glen Garioch distilleerderijen werden de
          moutvloeren na heropening niet meer in gebruik gesteld.
          <br />
          <br />
          <br />
          FORESHOT
          <br />
          Dit is de voorloop, ook bekent als ‘head’ van de tweede distillatie,
          en bevat naast ongeveer 75% alcohol enkele niet gewenste foezels en
          andere niet geschikte bestanddelen zoals kopersulfaat.
          <br />
          De foreshot wordt samen met de feints teruggebracht naar de Spirit
          Still, om samen met de Low Wine weer gedistilleerd te worden.
          <br />
          Er zijn distilleerderijen die hier op een uitzondering maken, namelijk
          Springbank, Mortlach en Benrinnes.
          <br />
          <br />
          <br />
          <Letter>G</Letter>
          <br />
          <br />
          <br />
          GALLON
          <br />
          Een Gallon is gelijk aan 4,546 liter
          <br />
          <br />
          <br />
          GAUGER
          <br />
          Een oude naam voor een exciseman in Schotland en Ierland.
          <br />
          <br />
          <br />
          GLEN
          <br />
          Traditioneel woord voor een vallei, waar meestal een rivier doorheen
          stroomt. Veel distilleerderijen hebben hun naam te danken aan de
          vallei waarin ze te vinden zijn.
          <br />
          <br />
          <br />
          GOLDEN PROMISE
          <br />
          Een gerstsoort die in de jaren zestig en zeventig van de vorige eeuw
          zeer populair was bij boeren en distillateurs in Schotland, omdat deze
          variëteit goed bestand was tegen het Schotse klimaat. Er kon eindelijk
          kwaliteitsgerst op Schotse bodem worden verbouwd. Omdat er weer
          nieuwere en betere gerstvariëteiten werden ontwikkeld nam de
          populariteit later weer af. Er zijn in Schotland twee
          distilleerderijen die deze gerst nog gebruiken, namelijk Macallan en
          Glengoyne.
          <br />
          <br />
          <br />
          GRAIN WHISKY
          <br />
          Grain whisky is neutrale alcohol verkregen uit verschillende granen,
          meestal tarwe en mais, die minimaal drie jaar op eikenhouten vaten
          heeft gerijpt. De neutrale alcohol wordt verkregen door middel van
          continu distillatie in een continuous, patent, column of Coffey still
          (vier namen voor dezelfde distilleertechniek). Grain whisky wordt
          meestal gebruikt als basisalcohol voor blended whisky. Het komt bij
          uitzondering wel eens voor dat Grain whisky als single grain wordt
          gebotteld.
          <br />
          <br />
          <br />
          GRAIN WHISKY DISTILLERY
          <br />
          Een distilleerderij die grain whisky produceert. Er zijn in Schotland
          nog acht grain distilleries in productie, te weten Cameronbridge
          (U.D.V), Invergordon (J.B.B), Girvan (Grant’s), Cambus (Bacardi
          Martini), North British (vroeger J&amp;B, nu U.D.V), Port Dundas
          (U.D.V), Strathclyde (Allied Distillers) en Loch Lomond (Loch Lomond
          Distillery &amp; Co.).
          <br />
          <br />
          <br />
          GREENMALT
          <br />
          In het Nederlands groenmout. Dit is de gerst die na de weking in water
          wel ontkiemt is, maar nog niet gedroogd in de kiln. De groenmout heet
          na het drogen gewoon mout, of in het engels malt.
          <br />
          <br />
          <br />
          GRIST
          <br />
          Aanduiding voor het meel dat verkregen wordt door het malen van de
          mout.
          <br />
          <br />
          <br />
          <Letter>H</Letter>
          <br />
          HOGSHEAD
          <br />
          Een veel gebruikt type whiskyvat, dat gemaakt is van Amerikaans eiken
          en een inhoud heeft van 240 liter.
          <br />
          <br />
          <br />
          <Letter>I</Letter>
          <br />
          INDEPENDENT BOTTLERS
          <br />
          De bedrijven die malt whisky van verschillende distilleerderijen
          zelfstandig bottelen en verhandelen. Vaak zijn dit whisky&apos;s van
          distilleerderijen die zelf geen single malt op de markt brengen, of
          whisky waarvan de distilleerderij al voor langere tijd gesloten is.
          Soms komt het voor dat een independent bottler eigen vaten laat
          afvullen door een distilleerderij en deze zelf laat rijpen, zoals
          Gordon &amp; MacPhail uit Elgin dit veel doet. Vaker komt het voor dat
          een independent bottler vaten koopt van whisky brokers, die vaten
          bezitten om deze te verkopen aan blenders. Hierdoor kan het gebeuren
          dat er malt op de markt komt tegen de zin van de betreffende
          distilleerderij. Nog enkele voorbeelden van independent bottlers zijn:
          Murray McDavid, William Cadenhead, Signatory, en Blackadder
          International. Een zeer bekend Nederlands voorbeeld is The Ultimate
          Whisky Company uit Amersfoort.
          <br />
          <br />
          <br />
          INTERMEDIATE STILL
          <br />
          De still waarin de tweede distillatie geschiedt tijdens een proces van
          drievoudige installatie, zoals bijvoorbeeld bij Auchentoshan.
          <br />
          <br />
          <br />
          <br />
          <br />
          <Letter>K</Letter>
          <br />
          KILN
          <br />
          Dit is een vierkante toren, waarin zich ongeveer halverwege een
          metalen rooster bevindt. Op dit zeer fijne rooster stort men de
          greenmalt of groenmout om het te laten drogen door middel van een
          turfvuur, een kolenvuur of door warme lucht. Dit vuur wordt, om brand
          te voorkomen, indirect gestookt, een paar meter onder het metalen
          rooster. Boven op de toren bevind zich de zogenaamde Pagoda head, een
          pagodevormig dak. Als men gebruik maakt van turf zorgt men dat bij het
          verbranden daarvan veel rook ontstaat, waardoor de mout een typische
          rooksmaak verkrijgt die bij veel Schotse malt whisky voorkomt. Vaak
          geeft turf niet voldoende warmte op korte termijn, en gebruikt men
          naast turf ook wel kolen of warme lucht door middel van een oliekachel
          die in de kiln is ingebouwd.
          <br />
          De meeste distilleerderijen gebruiken de kiln zelf niet meer, omdat ze
          niet meer zelf mouten, maar laten de kiln vaak staan omdat die een
          karakteristiek beeld geeft aan de distilleerderij.
          <br />
          De mout wordt tegenwoordig op eigen recept gekocht bij grote
          mouterijen, die voor meerdere distilleerderijen de mout produceren.
          <br />
          <br />
          <br />
          <Letter>L</Letter>
          <br />
          LOMOND STILL
          <br />
          De Lomond still is een pott still met een zuilvormige nek, al of niet
          doorsneden met horizontale platen. Met deze still is het mogelijk
          verschillende typen malts te produceren, omdat het mogelijk is de
          spirit in de “zuil” op verschillende hoogtes af te tappen.
          <br />
          Sommige distilleerderijen gebruikten deze stills naast hun gewone
          stills.
          <br />
          De whisky uit Lomond stills werd hoofdzakelijk voor blends gebruikt,
          maar werd ook wel eens als single malt op de markt gebracht onder een
          andere naam, meestal door onafhankelijke bottelaars.
          <br />
          Tot voor kort waren er nog drie distilleerderijen die Lomond stills
          gebruikten, namelijk Glenburgie, (met de malt Glencraig), Miltonduff
          (met de malt Mosstowie) en Inverleven (met de malt onder de naam
          Lomond). Bij al deze distilleerderijen zijn de Lomond stills
          ontmanteld. Er staat nog een still van dit type bij Scapa, en deze
          komt waarschijnlijk oorspronkelijk uit de Glenburgie distilleerderij.
          De enige distilleerderij die op dit moment met dit soort stills werkt
          is de Loch Lomond distilleerderij in Alexandria. Deze maakt acht
          verschillende malt whiskies.
          <br />
          <br />
          <br />
          <br />
          <br />
          LOW WINE
          <br />
          Het product van de eerste distillatie. De wash wordt in de wash still
          tot low wine gedistilleerd. De low wine bevat rond de 25% alcohol en
          wordt voor een tweede maal gedistilleerd in de spirit still of low
          wine still.
          <br />
          <br />
          <br />
          LYNE ARM
          <br />
          De koperen pijp boven aan de still, tussen de swan neck en de
          condenseer of de worm tube. Wordt ook wel eens de lyne pipe genoemd.
          <br />
          <br />
          <br />
          M
          <br />
          MALT
          <br />
          Malt of mout is ingeweekt, ontkiemd en vervolgens in de kiln gedroogd
          graan. Dit kan in principe elk soort graan zijn. In Schotland gebruikt
          men voor de productie van malt whisky alleen gemoute gerst.
          <br />
          <br />
          <br />
          MALT WHISKY
          <br />
          Whisky gestookt uit een vergist beslag, gemaakt uit 100% gemoute
          gerst. Het beslag moet via een pott still worden afgestookt en moet in
          Schotland minimaal drie jaar op fust zijn gerijpt eer het whisky mag
          heten. Op een etiket ziet men ook wel “pure malt” staan, wat hetzelfde
          betekent. Malt whisky hoeft niet altijd een single malt te zijn.
          <br />
          <br />
          <br />
          MALTING
          <br />
          Malting of mouten is het inweken van de gerst met water, en het
          vervolgens gedeeltelijk laten ontkiemen van de gerst om deze
          uiteindelijk te drogen. Tijdens het ontkiemen ontstaan er enzymen,
          diastase, in de gerstekorrel die in staat zijn om de zetmeel tijdens
          de mashing om te zetten in vergistbare suiker. Het ontkiemingsproces
          duurt 7 dagen, waarna de greenmalt in de kiln wordt gedroogd om het
          proces te stoppen. Dit gebeurt met turf en kolen of met hete lucht. Na
          het droogproces wordt de greenmalt gewoon malt genoemd. Het mouten
          geschiedt doorgaans in gespecialiseerde mouterijen, die daarvoor
          verschillende systemen gebruiken. In Schotland vind men nog de oude
          floor malting en twee wat nieuwere systemen, de saladinbox malting en
          de drum malting.
          <br />
          <br />
          <br />
          MARRIAGE
          <br />
          Na het blenden of vatten van de verschillende whisky’s gaat ze voor
          een bepaalde periode, van een halfjaar tot een jaar, terug op houten
          vaten voor dat ze gebotteld wordt. De whisky moet eerst ‘huwen’ en een
          eenheid vormen voor ze de fles in gaat. Dit geldt niet alleen voor
          blended whiskies maar ook voor malt whiskies.
          <br />
          <br />
          <br />
          MASH
          <br />
          Het mengsel van heet water en vermalen malt (grist) dat zich tijdens
          de mashing in de mash tun bevindt. Mash wordt uiteindelijk wort.
          <br />
          <br />
          <br />
          MASHING
          <br />
          Ook bekend als extraction, omdat er tijdens dit onderdeel van het
          brouwproces vergistbare suikers worden geëxtraheerd. Tijdens de
          mashing wordt de mash op verschillende temperaturen gebracht door er
          in etappes heet water aan toe te voegen, zodat alle enzymen (diastase)
          het zetmeel om kunnen zetten in vergistbare suikers. Er ontstaat zo
          een suikerhoudende vloeistof, de wort. Doordat de mash tun een
          geperforeerde bodem heeft is het makkelijk om de ontstane wort te
          scheiden van de draff. De draff wordt met heet water uitgespoeld om
          alle achtergebleven suikers er aan te kunnen onttrekken. Dit
          spoelwater wordt gebruikt als het eerste water van de volgende
          mashing. De wort wordt eerst afgekoeld, waarna het wordt overgepompt
          naar de washbacks alvorens er gist aan wordt toegevoegd.
          <br />
          <br />
          <br />
          <br />
          <br />
          MASH MAN
          <br />
          Ook bekent als de brewer. Deze persoon is hoofdverantwoordelijke voor
          het gehele brouwproces, de milling, de mashing en de fermentation.
          <br />
          <br />
          <br />
          MASH TUN
          <br />
          Ook bekend als mash tub. Hierin vindt de mashing plaats. Een
          ouderwetse mash tun is van ijzer en niet overdekt, zoals bijvoorbeeld
          bij Edradour te zien is. Later werden ze van koper gemaakt.
          Tegenwoordig zijn ze van roestvrij staal, en overdekt om de mash beter
          warm te kunnen houden. Om de mash goed te kunnen mengen is elke mash
          tun voorzien van een mechanische mengarm. Glenturret is hierin de
          enige uitzondering. Hier wordt nog met de hand geroerd.
          <br />
          <br />
          <br />
          MATURATION
          <br />
          Het rijpen van de blanke new spirit op eikenhouten vaten. Een wet uit
          1990 stelt hiervoor een minimale periode van 3 jaar. De inhoud van de
          eikenhouten vaten mag niet groter zijn dan 700 liter.
          <br />
          Het meest geschikte alcoholpercentage om whisky te rijpen is 63,4% (
          111 Britse Proof).
          <br />
          <br />
          <br />
          MIDDLE CUT
          <br />
          De middenloop, het hart van de tweede of derde distillatie, gescheiden
          van de foreshot en de feints (res. voorloop en naloop) Het scheiden
          van deze verschillende “lopen” geschiedt in de spirit safe. De middle
          cut is 15 tot 24% van de totale run en heeft een alcohol percentage
          van 65 tot 68 %. Bij Auchentoshan, waar als enige in Schotland drie
          keer wordt gedistilleerd, is het alcohol percentage van de middle cut
          81%. In beide gevallen wordt het alcholpercentage terug gebracht tot
          63,4% voordat de new spirit op het fust gaat voor de rijping, de
          maturation.
          <br />
          <br />
          <br />
          MILLING
          <br />
          Hier wordt in een maalmolen de mout vermalen tot grist.
          <br />
          <br />
          <br />
          MOONSHINE
          <br />
          Een term voor illegaal gedistilleerde alcoholische drank. Vaak ‘in de
          maneschijn’ gestookt. Ook werd ook de term ‘mountain dew’ gebruikt.
          <br />
          <br />
          <br />
          MOTHBALLED
          <br />
          Aanduiding voor een distilleerderij die tijdelijk is gesloten, en
          daardoor later weer in productie zou kunnen worden genomen. Meestal
          gebeurt dit wegens overproductie, als de distilleerderij meer
          produceert dan ze kan verwerken of afzetten.
          <br />
          <br />
          <br />
          <br />
          <br />
          <Letter>N</Letter>
          <br />
          NOSE
          <br />
          De neus is het aroma of bouquet van de whisky, wijn of andere
          genotsvloeistoffen.
          <br />
          <br />
          <br />
          NEUTRAL SPIRIT
          <br />
          Neut rale alcohol die wordt geproduceerd met een column distillatie
          methode. Het alcohol percentage is 94,7% alcohol by volume. Deze
          neutral spirit wordt gebruikt als basis voor onder andere wodka, gin
          en ook blended whisky&apos;s.
          <br />
          <br />
          <br />
          NEW SPIRIT
          <br />
          Het eindproduct van de laatste distillatiegang, dat pas na drie jaar
          rijping op eikenhouten vaten whisky genoemd mag worden.
          <br />
          <br />
          <br />
          <br />
          <br />
          <Letter>O</Letter>
          <br />
          OCTAVE
          <br />
          Het kleinste vat dat gebruikt wordt voor de rijping van whisky. Zoals
          de naam al doet vermoeden is de octave een achtste van iets, namelijk
          van een butt. De inhoud van een octave is 45 tot 68 liter.
          <br />
          <br />
          <br />
          ORGANIC WHISKY
          <br />
          Organische whisky is whisky die gemaakt is van graan dat op
          biologische wijze is gekweekt, zonder kunstmest of
          verdelgingsmiddelen. Springbank heeft ooit eens organische whisky
          geproduceerd.
          <br />
          <br />
          <br />
          ONAFHANKELIJKE BOTTELAAR
          <br />
          Zie: independent bottlers.
          <br />
          <br />
          <br />
          ON THE ROCKS
          <br />
          Whisky met blokjes ijs. Het wordt ten sterkste ontraden om Malt whisky
          met ijs te drinken, omdat de kou funest is voor de fijne aroma’s.
          Hooguit wordt er een kleine hoeveelheid water toegevoegd.
          <br />
          <br />
          <br />
          P
          <br />
          PATENT STILL
          <br />
          De patent still wordt gebruikt voor de productie van natural spirit,
          en is ook bekend onder de namen Coffey still, columm still of continu
          still. De Patent still werd werd uitgevonden door Robert Stein, die in
          1826 een patent verkreeg op zijn uitvinding. Een aantal jaren later
          werd het principe van deze still verbeterd door Aeneas Coffey, en
          vandaar de naam Coffey still.
          <br />
          <br />
          <br />
          PEAT
          <br />
          Peat, of turf of veen zoals wij het noemen, bestaat uit afgestorven
          plantendelen als grassen, heide, mossen en andere lokale planten die
          op de humus leven. De plantenresten stapelen zich met de jaren op. Als
          de humus ongemoeid gelaten wordt zal dit doorgaans niet meer zijn dan
          ongeveer 1,5 centimeter per 100 jaar. Je kunt dus nagaan wat er wordt
          weggestoken door een turfschep die in één keer zo’n 40 centimeter diep
          steekt. Een voorwaarde voor een optimale groei van de turf is een nat
          klimaat, met veel regen en lage temperaturen. Voorwaarde is wel dat
          het water makkelijk wordt afgevoerd, om te voorkomen dat de humus te
          ver gaat rotten. Evolutionair gezien is turf de voorloper van kolen.
          Turf levert in gedroogde toestand circa twee derde van de energie die
          kolen opleveren.
          <br />
          <br />
          <br />
          PEATREEK
          <br />
          De turfrook die uit de kiln komt tijdens het drogen van de groenmout
          tot mout. Peatreek wordt ook wel als aanduiding gebruikt voor illegaal
          gestookte whisky, omdat deze zo ontzettend naar turf zou ruiken.
          <br />
          <br />
          <br />
          POT ALE
          <br />
          Ook wel burnt ale of spent wash genoemd. Het zijn de de vaste stoffen
          die overblijven in de wash still na de eerste distillatie. De pott ale
          wordt uit de wash still verwijderd en verder ingedampt en gemengd met
          draff, om vervolgens te dienen als veevoer.
          <br />
          <br />
          <br />
          POT STILL
          <br />
          In Schotland is een pot still of still een koperen ketel waarin wordt
          gedistilleerd. De vorm van de still wordt verondersteld veel bij te
          dragen aan het karakter van het eindproduct. Zo zouden hoge stills als
          bijvoorbeeld die bij Glenmorangie een lichtere malt produceren dan
          lage stills als die bij Macallan. De zwaardere alcoholen zouden in een
          hogere still sneller condenseren en weer terugvallen in de still,
          terwijl bij een kleinere still de zwaardere alcoholen makkelijker mee
          zouden gaan naar de condenser om daar in de spirit te belanden. Een
          still gaat zo’n 30 jaar mee, waarna ze geheel of gedeeltelijk
          vervangen moet worden. Omdat men zo overtuigd is van de relatie tussen
          de vorm en het karakter van het eindproduct staat men er meestal op
          dat de nieuwe still en de oude still precies gelijk zijn van vorm
          <br />
          In Schotland wordt een pot still alleen gebruikt voor de productie van
          malt whisky. Omdat een pot still steeds moet worden hervuld voor een
          nieuwe distilleergang is deze methode veel arbeidsintensiever dan de
          methode van een column still of patent still. In Schotland hanteert
          men over het algemeen een tweevoudige distillatiemethode, eerst in de
          wash still en een tweede keer in de spirit still. De Auchentoshan
          distilleerderij en vroeger ook Rosebank zijn hier op een uitzondering.
          <br />
          <br />
          <br />
          PPM PHENOLS
          <br />
          Parts Per Million Phenols. Dit is een schaal die aangeeft hoeveel
          turfsmaak de mout bezit. Hoe langer de groenmout met turf wordt
          gedroogd, hoe meer Parts Per Million Phenols de mout heeft. Ardbeg
          heeft bijvoorbeeld 50 ppm, Lagavulin en Caol Ila 40ppm. Een gemiddelde
          Speyside malt bezit 1 tot 2 ppm en Talisker 25.
          <br />
          <br />
          <br />
          PROHIBITION
          <br />
          Drooglegging, het verbieden van de handel en het gebruik van
          alcoholische dranken door de landelijke of plaatselijke overheid. De
          bekendste prohibition periode duurde om precies te zijn van 00.01 uur
          op 17 februari 1920 tot 17.32 uur op 5 december 1933, in de gehele
          Verenigde Staten van Amerika. Er werd in die tijd veel whisky vanuit
          Ierland en Schotland naar de V.S. gesmokkeld. Die hoeveelheid was
          zelfs zo groot dat na het beëindigen van dit “experiment” van de
          Amerikaanse overheid de gehele Ierse whiskyindustrie en de productie
          in Campbeltown stilvielen, en in één klap werden weggevaagd.
          <br />
          <br />
          <br />
          PROOF
          <br />
          Een oorspronkelijke Britse graadmeter voor de hoeveelheid alcohol in
          water.
          <br />
          57.1% alcohol is 100 British proof.
          <br />
          <br />
          <br />
          PUNCHEON
          <br />
          Een vat met dezelfde inhoud als een butt, maar dan wat korter en
          dikker.
          <br />
          <br />
          <br />
          PURIFIER
          <br />
          Letterlijk vertaald verzuiveraar. Dit is een koperen bak die tussen de
          spirit still en de condensor is bevestigd. In de bak zit een koperen
          plaat. De alcohol dampen moeten hier omheen. De zware alcoholen die
          een scherpe geur in de spirit veroorzaken, zijn te zwaar om deze plaat
          passeren. De zware alcoholen condenseren en vallen onder in de bak
          door een koperen buis de still weer in.
          <br />
          <br />
          <br />
          <Letter>Q</Letter>
          <br />
          QUAICH
          <br />
          Is Gaelic voor beker en wordt als “kweek” uitgesproken. Wat voor de
          wijn liefhebber een “tastevin” is, is voor een whisky liefhebber een
          “quaich”. Het verschil is dat een tastevin met één hand wordt vast
          gehouden en de quaich met twee handen.
          <br />
          <br />
          <br />
          QUARTER
          <br />
          Een eikenhouten whisky vat of cask, met een inhoud van 127 liter. Dit
          is een Quarter (kwart) van de inhoud van een butt.
          <br />
          <br />
          <br />
          <br />
          <br />
          <Letter>R</Letter>
          <br />
          RECEIVER
          <br />
          In een malt whisky distilleerderij vindt men verschillende receivers.
          Dit zijn opslagbakken waarin verschillende vloeistoffen tijdelijk
          worden opgeslagen. Zo zijn er bijvoorbeeld de feints receiver en de
          low wine receiver. De bekendste is de spirit receiver, waarin de new
          spirit wordt bewaard tot ze in de eikenhouten vaten wordt afgevuld of
          per tankauto wordt afgevoerd.
          <br />
          <br />
          <br />
          REFILL CASK
          <br />
          Een whiskyvat dat al eerder is gebruikt voor de rijping van Schotse
          whisky. Gemiddeld gebruikt men een vat zo’n drie keer, en gemiddeld
          heeft een vat een totale gebruiksduur van dertig jaar.
          <br />
          <br />
          <br />
          REFLUX
          <br />
          De zwaardere alcoholen die de top van de hals niet kunnen bereiken
          condenseren en vallen als reflux terug in de still
          <br />
          <br />
          <br />
          ROOTLETS
          <br />
          Het uitgroeisel dat tijdens het mouten ontstaat, en in het Nederlands
          “Huzaar” wordt genoemd. Het wordt na het drogen in de kiln verwijderd.
          De mout wordt geschoond of “is dressed”.
          <br />
          <br />
          <br />
          RUMMAGER
          <br />
          Een instrument bestaande uit vier ronddraaiende metalen armen,
          waartussen slaphangende koperen kettingen in een netvorm zijn
          bevestigd. Deze koperen ketens sleepten of slepen over de bodem van de
          wash still die direct werd of wordt verwarmd met kolenvuur of
          gasvlammen. In de wash zitten nog veel vaste stoffen, en de rummager
          zorgt er voor dat deze vaste stoffen niet op de bodem van de wash
          still zouden aanbranden. Bij met stoom verwarmde stills doet dit
          probleem zich niet voor door een lagere temperatuur.
          <br />
          <br />
          <br />
          RUN
          <br />
          De loop van de spirit die de still verlaat. De eerste run is de loop
          van de wash still. De tweede run die van de spirit still. De tweede
          run wordt gescheiden in de foreshot, de middle cut en de feints.
          Alleen de middle cut is geschikt voor consumptie en wordt ook wel
          “heart of the run” genoemd.
          <br />
          <br />
          <br />
          <Letter>S</Letter>
          <br />
          SALADIN BOX MALTING
          <br />
          Bij dit moutsysteem ontkiemt de gerst in een 1,5 meter diepe en 50
          meter lange bak of box. Om te voorkomen dat de greenmalt verstikt
          raakt door de warmte die tijdens de ontkieming vrij komt draaien
          constant een aantal metalen mixers over de lengte van de box heen en
          weer. De greenmalt in de box is via de geperforeerde bodem goed te
          beluchten met vochtige lucht. De Saladin box werd eind jaren veertig
          van de 20e eeuw in Schotland geïntroduceerd en onder andere
          geïnstalleerd bij Ord, Dailuaine, Glen Mhor, Dalmore, Glen Moray en
          Tamdhu. De enige die nog wordt gebruikt is die van Tamdhu. De Saladin
          box is genoemd naar zijn Franse uitvinder, Charles Saladin.
          <br />
          <br />
          <br />
          SEAL POT
          <br />
          Waterslot dat boven in de still bevestigd is en voorkomt dat de still
          vacuüm trekt of wordt opgeblazen. Het is een bak met water waarin een
          stalen plaat hangt. Als er onder- of bovendruk ontstaat in de still
          zal zich lucht verplaatsen door het water zonder dat het onreinheden
          als stof de still zal in trekken. Het voordeel boven luchtventielen is
          dat een seal pot minder onderhoud vergt.
          <br />
          <br />
          <br />
          SHIEL
          <br />
          Een houten schep waarmee kiemende gerst op een moutvloer wordt
          omgeschept om te voorkomen dat de gerst verstikt door de warmte die
          vrijkomt tijdens de ontkieming. Er wordt hier ook wel een houten hark
          voor gebruikt die men achter zich aan sleept.
          <br />
          <br />
          <br />
          SILENT SEASON
          <br />
          De oorspronkelijke seizoenssluiting van een distilleerderij was in het
          najaar, tijdens het oogsten van de gerst. De mensen die op de
          distilleerderij werkten moesten meehelpen om de gerst binnen te halen.
          Later werd de naam silent season gegeven aan de periode dat er geen
          water meer voorhanden was, want zonder water is er geen whisky. Er was
          dan tijd voor extra onderhoudswerkzaamheden. Tegenwoordig is het de
          periode dat de medewerkers van de distilleerderij op vakantie gaan.
          <br />
          <br />
          <br />
          SINGLE BLENDED WHISKY
          <br />
          Als een distilleerderij zowel grain whisky als maltwhisky produceert
          en deze met elkaar vermengt ontstaat er een single blended whisky. Het
          woord single wil zeggen dat het product afkomstig is van één
          distilleerderij. In Schotland bestaat er nog maar één distilleerderij
          die zowel grain als malt produceert, namelijk Loch Lomond in
          Alexandria. De single blend die hier wordt geproduceerd bestaat uit
          één grain en zeven malt whisky&apos;s, en draagt dezelfde naam als de
          distilleerderij.
          <br />
          <br />
          <br />
          SINGLE CASK WHISKY
          <br />
          Whisky afkomstig van één distilleerderij en van één vat, al dan niet
          teruggebracht tot een consumptie sterkte van 40 of 43%.
          <br />
          <br />
          <br />
          SINGLE GRAIN WHISKY
          <br />
          Een grain whisky die afkomstig van één enkele grain whisky distillery
          draagt doorgaans de naam van de betreffende distilleerderij. Grain
          whisky wordt meestal gebruikt als basis voor blended whisky. Het wordt
          gemaakt uit gedeeltelijk gemout en gedeeltelijk ongemout graan en in
          continuous stills tot neutrale alcohol gedistilleerd. Deze neutrale
          alcohol wordt van een sterkte van ongeveer 95% met water afgezwakt
          naar 63% en voor minimaal 3 jaar op eikenhouten vaten gerijpt. Bekende
          voorbeelden van single grain whisky zijn Cameron Brig en Invergordon.
          <br />
          <br />
          <br />
          SINGLE MALT WHISKY
          <br />
          Het zelfde als malt whisky, met dit verschil dat een single malt
          whisky voor 100% afkomstig moet zijn van één distilleerderij. Het mag
          niet zijn versneden, blended of vatted, met enige whisky van een
          andere distilleerderij.
          <br />
          <br />
          <br />
          SLAINTE MHATH
          <br />
          Gaelic voor “gezondheid”. Wordt uitgesproken als “slaontje vawr”. Deze
          heilwens wordt doorgaans uitgesproken tijdens het proosten met een
          glas whisky in de hand, en vaak alleen als “slaontje”.
          <br />
          <br />
          <br />
          SLIT WINDOW
          <br />
          De kleine raampjes in het bovenste deel van de wash still, waardoor de
          stillman kan zien hoe hoog de wash kookt. De wash mag niet zo hoog
          koken dat de bellen in de nek terecht komen. De reden dat deze
          raampjes alleen in de wash still en niet in de spirit still zijn aan
          gebracht, is dat de wash tijdens het koken vaak bellen veroorzaakt
          omdat er nog vaste stoffen in zitten. Deze vaste stoffen blijven in de
          wash still achter als pott ale. In vroeger tijden gebruikte men een
          houten bal die aan een koord hing. De bal werd regelmatig tegen de
          wash still aan gegooid, en aan het geluid kon de stillman horen tot
          hoe hoog de wash kookte in de nek.
          <br />
          <br />
          <br />
          SPENT LEES
          <br />
          Het residu dat in de spirit still achterblijft na de tweede
          distillatie. Dit residu bestaat uit zuurstofloos water.
          <br />
          <br />
          <br />
          SPIRIT
          <br />
          De ethylalcoholhoudende en kleurloze vloeistof die de spirit still
          verlaten heeft. Spirit mag whisky worden genoemd na minimaal drie jaar
          te hebben gerijpt op eiken houten vaten.
          <br />
          <br />
          <br />
          SPIRIT RECEIVER
          <br />
          Een metalen of houten tank waarin de spirit na de tweede distillatie
          wordt opgevangen voor het in eikenhouten vaten wordt overgebracht om
          te rijpen.
          <br />
          <br />
          <br />
          SPIRIT SAFE
          <br />
          Dit is een glazen slot in een koperen kast waar de spirit uit de
          stills doorheen loopt naar de spirit receiver en die gecontroleerd kan
          worden door de stillman. In de spirit safe worden de foreshots en de
          feints gescheiden van de middle cut.
          <br />
          De spirit safe is in het begin van de 19e eeuw uitgevonden door John
          Ramsay van de Port Ellen distilleerderij.
          <br />
          <br />
          <br />
          SPIRIT STILL
          <br />
          Staat ook bekend als low wine still en wordt gebruikt voor de tweede
          distillatie bij de productie van malt whisky. De low wine, met een
          alcohol percentage rond de 25%, wordt voor een tweede keer
          gedistilleerd waarna het spirit heet en het een alcohol percentage van
          rond de 68% bezit.
          <br />
          Een spirit still is meestal kleiner dan een wash still.
          <br />
          <br />
          <br />
          STEAM CANS
          <br />
          Stoomblikken of stoomkannen, waar de stoom door heen loopt om de
          vloeistof in de still te verwarmen. De verwarming met steam cans gaat
          sneller dan met steam coils en wordt daarom meestal in de wash stills
          gebruikt.
          <br />
          <br />
          <br />
          STEAM COIL
          <br />
          Een koperen buisspiraal waar de stoom door heen loopt om de vloeistof
          in de still te verwarmen. Steam coils verwarmen de stills langzamer
          dan steam cans. De steam coil wordt dan ook meestal in de spirit still
          gebruikt om de tweede distillatie langzamer te laten verlopen dan de
          eerste.
          <br />
          <br />
          <br />
          STEEP TANK
          <br />
          Een grote betonnen of metalen bak waarin de gerst word geweekt voor de
          ontkieming.
          <br />
          <br />
          <br />
          STILL
          <br />
          zie: pott still
          <br />
          <br />
          <br />
          STILLHOUSE
          <br />
          Het gebouw waarin de stills staan van een distilleerderij.
          <br />
          <br />
          <br />
          STILLMAN
          <br />
          Distillateur. De persoon die verantwoordelijk is voor de kwaliteit van
          de spirit. Hij bepaalt de scheiding van de foreshots en feints van de
          middle cut met behulp van de spirit safe. Ook het schoonmaken van de
          stills behoort tot zijn werkzaamheden.
          <br />
          <br />
          <br />
          STRATH
          <br />
          Gaelic voor een ondiepe vallei. Een aantal distilleerderijen in
          Schotland heeft Strath in de naam staan, zoals Strathmill en
          Strathisla.
          <br />
          <br />
          <br />
          SWAN NECK
          <br />
          Het gebogen deel dat de still en de lyne arm met elkaar verbindt.
          <br />
          <br />
          <br />
          SWITCHER
          <br />
          Een soort propeller die boven de gistende wort in de wash back
          ronddraait om te voorkomen dat de wort “overkookt”. De schuimende
          massa die naar boven komt zetten wordt erdoor afgetopt. De switcher is
          net onder het deksel van de washback gemonteerd, en wordt aangedreven
          door een elektromotor
          <br />
          <Letter>T</Letter>
          <br />
          THYLLEN
          <br />
          Dit zijn wasachtige bolletjes die in de poriën van eikenhout zitten om
          de boom tegen bacteriën en infecties te beschermen. De bolletjes maken
          het hout waterdicht zodat het uitermate geschikt is voor scheepswanden
          en wijn- of whiskyvaten. Als deze thyllen zouden ontbreken in wit
          eiken (wat ze wel doen in rood eikenhout) zou het vat onmiddellijk
          leeglopen. Ze zijn alleen in staat om dampen als water- en
          alcoholdampen door te laten.
          <br />
          <Letter>U</Letter>
          <br />
          UISGE BEATHA
          <br />
          Het Keltische woord voor “levenswater”, net als aquavitae in het
          Latijn, akvavit in Scandinavië en eau de vie in het Frans. Het woord
          whisky zou een verbastering zijn van uisge beatha.
          <br />
          <br />
          <br />
          UNDERBACK
          <br />
          In de underback wordt de wort die ontstaat in de mash tun opgevangen.
          De underback bevindt zich onder de mash tun. Naast de mash tun bevindt
          zich een omheind gat in de vloer dat uitzicht geeft op de underback,
          zodat de mashman kan zien hoe vol de underback is. Vanuit de underback
          wordt de wort onder het filterbed weg gepompt zodat het niet
          dichtslibt.
          <br />
          <br />
          <br />
          <Letter>V</Letter>
          <br />
          VATTED MALT
          <br />
          Een blend van enkel en alleen single malt whisky’s, waarbij deze
          single malts wel van verschillende distilleerderijen afkomstig mogen
          zijn.
          <br />
          <br />
          <br />
          VATTING
          <br />
          Dit is het mengen van verschillende whisky’s, en wordt ook wel blenden
          genoemd. Hierbij kan het gaan om verschillende grain whisky’s, om
          verschillende malt whisky’s, of om malt en grain whisky&apos;s door
          elkaar. Vatting vindt plaats in een vatting room.
          <br />
          <br />
          <br />
          VATTING ROOM
          <br />
          Hier worden vaten met verschillende malt en/of grain whisky’s boven
          een greppel geplaatst. In de vatting room bevinden zich meerdere van
          deze greppels naast elkaar. De vaten liggen in eerste instantie
          rechtop en worden van hun populierhouten stoppen ontdaan. De vaten
          worden dan eerst gekeurd door een keurmeester, die direct merkt of er
          eventueel een rot vat tussen zit. Vervolgens worden de vaten omgerold
          en lopen ze leeg in de greppels. Aan het eind van elke greppel komen
          ze bij elkaar, van waaruit alles naar een grote tank wordt gepompt.
          Hierna gaat de whisky terug in houten vaten om de marriage periode te
          ondergaan.
          <br />
          <br />
          <br />
          <Letter>W</Letter>
          <br />
          WAREHOUSE
          <br />
          zie: bonded warehouse.
          <br />
          <br />
          <br />
          WASH
          <br />
          Ook wel “beer” of “wort” genoemd. Het is een suikerhoudende vloeistof
          die ontstaan is in de mash tun. Deze vloeistof ondergaat een
          fermentation in de washback zodat het een alcoholhoudende vloeistof
          wordt.
          <br />
          <br />
          <br />
          WASHBACK
          <br />
          De washback wordt in Schotland gebruikt voor de fermentation van de
          wash. Het zijn grote ronde bakken van drie meter doorsnee en zo’n
          zeven meter diep. De traditionele washbacks zijn gemaakt van hout, de
          modernere van ijzer of roestvrij staal. De houten washbacks zijn
          gemaakt van houtsoorten die veel hars bezitten zoals lariks, Oregon
          pine, Douglas pine of soms ook wel (Schots) eikenhout. De hars heeft
          de eigenschap waterafstotend te zijn, zodat de wash niet in de poriën
          van het hout gaat zitten en daarmee ook geen bacteriën. Het hout
          waarvan een washback is gemaakt is “Boatskin” (uit het midden van de
          stam) gezaagd. Een houten washback gaat zo’n 40 jaar mee en is
          moeilijker goed schoon te krijgen dan stalen washbacks. Bij de Ardbeg
          distilleerderij bijvoorbeeld, worden de de houten washbacks na elke
          gisting een half uur met stoom gereinigd en twee keer per jaar, in de
          zomer tijdens de ‘silent season’ en tijdens de kerstdagen, worden ze
          behandeld met een desinfecterend middel.
          <br />
          <br />
          <br />
          WASH STILL
          <br />
          De pott still waarin zich de eerste distillatie voltrekt, en waarvan
          het resultaat als low wine naar de spirit still gaat voor de tweede
          distillatie. De wash still is meestal groter dan de spirit still.
          <br />
          <br />
          <br />
          WATER
          <br />
          Water is één van de belangrijkste ingrediënten van malt whisky. De
          meeste distilleerderijen hebben daarom ook een eigen watervoorziening.
          Dit kan zijn in de vorm van een ondergrondse waterbron, een meer, een
          beek (burn), een rivier, of gewoon leidingwater.
          <br />
          Bij de meeste distilleerderijen gebruikt men water voor het brouwen,
          voor het koelen van de condensors en voor het schoon maken van de
          apparatuur waarmee de malt wordt gemaakt.
          <br />
          Vroeger had het water nog een functie, namelijk het inweken van de
          gerst in het moutproces. Er zijn slechts enkele distilleerderijen die
          nog alle gerst of een deel er van zelf mouten. Dit zijn Tamdhu (100%),
          Highland Park (20%), Balvenie (20%), Bowmore (20%), Laphroaig (20%),
          Springbank (100%) en Glen Ord (100%). Tot voor kort zat ook Ben Riach
          hierbij (10%).
          <br />
          De meeste moutvloeren bij de distilleerderijen zijn in de jaren 60 van
          de twintigste eeuw buiten bedrijf gesteld, en verbouwd tot warehouse
          of bezoekerscentrum. Grotere mouterijen die de mout op een goedkopere
          manier kunnen produceren hebben de productie overgenomen.
          <br />
          Waar men vroeger het water ook voor gebruikte was om het
          alcoholpercentage af te zwakken tot consumptiesterkte, vroeger tot 46%
          en tegenwoordig tot 43 of 40% alcohol van het volume. De enige
          distilleerderijen die dit nog doen zijn Macallan, Springbank en
          Glenfiddich. De laatste twee distilleerderijen bottelen hun malt
          whisky ook nog zelf.
          <br />
          Tegenwoordig wordt single malt meestal elders gebotteld bij een
          bottelaar, en wordt voor het op sterkte brengen gewoon plaatselijk,
          vaak gedemineraliseerd leidingwater gebruikt.
          <br />
          <br />
          <br />
          WHISKY BOOM
          <br />
          Dit was de periode aan het eind van de 19de eeuw waarin opeens een
          grote vraag ontstond naar Schotse whisky. Dit kwam omdat de
          wijngaarden in Frankrijk rond 1870 vrijwel geheel waren vernietigd
          door een druifluis, de Phylloxera Vastatrix. De voorraden armagnac en
          cognac, dranken die in die tijd zeer populair waren bij vooral de
          Londenaar, raakten langzaam maar zeker op. De consument week uit naar
          Schotse whisky, en zodoende werd er in de loop van het einde van de
          19de eeuw steeds meer whisky verkocht. In die tijd verkregen namen als
          Johnny Walker, Dewars, Haig, Black &amp; White, White Horse, Bell’s
          enz enz. de bekendheid die ze nu nog steeds hebben. In deze periode
          schoten ook distilleerderijen als paddestoelen uit de grond. Aan de
          groeiperiode kwam abrupt een einde toen bleek dat met name de
          Pattisons brothers teveel geld hadden geleend en meer whisky hadden
          geproduceerd dan er verkocht kon worden om hun schulden af te lossen.
          De enorme voorraden whisky waren toen ineens niets meer waard.
          <br />
          <br />
          <br />
          WORM TUB
          <br />
          Een ouderwets soort condenser die je in Schotland weinig meer tegen
          komt. Het is een grote houten bak die gevuld is met constant
          doorlopend koud water. In dat water bevind zich een grote koperen
          spiraal die loopt van de lyne arm van de still naar de receiver. Door
          de koperen spiraal loopt alcoholdamp (het distillaat). Door het koude
          water condenseren de dampen tot vloeistof. Een worm tub staat altijd
          buiten het stillhouse opgesteld, in tegenstelling tot de meeste
          condensers. De distilleerderijen die nog worm tubs gebruiken zijn
          onder andere Dalwhinnie en Mortlach
          <br />
          <br />
          <br />
          WORMS SHARE
          <br />
          “Het deel van de wormen”. Het wil wel eens gebeuren dat er een lek in
          een dak van een warehouse komt dat niet op tijd ontdekt wordt. Het
          water drupt op de vaten er onder zodat de ijzeren ringen gaan roesten.
          Wanneer deze doorgeroest zijn vallen de duigen uiteen en zal de
          rijpende whisky op de grond en door de aarden vloer van het warehouse
          verdwijnen zodat de wormen er hun deel van kunnen nemen.
          <br />
          <br />
          <br />
          WORT
          <br />
          De suikerhoudende vloeistof die ontstaan is in de mash tun en klaar is
          voor fermentatie in de wash backs.
          <br />
          <br />
          <br />
          <Letter>Y</Letter>
          <br />
          YEAST
          <br />
          Gist is een eencellig micro-organisme dat zich voedt met zuurstof en
          suiker en in staat is zichzelf te vermenigvuldigen. Wanneer de
          zuurstof uit de vloeistof verdwenen is stopt de vermenigvuldiging en
          wordt de suiker omgezet in alcohol en koolzuurgas.
          <br />
          In Schotland gebruikt men geperste brouwersgist en gecultiveerde /
          distillateurs gist. Brouwersgist is al eerder gebruikt. Het is
          daardoor iets trager en geeft minder alcohol maar meer smaak aan het
          eindproduct. Distillateursgist is sneller en geeft weinig tot geen
          smaak, maar meer alcohol aan het eindproduct. Vaak worden beide gisten
          in een specifieke verhouding tegelijk gebruikt.
          <br />
          De laatste tijd wordt er steeds vaker overgegaan op vloeibare gist die
          per tankauto wordt aangevoerd. Deze gist bestaat uit één soort
          distillateurs gist.
          <br />
        </div>
      </ContentSection>
    </div>
  );
}
