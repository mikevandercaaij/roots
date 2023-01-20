const password = process.env.PASSWORD_MONGO_URL;

export const environment = {
  production: true,
  //online

  API_URL: `mongodb+srv://admin:${password}@cluster0.ygjk7ng.mongodb.net/?retryWrites=true&w=majority`,
  APPLICATION_URL: 'https://ih-roots.netlify.app',

  //mailing
  EMAIL_HOST: 'smtp.sendgrid.net',
  EMAIL_USERNAME: 'apikey',
  EMAIL_API_KEY:
    'insert_sendgrid_api_key',
  EMAIL_SENDINGEMAIL: 'roots.team.noreply@gmail.com',
};
