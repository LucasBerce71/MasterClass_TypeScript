interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: Array<string>;
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) { //DTO -> Data Transfer Object (DDD)
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;