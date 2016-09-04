"use strict"

class Block {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.build();
  }

  build() {
    const size = 64;
    const x = this.x * 64;
    const y = this.y * 64;
    const z = this.z * 64;

    const block = this.block = $(`<div class="block" />`)
      .css({
        transform: `
          translateX(${x}px)
          translateY(${y}px)
          translateZ(${z}px)
          scale(0.99)
        `
      });

    $(`<div class="x-axis" />`)
      .appendTo(block)
      .css({
        transform: `
          rotateX(90deg)
          rotateY(0deg)
          rotateZ(0deg)
        `
      });

    $(`<div class="y-axis" />`)
      .appendTo(block)
      .css({
        transform: `
          rotateX(0deg)
          rotateY(90deg)
          rotateZ(0deg)
        `
      });

    $(`<div class="z-axis" />`)
      .appendTo(block);

    this
      .createFace("top", 0, 0, size / 2, 0, 0, 0)
      .appendTo(block);

    this
      .createFace("side-1", 0, size / 2, 0, 270, 0, 0)
      .appendTo(block);

    this
      .createFace("side-2", size / 2, 0, 0, 0, 90, 0)
      .appendTo(block);

    this
      .createFace("side-3", 0, size / -2, 0, -270, 0, 0)
      .appendTo(block);

    this
      .createFace("side-4", size / -2, 0, 0, 0, -90, 0)
      .appendTo(block);

    this
      .createFace("bottom", 0, 0, size / -2, 0, 180, 0)
      .appendTo(block);
  }

  createFace(type, x, y, z, rx, ry, rz) {
    return $(`<div class="side side-${type}" />`)
      .css({
        transform: `
          translateX(${x}px)
          translateY(${y}px)
          translateZ(${z}px)
          rotateX(${rx}deg)
          rotateY(${ry}deg)
          rotateZ(${rz}deg)
        `,
        background: this.createTexture(type)
      })
      .data("block", this)
      .data("type", type);
  }

  createTexture(type) {
    return `rgba(100, 100, 255, 0.2)`;
  }
}
