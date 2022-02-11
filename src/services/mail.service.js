import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

class MailService {
    getInvoices() {
    return axios.get(API_URL + 'test/invoices');
    }

    sendMail(mail) {
    return axios
    .post(API_URL + 'mail/send', mail)
    .then(response => {
        return response.data;
      });
    }
}

export default new MailService();