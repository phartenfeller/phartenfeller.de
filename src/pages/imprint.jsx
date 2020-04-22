import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const Imprint = () => (
  <Layout>
    <header className="grid grid-cols-3 py-2">
      <div className="flex">
        <Link
          className="text-red-800 py-2 px-4 self-center font-semibold tracking-wider"
          to="/"
        >
          <svg
            className="inline-block h-8 mr-2 text-red-700"
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7 13.25l-.573.614a.2.2 0 000 .272l5.327 5.707a.2.2 0 00.292 0l1.127-1.206a.2.2 0 000-.273l-3.945-4.228a.2.2 0 010-.272l3.945-4.228a.2.2 0 000-.273l-1.127-1.206a.2.2 0 00-.292 0L12.7 13.25z"
            />
          </svg>
          BACK
        </Link>
      </div>
      <h1 className="text-3xl text-center">Imprint</h1>
    </header>
    <div className="m-auto w-3/4 md:w-1/2 mb-8">
      <h2 className="text-2xl my-4">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p className="text-gray-800">
        Philipp Hartenfeller
        <br />
        Christophstr. 𝟓𝟓
        <br />
        𝟒𝟎𝟐𝟐𝟓 Düsseldorf
      </p>
      <h2 className="text-2xl my-4">Kontakt</h2>
      <p className="text-gray-800">
        Telefon: +𝟒𝟗 (𝟎) 𝟏𝟓𝟕 𝟖𝟖 𝟐𝟎𝟕 𝟖𝟏𝟓
        <br />
        E-Mail: contact@hartenfeller.dev
      </p>
      <h3 className="text-xl my-2">Haftung f&uuml;r Inhalte</h3>
      <p className="text-gray-800">
        Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
        f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
        gespeicherte fremde Informationen zu &uuml;berwachen oder nach
        Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
        hinweisen.
      </p>
      <p className="text-gray-800">
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon
        unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem
        Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>
      <h3 className="text-xl my-2">Haftung f&uuml;r Links</h3>
      <p className="text-gray-800">
        Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r
        diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r
        die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
        Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
        &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar.
      </p>
      <p className="text-gray-800">
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>
      <h3 className="text-xl my-2">Urheberrecht</h3>
      <p className="text-gray-800">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen
        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht
        kommerziellen Gebrauch gestattet.
      </p>
      <p className="text-gray-800">
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
  </Layout>
);

export default Imprint;
