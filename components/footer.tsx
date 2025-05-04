import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#222] text-white py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">المهندس أبو ريماس</h3>
            <p className="text-gray-300">مهندس مدني ومُنشئ محتوى من قرية المسحك - بيجي</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  من أنا
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white">
                  أعمالي
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  تواصل معي
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">تابعني</h3>
            <div className="flex space-x-4 rtl:space-x-reverse mb-4">
              <a
                href="mailto:mhmaf01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">فيسبوك</span>
              </a>
              <a
                href="https://instagram.com/bw_remas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">إنستغرام</span>
              </a>
              <a href="mailto:mhmaf01@gmail.com" className="text-gray-300 hover:text-white">
                <Mail className="h-6 w-6" />
                <span className="sr-only">البريد الإلكتروني</span>
              </a>
            </div>
            <div className="flex items-center text-gray-300 hover:text-white">
              <Phone className="h-5 w-5 ml-2" />
              <a href="tel:+9647700000000" className="hover:underline">
                +964 770 000 0000
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; 2025 المهندس أبو ريماس - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
