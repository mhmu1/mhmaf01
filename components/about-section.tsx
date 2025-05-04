import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, GraduationCap, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">من أنا</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              تعرف على المهندس محمد عواد
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1745321824457.jpg-MIsjkT0HkWE0yv4Cis6gMOzTw0GwgM.jpeg"
                alt="صورة المهندس محمد عواد"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">المسحك - بيجي، العراق</span>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <p className="mb-4 text-lg">
                أنا محمد عواد، مهندس مدني من قرية المسحك - مدينة بيجي. أعمل في تنفيذ المشاريع الميدانية، وأهتم بتوثيق
                العمل الهندسي ونشره للجمهور.
              </p>
              <p className="mb-6 text-lg">أسعى لنقل صورة واقعية عن مهنة الهندسة في العراق.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>بكالوريوس هندسة مدنية</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>مهندس تنفيذ مشاريع</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
