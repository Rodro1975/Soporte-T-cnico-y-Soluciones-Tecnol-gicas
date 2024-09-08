"use client"; // Agrega esta línea al inicio del archivo
import { useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
    script.integrity =
      "sha384-ka/TfiwB73NdjL+hbZT+6W2uNc9DabIXHg69RgJflTxUvjnb1uWFVRtxxWfGeI1k";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="relative w-full h-64">
              <Image
                src="/images/service1.jpg"
                alt="Servicio 1"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la primera diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la primera
                diapositiva.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="relative w-full h-64">
              <Image
                src="/images/service2.jpg"
                alt="Servicio 2"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la segunda diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la segunda
                diapositiva.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="relative w-full h-64">
              <Image
                src="/images/service3.jpg"
                alt="Servicio 3"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Etiqueta de la tercera diapositiva</h5>
              <p>
                Algún contenido placeholder representativo para la tercera
                diapositiva.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
}
