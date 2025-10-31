import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/app.png"
          alt="app"
          width={800}
          height={800}
          className="object-cover"
          data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0"
        />
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            Connecting our user with iOS & Android apps. Download from iTune &
            Play store
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects. We want to find solutions
            using our website & apps.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300"
            >
              <FaApple className="text-2xl mr-2 group-hover:text-white transition-all duration-300" />
              <div>
                <p className="text-xs group-hover:text-white transition-all duration-300">
                  Download on the
                </p>
                <p className="text-sm font-semibold group-hover:text-white transition-all duration-300">
                  App Store
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300"
            >
              <FaGooglePlay className="text-2xl mr-2 group-hover:text-white transition-all duration-300" />
              <div>
                <p className="text-xs group-hover:text-white transition-all duration-300">
                  Download on the
                </p>
                <p className="text-sm font-semibold group-hover:text-white transition-all duration-300">
                  Google Play
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
