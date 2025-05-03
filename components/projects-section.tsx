import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "مشروع إنشائي 1",
      description: "مشروع هندسي في محافظة صلاح الدين",
      image: "/placeholder.svg?height=400&width=600&text=مشروع+1",
    },
    {
      title: "مشروع إنشائي 2",
      description: "تنفيذ أعمال خرسانية",
      image: "/placeholder.svg?height=400&width=600&text=مشروع+2",
    },
    {
      title: "مشروع إنشائي 3",
      description: "إشراف هندسي على موقع بناء",
      image: "/placeholder.svg?height=400&width=600&text=مشروع+3",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">أعمالي</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              بعض المشاريع الهندسية التي عملت عليها في محافظة صلاح الدين
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500 mb-6">سيتم قريبًا رفع محتوى مفصل عن كل مشروع.</p>
          <Button>عرض جميع المشاريع</Button>
        </div>
      </div>
    </section>
  )
}
