import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "لقد ساعدتنا هذه الشركة على تحسين أداء موقعنا بشكل كبير وزيادة المبيعات.",
      author: "أحمد محمد",
      role: "مدير تنفيذي، شركة الأفق",
    },
    {
      quote: "فريق عمل محترف ومتعاون، قدموا لنا حلولاً مبتكرة تناسب احتياجاتنا.",
      author: "سارة أحمد",
      role: "مديرة التسويق، مؤسسة النجاح",
    },
    {
      quote: "تجربة رائعة من البداية إلى النهاية، أنصح بشدة بالتعامل معهم.",
      author: "خالد عبدالله",
      role: "مؤسس، شركة المستقبل",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">ماذا يقول عملاؤنا</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              اطلع على تجارب عملائنا السابقين معنا
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={`/placeholder.svg?height=64&width=64&text=${index + 1}`}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center">
                <p className="text-gray-500 dark:text-gray-400">"{testimonial.quote}"</p>
                <div>
                  <h3 className="font-bold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
