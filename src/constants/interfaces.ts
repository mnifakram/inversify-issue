export interface IMailer {
  send(): void;
}

export interface INotifier {
    mailer: IMailer;
}