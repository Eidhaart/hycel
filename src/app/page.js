"use client";

import Image from "next/image";

export default function Home() {
  const contentBlocks = [
    {
      special: true,
      title: "",
      description: (
        <>
          <p>Telefon: +48 606 903 286</p>
          <p>Email: bartosz.gadziomski@gmail.com</p>
        </>
      ),
    },
    {
      src: "/images/DSC07363.jpg",
      alt: "Hyceleu branding vehicle",
      title: "Odławianie zwierząt",
      description: (
        <>
          <p>
            Odławianie bezdomnych i wolno żyjących zwierząt Od lat
            współpracujemy z urzędami gmin, fundacjami oraz innymi podmiotami,
            świadcząc usługi w zakresie odławiania zwierząt bezdomnych i wolno
            żyjących oraz ich transportu.
          </p>
          <p>
            Dysponujemy wszelkimi wymaganymi zezwoleniami oraz licencją
            przewoźnika. Pracujemy przy użyciu specjalistycznego sprzętu, który
            pozwala na bezpieczny i humanitarny odłów zwierząt.
          </p>
        </>
      ),
    },
    {
      src: "/images/1000017260.jpg",
      alt: "Sprzęt do odławiania",
      title: "Sprzęt",
      description: (
        <>
          <p>
            Transport zwierząt Posiadamy licencjonowane pojazdy oraz przyczepy
            dostosowane do przewozu różnych gatunków zwierząt – od psów i koni
            po dzikie zwierzęta.
          </p>
          <p>
            Dzięki wieloletniemu doświadczeniu podejmujemy się również
            wymagających transportów – zwierząt lękowych, agresywnych czy
            pochodzących ze schronisk i fundacji.
          </p>
          <p>
            Nasz zespół doskonale radzi sobie w sytuacjach wymagających
            szczególnej ostrożności i empatii.
          </p>
        </>
      ),
    },
    {
      src: "/images/DSC07371.jpg",
      alt: "Licencja przewozu",
      title: 'Zajecia edukacyjne dla dzieci i mlodzieży "O czym szczeka pies"',
      description: (
        <>
          <p>
            Nauczenie prawidłowego zachowania w obecności zwierząt, odczytywania
            znaków dawanych przez zwierzęta podczas pracy z nimi.
          </p>
          <p>
            Zapobieganie sytuacjom w których mogą powstać sytuacje konfliktowe
            pomiędzy ludźmi i zwierzętami. Omówimy również sposoby postępowania
            w obecności zwierząt nieznanych i zwierząt bezdomnych.
          </p>
          <p>
            Pokazanie nowego modelu spędzania czasu wraz z psem, przedstawienie
            i omówienie podstawowych dyscyplin z dziedziny sportu psich
            zaprzęgów, nauczanie technik canicross i canirando (aktywny spacer z
            psem przypiętym do pasa za pomocą specjalnego pasa do ćwiczącego).
          </p>
          <p>Ćwiczenia koordynacyjno- ruchowe</p>
        </>
      ),
    },
  ];

  return (
    <main>
      {/* HERO IMAGE SECTION */}
      <section className="hero-top">
        <div className="hero-text-centered">
          <h1>ODŁAWIANIE ZWIERZĄT</h1>
          <p>Humanitarne metody, profesjonalizm i współpraca</p>
        </div>
      </section>

      {/* 2x2 GRID SECTION */}
      <section className="grid-layout">
        {contentBlocks.map((block, index) => (
          <div
            key={index}
            className={`content-card${block.special ? " special-card" : ""}`}
          >
            {block.src && (
              <div className="content-image">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <div className="content-body">
              <h2>{block.title}</h2>
              <div>{block.description}</div>
            </div>
          </div>
        ))}
      </section>

      {/* MEDIA SECTION */}
      <div className="media-box-horizontal">
        <h2>Media o nas</h2>
        <div className="media-row">
          {["OHT-UPqprbs", "vuIzBUFrmdw"].map((videoId, index) => (
            <div className="video-container-horizontal" key={index}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <h2>O naszej Pasji</h2>
        <div className="button-wrapper">
          <a
            href="https://uwaga.tvn.pl/reportaze/poruszajaca-historia-bezdomnego-psa-ls6687100"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button"
          >
            „Hycel. Historia nietypowej pasji” – Wirtualna Polska
          </a>
        </div>
      </div>
      {/* TRUSTED BY SECTION */}
      <section className="trusted-by">
        <h2>Zaufali nam</h2>
        <div className="trusted-groups">
          <div>
            <h3>Fundacje</h3>
            <p className="trusted-list">
              Viva • Mondo Cane • Zielony Pies • Pogotowie dla zwierząt •
              Fundacja Wzajemnie Pomocni • Medor • Gadehunde • Dobermannothilfe
            </p>
          </div>
          <div>
            <h3>Urzędy gmin</h3>
            <p className="trusted-list">
              Brochów • Leoncin • Pomiechówek • Czosnów • Jabłonna • Zakroczym •
              Naruszewo • Zaluski • Maków Mazowiecki • Halinów • Wiązowna •
              Lelis • Żabia Wola • Gostynin
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
