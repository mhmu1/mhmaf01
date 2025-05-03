import { Lightbulb, BarChart3, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "حلول مبتكرة",
      description: "نقدم أفكاراً إبداعية وحلولاً مبتكرة لتلبية احتياجات عملك الفريدة.",
    },
    {
      icon: BarChart3,
      title: "تحليلات متقدمة",
      description: "استفد من تحليلات البيانات المتقدمة لاتخاذ قرارات أفضل وتحسين أداء عملك.",
    },
    {
      icon: Shield,
      title: "أمان موثوق",
      description: "نضمن أمان بياناتك ومعلوماتك الحساسة بأحدث تقنيات الحماية.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">ميزاتنا</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              اكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
