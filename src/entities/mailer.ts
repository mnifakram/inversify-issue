import "reflect-metadata";
import { injectable } from "inversify";
import { IMailer } from "../constants/interfaces";

@injectable
class Mailer implements IMailer {
    public send(): void {
      console.log(" mail should be send");
    }
}

export default Mailer;
