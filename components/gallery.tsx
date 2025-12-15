import Image from "next/image"

export function Gallery() {
  const images = [
    { src: "/s1.jpg", aspect: "portrait" },
    { src: "/s2.jpg", aspect: "square" },
    { src: "/s3.jpg", aspect: "portrait" },
    { src: "/s4.jpg", aspect: "landscape" },
    { src: "/s5.jpg", aspect: "square" },
  ]

  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of the transformations we create every day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg bg-muted hover:scale-105 transition-transform duration-300 group ${
                image.aspect === "portrait" ? "row-span-2" : image.aspect === "landscape" ? "col-span-2" : ""
              }`}
            >
              <div
                className={`${
                  image.aspect === "portrait"
                    ? "aspect-[3/4]"
                    : image.aspect === "landscape"
                      ? "aspect-[2/1]"
                      : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
