import { TextLink } from "~/components/nav/text-link";
import { ContentSection } from "~/components/ui/content-section";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function Cursus() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="Cursus">
        <p>
          De Schotse Maltwhisky Cursus bestaat uit 3 dagdelen die ongeveer twee
          uur tot twee en een half uur duren.
        </p>
        <p>
          Deze 3 dagdelen gaan over het productieproces van Schotse maltwhisky
          en per dagdeel worden er 10 whisky&apos;s geproefd die relateren aan
          dit proces. Je krijgt bijvoorbeeld twee whisky&apos;s naast elkaar te
          proeven, de één gemaakt met bronwater en de ander met geturft water of
          een whisky die snel is gedistilleerd naast één die langzaam is
          gedistilleerd.{" "}
        </p>
        <p>
          Als cursusmateriaal voor de gehele cursus wordt het boek de{" "}
          <i>&quot;De Chemie van Schotse Maltwhisky&quot;</i> gebruikt.
        </p>
        <p>
          <b>
            Vanaf september 2025 worden er weer cursussen gegeven voor 1 a 2
            personen per keer. Je mag zelf bepalen op welke dagen en welke
            tijden - wanneer dat niet op een woensdag, vrijdag of zaterdag valt
            en natuurlijk de vergeven data. Voor meer informatie en op welke
            wijze je je kunt inschrijven{" "}
            <TextLink href="/contact" title="zie de contact pagina" />.
          </b>
        </p>
        <div className="my-2 flex flex-col gap-6 overflow-hidden lg:flex-row lg:gap-1">
          <ResponsiveImage
            src="/assets/images/cursus.jpg"
            alt="cursus"
            className="max-h-fit max-w-fit"
            width={1000}
          />
        </div>
      </ContentSection>
    </div>
  );
}
