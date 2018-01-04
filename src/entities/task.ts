import container from "../container";
import getDecorators from "inversify-inject-decorators";

import { IMailer, INotifier } from "../constants/interfaces";
import SERVICE_IDENTIFIER from "../constants/identifiers";

let { lazyInject } = getDecorators(container);

export default class Task implements INotifier {
    @lazyInject(SERVICE_IDENTIFIER.IMailer)
    public mailer: IMailer;
}