// FooterComponent.tsx
import Link from "next/link";
import Image from "next/image";

const links = {
  resources: [
    { href: "/resources/join", label: "Become a member" },
    { href: "/resources/feedback", label: "Feedback" },
    { href: "/resources/promo-codes", label: "Promo Codes" },
  ],
  help: [
    { href: "/help/order-status", label: "Order status" },
    { href: "/help/shipping-delivery", label: "Shipping & Delivery" },
    { href: "/help/returns", label: "Returns" },
    { href: "/help/payment-options", label: "Payment options" },
    { href: "/help/contact-us", label: "Contact us" },
    { href: "/help/reviews", label: "Reviews" },
  ],
  company: [
    { href: "/company/about-us", label: "About us" },
    { href: "/company/blog", label: "Our Blog" },
    { href: "/company/careers", label: "Careers" },
    { href: "/company/investors", label: "Investors" },
    { href: "/company/purpose", label: "Purpose" },
  ],
};

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Desktop footer */}
      <div className="container mx-auto lg:py-8 pt-3 pb-8 px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Company synopsis */}
          <div className="hidden md:block flex-col space-y-3 items-center">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className={"w-[50px] h-[50px] object-contain rounded-full"}
            />

            <p className="text-sm text-white font-thin">
              We believe in the potential of community-driven commerce and are
              committed to building a platform that benefits local businesses
              and encourages meaningful connections.
            </p>
          </div>

          {/* Resources */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 mt-3">Resources</h3>
            <ul>
              {links.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white font-thin text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 mt-3">Help</h3>
            <ul>
              {links.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white font-thin text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 mt-3">Company</h3>
            <ul>
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white font-thin text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile footer */}
      <div className="container mx-auto pb-8 pt-0 px-4 sm:hidden">
        <div className="grid grid-cols-1 gap-8">
          {/* Company synopsis */}
          <div className="flex flex-col space-y-3">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className={"w-[50px] h-[50px] object-contain rounded-full"}
            />

            <p className="text-sm text-white font-thin">
              We believe in the potential of community-driven commerce and are
              committed to building a platform that benefits local businesses
              and encourages meaningful connections.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              {links.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white font-thin text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              {links.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white font-thin text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white font-thin text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-gray-300 text-sm">
          &copy; 2024 Mzxit (Pty) Ltd. All rights reserved
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/policies/terms-of-use">
            <span className="text-gray-300 hover:text-white text-sm">
              Terms of use
            </span>
          </Link>
          <Link href="/policies/terms-of-sale">
            <span className="text-gray-300 hover:text-white text-sm">
              Terms of sale
            </span>
          </Link>
          <Link href="/policies/privacy-and-cookie">
            <span className="text-gray-300 hover:text-white text-sm">
              Privacy & Cookie Policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
