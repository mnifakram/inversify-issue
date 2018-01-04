import { Container } from "inversify";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import { IMailer } from "./constants/interfaces";
import Mailer from "./entities/mailer";

const container = new Container();

container.bind<IMailer>(SERVICE_IDENTIFIER.IMailer).to(Mailer);

export default container;
