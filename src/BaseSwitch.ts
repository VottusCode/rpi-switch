class BaseSwitch {
  public click(keep = false) {
    throw new Error(
      `click(${keep}) function is not implemented by ${this.constructor.name}`
    );
  }

  public async press(time: number) {
    throw new Error(
      `press(${time}) function is not implemented by ${this.constructor.name}`
    );
  }

  public unpress() {
    throw new Error(
      `unpress() function is not implemented by ${this.constructor.name}`
    );
  }
}

export { BaseSwitch };
export default BaseSwitch;
