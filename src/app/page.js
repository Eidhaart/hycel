"use client";

import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main>
      <SpeedInsights />
      {/* HERO SECTION */}
      <div className="hero-wrapper">
        <section className="hero-top">
          <div className="hero-text-centered">
            <h1>ODŁAWIANIE I TRANSPORT ZWIERZĄT</h1>
            <i>
              Nasza firma działa na rynku od 2009 roku, stale rozwijając swoje
              technologie, sprzęt oraz metody pracy. Od początku istnienia
              stawiamy na profesjonalizm, skuteczność i dobro zwierząt.
            </i>
          </div>
        </section>
      </div>
      {/* 2x2 GRID STATIC SECTION */}
      <section className="grid-layout">
        {/* Card 1 - Kontakt */}
        <div className="content-card special-card">
          <div className="content-body">
            <h2>Kontakt</h2>
            <p>+48 606 903 286</p>
            <p>bartosz.gadziomski@gmail.com</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="content-card">
          <div className="content-body">
            <h2>Odławianie bezdomnych i wolno żyjących zwierząt</h2>
            <p>
              Od lat współpracujemy z urzędami gmin, fundacjami oraz innymi
              podmiotami, świadcząc usługi w zakresie odławiania zwierząt
              bezdomnych i wolno żyjących oraz ich transportu. Dysponujemy
              wszelkimi wymaganymi zezwoleniami oraz licencją przewoźnika.
              Pracujemy przy użyciu specjalistycznego sprzętu, który pozwala na
              bezpieczny i humanitarny odłów zwierząt.
            </p>
          </div>
          <div className="content-images-row">
            <div className="content-image-square">
              <Image
                src="/images/sprzęt1.jpg"
                alt="Image 1"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-image-square">
              <Image
                src="/images/sprzęt2.jpg"
                alt="Image 2"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-image-square">
              <Image
                src="/images/sprzęt3.jpg"
                alt="Image 3"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="content-card">
          <div className="content-body">
            <h2>Transport zwierząt</h2>
            <p>
              Posiadamy licencjonowane pojazdy oraz przyczepy dostosowane do
              przewozu różnych gatunków zwierząt od psów i koni po dzikie
              zwierzęta.
            </p>
            <p>
              Dzięki wieloletniemu doświadczeniu podejmujemy się również
              wymagających transportów zwierząt lękowych, agresywnych czy
              pochodzących ze schronisk i fundacji.
            </p>
            <p>
              Nasz zespół doskonale radzi sobie w sytuacjach wymagających
              szczególnej ostrożności i empatii.
            </p>
          </div>
          <div className="content-images-row">
            <div className="content-image-square">
              <Image
                src="/images/transport1.jpg"
                alt="Image 4"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-image-square">
              <Image
                src="/images/transport2.jpg"
                alt="Image 5"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-image-square">
              <Image
                src="/images/transport3.jpg"
                alt="Image 6"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="content-card">
          <div className="content-body">
            <h2>Zajęcia edukacyjne dla dzieci i młodzieży</h2>
            <p>
              &ldquo;O czym szczeka pies&ldquo; cel zajęć: Nauczenie
              prawidłowego zachowania w obecności zwierząt, odczytywania znaków
              dawanych przez zwierzęta podczas pracy z nimi.
            </p>
            <p>
              zapobieganie sytuacjom w ktorych moga powstac konflikty pomiędzy
              ludźmi i zwierzętami. Omówimy również sposoby postępowania w
              obecności zwierzęt nieznanych i bezdomnych.
            </p>
            <p>
              Pokazanie nowego modelu spędzania czasu wraz z psem,
              przedstawienie podstawowych dyscyplin sportów zaprzęgowych,
              nauczanie technik canicross i canirando (aktywny spacer z psem
              przypietym do pasa za pomoca liny z amortyzatorem) jako cwiczenia
              koordynacyjno - ruchowe
            </p>
          </div>
          <div className="content-images-row">
            <div className="content-image-square">
              <Image
                src="/images/zajecia1.JPG"
                alt="Image 7"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-image-square">
              <Image
                src="/images/zajecia3.JPG"
                alt="Image 8"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="content-image-square">
              <Image
                src="/images/zajecia2.JPG"
                alt="Image 9"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* MEDIA SECTION */}
      <div className="media-box-horizontal">
        <h2>Media o nas</h2>
        <div className="media-row">
          <div className="video-container-horizontal">
            <iframe
              src="https://www.youtube.com/embed/OHT-UPqprbs"
              title="YouTube video 1"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container-horizontal">
            <iframe
              src="https://www.youtube.com/embed/vuIzBUFrmdw"
              title="YouTube video 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h2>O naszej Pasji</h2>
        <div className="button-wrapper">
          <a
            href="https://uwaga.tvn.pl/reportaze/poruszajaca-historia-bezdomnego-psa-ls6687100"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button"
          >
            „Hycel. Historia nietypowej pasji” Wirtualna Polska
          </a>
        </div>
      </div>
      {/* TRUSTED BY SECTION */}
      <section className="trusted-by">
        <h2>Zaufali nam</h2>

        <div className="trusted-grid">
          {/* Fundacje Card */}
          <div className="trusted-card">
            <h3>Fundacje</h3>
            <p>
              Viva • Mondo Cane • Zielony Pies • Pogotowie dla zwierząt •
              Fundacja Wzajemnie Pomocni • Medor • Gadehunde • Dobermannothilfe
            </p>
          </div>

          {/* Urzędy Gmin Card */}
          <div className="trusted-card">
            <h3>Urzędy Gmin</h3>
            <p>
              Brochów • Leoncin • Pomiechówek • Czosnów • Jabłonna • Zakroczym •
              Naruszewo • Załuski • Maków Mazowiecki • Halinów • Wiązowna •
              Lelis • Żabia Wola • Gostynin
            </p>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Bartosz Gadziomski. Wszelkie prawa
            zastrzeżone.
          </p>
          <i>Projekt i wykonanie: Eidhaart</i>
        </div>
      </footer>
    </main>
  );
}
