import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl text-white">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            🌾 Trusted Agricultural Partner in Nigeria
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Fresh Farm Produce Delivered With Quality You Can Trust
          </h1>

          <p className="mt-6 text-lg leading-8 text-green-100">
            JeyMak supplies premium grains, vegetables, fertilizers,
            seeds, and other agricultural products to homes,
            businesses, and farmers across Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/products">
              Browse Products
            </Button>

            <Button
              href="https://wa.me/2348012345678"
              className="bg-white text-green-800 hover:bg-green-100"
            >
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}