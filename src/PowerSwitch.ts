import { Gpio } from "onoff";
import BaseSwitch from "./BaseSwitch";

class PowerSwitch extends BaseSwitch {
  private pin: number;

  private btn: Gpio;

  constructor(pin: number) {
    super();
    this.pin = pin;
    this.btn = new Gpio(pin, "out", "none");
  }

  public async press(time: number) {
    this.click(true);
    await new Promise((resolve) =>
      setTimeout(() => {
        this.unpress();
        resolve(time);
      }, time)
    );
  }

  public unpress() {
    this.btn.writeSync(0); // i have no idea what im doing pls kill me
  }

  public click(keep = false) {
    this.btn.writeSync(1);
    if (!keep) this.unpress();
  }
}

export { PowerSwitch };
export default PowerSwitch;
