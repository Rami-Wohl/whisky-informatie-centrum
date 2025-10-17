import { ContentSection } from "~/components/ui/content-section";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function Contact() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="Contact">
        <p>
          U kunt op de volgende manieren contact opnemen met het{" "}
          <b>Whisky Informatie Centrum Nederland:</b>
        </p>
        <p>
          Per telefoon, via het mobiele nummer:
          <br />
          <b>06 - 38 06 22 28</b>
        </p>
        <p>
          Per email, op het volgende adres:
          <br />
          <b>
            <a
              href="mailto:robin@robinbrilleman.nl"
              className="text-blue-600 underline"
            >
              robin@robinbrilleman.nl
            </a>
          </b>
        </p>
        <div className="my-2 flex flex-col gap-6 overflow-hidden lg:flex-row lg:gap-1">
          <ResponsiveImage
            src="/assets/images/ardbeg-cask.jpg"
            alt="Ardbeg cask"
            className="max-h-fit max-w-fit"
            width={1000}
          />
        </div>
      </ContentSection>
    </div>
  );
}
