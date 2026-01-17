import { useState, useEffect } from "react";
import { UserPlus } from "lucide-react";
import { FEATURE_FLAGS } from "@/config/featureFlags";
import profile1 from "@/assets/popup-profile1.jpeg";
import profile2 from "@/assets/popup-profile2.jpeg";
import profile3 from "@/assets/popup-profile3.jpeg";
import profile4 from "@/assets/popup-profile4.jpeg";
import profile5 from "@/assets/popup-profile5.jpeg";
import profile6 from "@/assets/popup-profile6.jpeg";
import profile7 from "@/assets/popup-profile7.jpeg";
import profile8 from "@/assets/popup-profile8.jpeg";
import profile9 from "@/assets/popup-profile9.jpeg";
import profile10 from "@/assets/popup-profile10.jpeg";

interface Profile {
  name: string;
  city: string;
  image: string;
}

const profiles: Profile[] = [
  { name: "Maria S.", city: "São Paulo, SP", image: profile1 },
  { name: "Ana C.", city: "Rio de Janeiro, RJ", image: profile2 },
  { name: "Juliana M.", city: "Belo Horizonte, MG", image: profile3 },
  { name: "Beatriz L.", city: "Brasília, DF", image: profile4 },
  { name: "Gabriela R.", city: "Curitiba, PR", image: profile5 },
  { name: "Camila T.", city: "Salvador, BA", image: profile6 },
  { name: "Larissa F.", city: "Fortaleza, CE", image: profile7 },
  { name: "Fernanda P.", city: "Recife, PE", image: profile8 },
  { name: "Amanda D.", city: "Porto Alegre, RS", image: profile9 },
  { name: "Isabella N.", city: "Manaus, AM", image: profile10 },
];

const NewRegistrationPopup = () => {
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomProfile = () => {
      const randomIndex = Math.floor(Math.random() * profiles.length);
      const profile = profiles[randomIndex];
      
      setCurrentProfile(profile);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first profile after 3 seconds
    const initialTimeout = setTimeout(showRandomProfile, 3000);

    // Then show profiles at random intervals between 8-15 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000; // 8-15 seconds
      setTimeout(showRandomProfile, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Return null if feature is disabled or no profile
  if (!FEATURE_FLAGS.SHOW_REGISTRATION_POPUP || !currentProfile) return null;

  return (
    <div
      className={`fixed bottom-8 left-8 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[300px]">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
          <UserPlus className="w-6 h-6 text-success" />
        </div>
        <div className="flex items-center gap-3 flex-1">
          <img
            src={currentProfile.image}
            alt={currentProfile.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              {currentProfile.name}
            </p>
            <p className="text-xs text-muted-foreground">{currentProfile.city}</p>
            <p className="text-xs text-success font-medium">Acabou de se cadastrar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRegistrationPopup;
