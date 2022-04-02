import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const baseTexturePath = "/assets/textures";

export const texturePaths = {
  colorMap: `${baseTexturePath}/8081_earthmap10k.jpg`,
  bumpMap: `${baseTexturePath}/8081_earthbump10k.jpg`,
  specularMap: `${baseTexturePath}/8081_earthspec10k.jpg`,
};

export function getTexture(imagePath) {
    const texture = useLoader(TextureLoader, imagePath);
    return texture;
  }