"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">تواصل معي</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              يمكنك التواصل معي عبر وسائل التواصل الاجتماعي أو إرسال رسالة مباشرة
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>معلومات التواصل</CardTitle>
              <CardDescription>يمكنك التواصل معي عبر إحدى الوسائل التالية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Facebook className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">فيسبوك</p>
                  <p className="text-sm text-gray-500">
                    <a href="mailto:mhmaf01@gmail.com" className="hover:underline">
                      mhmaf01@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">إنستغرام</p>
                  <p className="text-sm text-gray-500">instagram.com/bw_remas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">البريد الإلكتروني</p>
                  <p className="text-sm text-gray-500">
                    <a href="mailto:mhmaf01@gmail.com" className="hover:underline">
                      mhmaf01@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">الموقع</p>
                  <p className="text-sm text-gray-500">المسحك - بيجي، محافظة صلاح الدين، العراق</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>أرسل رسالة</CardTitle>
              <CardDescription>يمكنك إرسال رسالة مباشرة وسأرد عليك في أقرب وقت</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    الاسم
                  </label>
                  <Input id="name" placeholder="أدخل اسمك" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    البريد الإلكتروني
                  </label>
                  <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    الرسالة
                  </label>
                  <Textarea id="message" placeholder="أدخل رسالتك هنا" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
