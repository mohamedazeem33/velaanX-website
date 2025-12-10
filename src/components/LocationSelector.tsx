import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const AREAS = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Tirunelveli",
  "Erode",
  "Vellore",
];

const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("Select Location");

  // Load saved location
  useEffect(() => {
    const saved = localStorage.getItem("user-location");
    if (saved) setLocation(saved);
  }, []);

  const selectLocation = (loc: string) => {
    setLocation(loc);
    localStorage.setItem("user-location", loc);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
      >
        <MapPin className="w-4 h-4 text-secondary" />
        <span className="text-sm">{location}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border rounded-lg shadow-lg p-2 z-50">
          {AREAS.map((area) => (
            <button
              key={area}
              onClick={() => selectLocation(area)}
              className="w-full text-left px-3 py-2 rounded hover:bg-muted transition"
            >
              {area}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
