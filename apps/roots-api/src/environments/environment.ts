export const environment = {
  production: false,
  //local

  API_URL: 'mongodb://127.0.0.1:27017/roots',
  APPLICATION_URL: 'http://localhost:4200',

  //mailing
  EMAIL_HOST: 'smtp.sendgrid.net',
  EMAIL_USERNAME: 'apikey',
  EMAIL_API_KEY:
    'insert_sendgrid_api_key',
  EMAIL_SENDINGEMAIL: 'roots.team.noreply@gmail.com',
};
