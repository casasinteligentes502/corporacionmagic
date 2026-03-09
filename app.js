const { useEffect, useMemo, useState } = React;

function App() {
  const biz = useMemo(
    () => ({
      // Corporación Magic
      name: "Corporacion Magic",
      legalName: "Corporacion Magic",
      service: "Producción y organización de eventos",
      coverage: "Atendemos toda Guatemala",
      hours: "Siempre abierto",
      founded: "1984",
      experienceText: "Hemos organizado eventos por más de 40 años en Guatemala",

      // ✅ Nuevo logo (para toda la web)
      logo: "./assets/logo_magic_new..png",

      phone: "+502 4450 3971",
      whatsapp: "+502 4450 3971",
      email: "castro2020@gmail.com",

      // Redes (Corporación Magic) — si no tienes, puedes dejar null
      instagram: null,
      facebook: null,

      // Asociados
      partners: {
        sugar: {
          name: "Sugar Eventos GT",
          role: "Decoración y organización de eventos",
          phone: "+502 3024 0572",
          email: "eventosguatemala@hotmail.com",
          instagram: "https://www.instagram.com/sugareventosgt/",
          facebook: "https://www.facebook.com/profile.php?id=100063629857897&sk=about",
          img: "./assets/sugar_gt.jpg",
        },
        marisol: {
          name: "Marisol Mayen",
          role: "Foto y video para eventos",
          phone: null,
          email: null,
          instagram: null,
          facebook: null,
          img: "./assets/marisol_mayen.jpg",
        },
        picture: {
          name: "Picture Time",
          role: "Photobooth (cabina de fotos)",
          phone: "+502 5066 1171",
          instagram: "https://www.instagram.com/picture.time/",
          facebook:
            "https://www.facebook.com/profile.php?id=100063076038608&sk=photos&locale=es_LA",
          img: "./assets/picture_time.jpg",
        },
      },
    }),
    []
  );

  const waLink = useMemo(() => {
    const digits = biz.whatsapp.replace(/[^\d]/g, "");
    const msg = encodeURIComponent(
      `Hola Corporacion Magic 👋 Quiero cotizar un evento. ¿Me apoyan?`
    );
    return `https://wa.me/${digits}?text=${msg}`;
  }, [biz.whatsapp]);

  const waPartner = (phone, message) => {
    if (!phone) return "#";
    const digits = phone.replace(/[^\d]/g, "");
    const msg = encodeURIComponent(message);
    return `https://wa.me/${digits}?text=${msg}`;
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  const imgFallback = (e) => {
    // If an image fails to load, swap to a safe placeholder inside /assets/
    e.currentTarget.onerror = null;
    e.currentTarget.src = "./assets/placeholder.jpg";
  };

const year = new Date().getFullYear();

  return (
    <div className="app">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>

      <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
        <div className="container topbar__inner">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
<img className="brand__logoBig" src={biz.logo} alt="Corporacion Magic" onError={imgFallback} />

            <div className="brand__text">
              <div className="brand__name">{biz.name}</div>
              <div className="brand__seo">{biz.experienceText}</div>
            </div>
          </a>

          <nav className="nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#asociados">Asociados</a>
            <a href="#galeria">Galería</a>
            <a href="#video">Video</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="topbar__cta">
            <a className="btn btn--ghost" href={`mailto:${biz.email}`}>
              Correo
            </a>
            <a className="btn btn--primary" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="contenido">
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <h1>
                Eventos con estilo, detalle y amor en <span className="accent">Guatemala</span>.
              </h1>

              <p className="lead">
                En <strong>{biz.name}</strong> organizamos tu celebración de principio a fin:
                cumpleaños, bodas, 15 años y eventos especiales. <strong>{biz.hours}</strong>.
              </p>

              <div className="hero__badges" role="list" aria-label="Características">
                <span className="pill" role="listitem">✨ Decoración premium</span>
                <span className="pill" role="listitem">🎂 Mesas de postres</span>
                <span className="pill" role="listitem">💐 Temáticas personalizadas</span>
                <span className="pill" role="listitem">📍 {biz.coverage}</span>
              </div>

              <div className="hero__actions">
                <a className="btn btn--primary btn--lg" href={waLink} target="_blank" rel="noreferrer">
                  Cotizar por WhatsApp
                </a>
                <a className="btn btn--ghost btn--lg" href="#galeria">
                  Ver ideas
                </a>
              </div>

              <div className="hero__meta">
                <div className="metaCard">
                  <div className="metaCard__label">Teléfono / WhatsApp</div>
                  <a className="metaCard__value" href={`tel:${biz.phone.replace(/\s/g, "")}`}>
                    {biz.phone}
                  </a>
                </div>
                <div className="metaCard">
                  <div className="metaCard__label">Fundado</div>
                  <div className="metaCard__value">{biz.founded}</div>
                </div>
              </div>
            </div>

            <div className="hero__media" aria-label="Imagen principal">
              <div className="heroImage">
                <img src="./assets/bicicleta.jpg" alt="Decoración temática con bicicleta y flores" />
              </div>

              <div className="floatingCard">
                <div className="floatingCard__title">{biz.name}</div>
                <div className="floatingCard__text">
                  Diseños elegantes, colores armoniosos y montaje profesional.
                </div>
                <div className="floatingCard__row">
                  <a className="miniLink" href={biz.partners.sugar.instagram} target="_blank" rel="noreferrer">
                    Instagram (Sugar)
                  </a>
                  <span className="dot" />
                  <a className="miniLink" href={biz.partners.sugar.facebook} target="_blank" rel="noreferrer">
                    Facebook (Sugar)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section__head">
              <h2>Servicios</h2>
              <p>Elige lo que necesitas. Nosotros nos encargamos del resto.</p>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Organización completa</h3>
                <p>Planificación, montaje, coordinación y desmontaje. Tú solo disfrutas.</p>
                <ul className="list">
                  <li>Diseño de concepto</li>
                  <li>Logística y tiempos</li>
                  <li>Montaje profesional</li>
                </ul>
              </article>

              <article className="card">
                <h3>Decoración temática</h3>
                <p>Colores y estilo a tu gusto: elegante, romántico, moderno o infantil.</p>
                <ul className="list">
                  <li>Arreglos florales</li>
                  <li>Backings y mesas</li>
                  <li>Detalles personalizados</li>
                </ul>
              </article>

              <article className="card">
                <h3>Mesa de postres</h3>
                <p>Presentación cuidada para fotos increíbles y una experiencia memorable.</p>
                <ul className="list">
                  <li>Montaje estético</li>
                  <li>Estación de dulces</li>
                  <li>Señalización y props</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ASOCIADOS */}
        <section id="asociados" className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Empresas asociadas</h2>
              <p>Unimos experiencia en organización, foto y video para que tu evento salga impecable.</p>
            </div>

            <div className="partnersGrid">
              {/* Sugar */}
              <article className="partnerCard">
                <div className="partnerTop">
                  <img className="partnerLogo" src={biz.partners.sugar.img} alt={biz.partners.sugar.name} onError={imgFallback} />
                  <div>
                    <div className="partnerName">{biz.partners.sugar.name}</div>
                    <div className="partnerRole">{biz.partners.sugar.role}</div>
                  </div>
                </div>

                <div className="partnerMeta">
                  <div>
                    <strong>Tel/WhatsApp:</strong>{" "}
                    <a
                      href={waPartner(
                        biz.partners.sugar.phone,
                        "Hola Sugar Eventos GT 👋 Quiero cotizar un evento. ¿Me apoyan?"
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {biz.partners.sugar.phone}
                    </a>
                  </div>
                  <div>
                    <strong>Correo:</strong>{" "}
                    <a href={`mailto:${biz.partners.sugar.email}`}>{biz.partners.sugar.email}</a>
                  </div>
                </div>

                <div className="partnerLinks">
                  <a
                    className="btn btn--primary"
                    href={waPartner(
                      biz.partners.sugar.phone,
                      "Hola Sugar Eventos GT 👋 Quiero cotizar un evento. ¿Me apoyan?"
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar
                  </a>
                  <a className="btn btn--ghost" href={biz.partners.sugar.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              </article>

              {/* Marisol */}
              <article className="partnerCard">
                <div className="partnerTop">
                  <img className="partnerLogo" src={biz.partners.marisol.img} alt={biz.partners.marisol.name} />
                  <div>
                    <div className="partnerName">{biz.partners.marisol.name}</div>
                    <div className="partnerRole">{biz.partners.marisol.role}</div>
                  </div>
                </div>
                <div className="partnerMeta">
                  <div>
                    Agrega su <strong>portafolio</strong> (reels/videos) y su contacto cuando lo tengas.
                  </div>
                </div>
                <div className="partnerLinks">
                  <a className="btn btn--ghost" href="#video">Ver video</a>
                  <a className="btn btn--ghost" href="#contacto">Contactar</a>
                </div>
              </article>

              {/* Picture Time */}
              <article className="partnerCard">
                <div className="partnerTop">
                  <img className="partnerLogo" src={biz.partners.picture.img} alt={biz.partners.picture.name} />
                  <div>
                    <div className="partnerName">{biz.partners.picture.name}</div>
                    <div className="partnerRole">{biz.partners.picture.role}</div>
                  </div>
                </div>

                <div className="partnerMeta">
                  <div>
                    <strong>Tel/WhatsApp:</strong>{" "}
                    <a
                      href={waPartner(
                        biz.partners.picture.phone,
                        "Hola Picture Time 👋 Quiero reservar el photobooth para un evento. ¿Me apoyan?"
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {biz.partners.picture.phone}
                    </a>
                  </div>
                  <div>
                    <strong>Instagram:</strong>{" "}
                    <a href={biz.partners.picture.instagram} target="_blank" rel="noreferrer">
                      @picture.time
                    </a>
                  </div>
                  <div>
                    <strong>Facebook:</strong>{" "}
                    <a href={biz.partners.picture.facebook} target="_blank" rel="noreferrer">
                      Ver fotos
                    </a>
                  </div>
                </div>

                <div className="partnerLinks">
                  <a
                    className="btn btn--primary"
                    href={waPartner(
                      biz.partners.picture.phone,
                      "Hola Picture Time 👋 Quiero reservar el photobooth para un evento. ¿Me apoyan?"
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reservar
                  </a>
                  <a className="btn btn--ghost" href={biz.partners.picture.facebook} target="_blank" rel="noreferrer">
                    Ver fotos
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Galería</h2>
              <p>Inspiración para tu próximo evento.</p>
            </div>

            <div className="gallery">
              <figure className="shot shot--big">
                <img src="./assets/bicicleta.jpg" alt="Montaje decorativo con bicicleta y flores" />
                <figcaption>Montaje decorativo con flores</figcaption>
              </figure>

              <figure className="shot">
                <img className="gallery__img" src={biz.partners.sugar.img} alt="Producción Sugar Eventos GT" />
                <figcaption>Producción • Sugar Eventos GT</figcaption>
              </figure>

              <figure className="shot shot--logo">
                <img className="gallery__img gallery__img--logo" src={biz.logo} alt="Identidad visual Corporacion Magic" />
                <figcaption>Identidad visual • Corporacion Magic</figcaption>
              </figure>

              <figure className="shot">
                <img src="./assets/salon.jpg" alt="Decoración Corporacion Magic" />
                <figcaption>Espacio para otro evento</figcaption>
              </figure>

              <figure className="shot">
                <img src="./assets/sombrillas.jpg" alt="Decoración temática Corporacion Magic" />
                <figcaption>Espacio para otra temática</figcaption>
              </figure>
            </div>

            <div className="ctaStrip">
              <div>
                <div className="ctaStrip__title">¿Quieres cotizar rápido?</div>
                <div className="ctaStrip__text">Escríbenos por WhatsApp y te atendemos al instante.</div>
              </div>
              <a className="btn btn--primary" href={waLink} target="_blank" rel="noreferrer">
                Escribir ahora
              </a>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" className="section">
          <div className="container">
            <div className="section__head">
              <h2>Video</h2>
              <p>Un vistazo a nuestro estilo de montaje y decoración.</p>
            </div>

            <div className="videoWrap">
              <video controls playsInline muted preload="metadata" poster="./assets/video-poster.jpg">
                <source src="./assets/promo-fast.mp4" type="video/mp4" />
                <source src="./assets/promo.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            <div className="tiny" style={{ marginTop: 10 }}>
              Nota: Si en el video aparece algún número antiguo, el contacto correcto es{" "}
              <strong>{biz.phone}</strong> (Marco Alberto Castro).
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section section--alt">
          <div className="container contact">
            <div className="contact__left">
              <h2>Contacto</h2>
              <p className="lead">
                <strong>{biz.legalName}</strong> • {biz.service}
                <br />
                <strong>{biz.coverage}</strong> • <strong>{biz.hours}</strong>
                <br />
                Fundado desde <strong>{biz.founded}</strong>
              </p>

              <div className="contactCards">
                <div className="contactCard">
                  <div className="contactCard__label">Tel principal / WhatsApp</div>
                  <a className="contactCard__value" href={waLink} target="_blank" rel="noreferrer">
                    {biz.phone}
                  </a>
                </div>

                <div className="contactCard">
                  <div className="contactCard__label">Correo Corporacion Magic</div>
                  <a className="contactCard__value" href={`mailto:${biz.email}`}>
                    {biz.email}
                  </a>
                </div>

                <div className="contactCard">
                  <div className="contactCard__label">Sugar Eventos GT</div>
                  <a
                    className="contactCard__value"
                    href={waPartner(
                      biz.partners.sugar.phone,
                      "Hola Sugar Eventos GT 👋 Quiero cotizar un evento. ¿Me apoyan?"
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {biz.partners.sugar.phone}
                  </a>
                  <div className="tiny">{biz.partners.sugar.email}</div>
                </div>

                <div className="contactCard">
                  <div className="contactCard__label">Picture Time (Photobooth)</div>
                  <a
                    className="contactCard__value"
                    href={waPartner(
                      biz.partners.picture.phone,
                      "Hola Picture Time 👋 Quiero reservar el photobooth para un evento. ¿Me apoyan?"
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {biz.partners.picture.phone}
                  </a>
                  <div className="tiny">
                    @picture.time •{" "}
                    <a href={biz.partners.picture.facebook} target="_blank" rel="noreferrer">
                      Facebook (fotos)
                    </a>
                  </div>
                </div>
              </div>

              <div className="socialRow" aria-label="Redes sociales">
                <a className="btn btn--ghost" href={biz.partners.sugar.facebook} target="_blank" rel="noreferrer">
                  Facebook (Sugar)
                </a>
                <a className="btn btn--ghost" href={biz.partners.sugar.instagram} target="_blank" rel="noreferrer">
                  Instagram (Sugar)
                </a>
              </div>
            </div>

            <div className="contact__right">
              <div className="formCard">
                <h3>Mensaje rápido</h3>
                <p>Esto abre WhatsApp con un mensaje pre-escrito.</p>

                <a className="btn btn--primary btn--lg w100" href={waLink} target="_blank" rel="noreferrer">
                  Abrir WhatsApp y cotizar
                </a>

                <div className="tiny">
                  Tip: Puedes cambiar el texto del mensaje dentro de <code>waLink</code> en App.js
                </div>
              </div>

              <div className="noteCard">
                <h4>Disponibilidad</h4>
                <p>{biz.hours}. Atendemos eventos en toda Guatemala.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="footer__brand">
              {/* ✅ Cambié al nuevo logo */}
              <img className="footer__logo" src={biz.logo} alt="Corporacion Magic" onError={imgFallback} />
              <div>
                <div className="footer__name">{biz.name}</div>
                <div className="footer__tag">{biz.service} • Guatemala</div>
                <div className="footer__small">
                  Fundado desde {biz.founded} • {biz.phone}
                </div>
              </div>
            </div>

            <div className="footer__small">
              © {year} {biz.name}. Todos los derechos reservados.
            </div>
          </div>

          <div className="footer__right">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#asociados">Asociados</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <a className="waFloat" href={waLink} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
          <span className="waFloat__dot" />
          WhatsApp
        </a>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);