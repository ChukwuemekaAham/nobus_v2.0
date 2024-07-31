import { PlayIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div
      className="flex bg-hero overflow-hidden h-screen"
      style={{
        backgroundImage: "url('/ellipse.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectPosition: "left",
      }}
    ></div>
  );
}

export default Banner;
