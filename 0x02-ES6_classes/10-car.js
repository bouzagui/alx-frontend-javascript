#!/usr/bin/node
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  set color(newColor) {
    this._color = newColor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
