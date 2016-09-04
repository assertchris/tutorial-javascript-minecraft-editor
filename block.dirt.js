"use strict"

const DIRT_TEXTURES = {
  "top": [
    "textures/dirt-top-1.png",
    "textures/dirt-top-2.png",
    "textures/dirt-top-3.png"
  ],
  "side": [
    "textures/dirt-side-1.png",
    "textures/dirt-side-2.png",
    "textures/dirt-side-3.png",
    "textures/dirt-side-4.png",
    "textures/dirt-side-5.png"
  ]
};

class Dirt extends Block {
  createTexture(type) {
    if (type === "top" || type === "bottom") {
      const texture = DIRT_TEXTURES.top.random();

      return `url(${texture})`;
    }

    const texture = DIRT_TEXTURES.side.random();

    return `url(${texture})`;
  }
}

Block.Dirt = Dirt;
