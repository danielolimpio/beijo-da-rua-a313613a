import { Link } from "react-router-dom";

// Import app logos
import tinderLogo from "@/assets/tinder-logo.jpeg";
import bumbleLogo from "@/assets/bumble-logo.webp";
import happnLogo from "@/assets/happn-logo.jpg";
import okCupidLogo from "@/assets/okcupid-logo.jpeg";
import badooLogo from "@/assets/badoo-logo.jpeg";
import hingeLogo from "@/assets/hinge-logo.jpeg";
import skoutLogo from "@/assets/skout-logo.png";
import pofLogo from "@/assets/pof-logo.jpeg";
import facebookDatingLogo from "@/assets/facebook-dating-logo.jpg";
import meetmeLogo from "@/assets/meetme-logo.jpeg";
import eharmonyLogo from "@/assets/eharmony-logo.jpeg";
import datingLogo from "@/assets/dating-logo.jpeg";
import ashleyMadisonLogo from "@/assets/ashley-madison-logo.jpeg";
import brazilCupidLogo from "@/assets/brazilcupid-logo.jpeg";
import innerCircleLogo from "@/assets/inner-circle-logo.jpeg";

const apps = [
  { name: "Tinder", logo: tinderLogo, slug: "tinder" },
  { name: "Bumble", logo: bumbleLogo, slug: "bumble" },
  { name: "Happn", logo: happnLogo, slug: "happn" },
  { name: "Badoo", logo: badooLogo, slug: "badoo" },
  { name: "OkCupid", logo: okCupidLogo, slug: "okcupid" },
  { name: "Hinge", logo: hingeLogo, slug: "hinge" },
  { name: "POF", logo: pofLogo, slug: "pof" },
  { name: "Facebook Dating", logo: facebookDatingLogo, slug: "facebook-dating" },
  { name: "MeetMe", logo: meetmeLogo, slug: "meetme" },
  { name: "eharmony", logo: eharmonyLogo, slug: "eharmony" },
  { name: "Dating.com", logo: datingLogo, slug: "dating" },
  { name: "Ashley Madison", logo: ashleyMadisonLogo, slug: "ashley-madison" },
  { name: "BrazilCupid", logo: brazilCupidLogo, slug: "brazilcupid" },
  { name: "Inner Circle", logo: innerCircleLogo, slug: "inner-circle" },
  { name: "Skout", logo: skoutLogo, slug: "skout" },
];

const DatingAppsShowcase = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Apps de Namoro Avaliados
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Análises completas dos principais aplicativos de relacionamento do Brasil
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 gap-4 sm:gap-6">
          {apps.map((app) => (
            <Link
              key={app.slug}
              to={`/apps/${app.slug}/`}
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl overflow-hidden shadow-custom-sm group-hover:shadow-custom-lg transition-all duration-300 group-hover:scale-105">
                <img
                  src={app.logo}
                  alt={`Logo ${app.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground text-center line-clamp-1 group-hover:text-primary transition-colors">
                {app.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            to="/apps-de-namoro/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium hover:shadow-custom-primary transition-all duration-300"
          >
            Ver todos os apps
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DatingAppsShowcase;
