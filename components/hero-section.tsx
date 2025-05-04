import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#222] text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            المهندس محمد عواد | Muhammad Awad
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-300">من قرية المسحك - بيجي | مهندس مدني ومُنشئ محتوى</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button variant="default" size="lg" asChild>
              <a href="#contact">تواصل معي</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-white border-white hover:text-white hover:bg-gray-800"
            >
              <a href="#projects">مشاهدة أعمالي</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
