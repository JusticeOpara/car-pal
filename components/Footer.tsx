import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-300 mt-5 border-t border-gray-100">

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-16 py-10">

        <div className="flex flex-col justify-start items-start gap-6">
          <Image src='/logo.png' alt="logo" className="object-contain" width={118} height={18} />
          <p className="text-base text-gray-500"> Carpal 2023<br /> All right reserved & copy; </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">

              <h3 className="font-bold">{link.title}</h3>

              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-wrap items-center mt-5 sm:px-16 px-6 py-10">
        <p>@2023 CarPal. All Rights Reserved </p>

        <div className="footer__copyrights-link ">
          <Link
            href="/"
            className="text-grey-500">
            Privacy Policy
          </Link>

          <Link
            href="/"
            className="text-grey-500">
            Terms Of Use
          </Link>

        </div>

      </div>

    </footer>
  )
}

export default Footer