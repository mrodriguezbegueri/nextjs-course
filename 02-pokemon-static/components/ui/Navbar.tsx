import colors from "tailwindcss/colors";
import { SpacerComp } from ".";
import Image from "next/image";
import { NextLinkPage } from "./NextLink";

export const Navbar = () => {
  return (
    <div
      className="gray900"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: colors.gray[900],
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />

      <NextLinkPage href="/" title="Pókemon"></NextLinkPage>
          
      <SpacerComp></SpacerComp>

      <NextLinkPage href="/favorites" title="Favorites"></NextLinkPage>
    </div>
  );
};
