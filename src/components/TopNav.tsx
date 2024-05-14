import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const TopNav = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-[#2e026d]">
              Logo
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#2e026d] hover:text-purple-700"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#2e026d] hover:text-purple-700"
                >
                  About
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#2e026d] hover:text-purple-700"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#2e026d] hover:text-purple-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[#2e026d] hover:bg-gray-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Heroicon name: x */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
