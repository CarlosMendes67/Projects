      
      
      /* ENVIO DE EMAILS*/

      const express = require('express');
      const bodyParser = require('body-parser');
      const nodemailer = require('nodemailer');
      
      const app = express();
      
      app.use(bodyParser.urlencoded({ extended: true }));
      
      app.post('/enviar-email', (req, res) => {
          const { nome, email, mensagem } = req.body;
          
          const transporter = nodemailer.createTransport({
              service: 'outlook',  // Por exemplo, 'gmail'
              auth: {
                  user: '#', // Endereço de e-mail da empresa
                  pass: '#' //  PASSE Endereço de e-mail da empresa
              }
          });
      
          const mailOptions = {
              from: '#',    // Endereço de e-mail da empresa
              to: '#',  // Endereço de e-mail da empresa
              subject: 'Nova mensagem do formulário de contato',
              text: 'Nome:' + nome + '\nEmail:' + email + ' \nMensagem:' + mensagem
          };
      
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  console.log(error)
                  return res.status(500).send(error.toString());
              }
              res.send('Mensagem enviada com sucesso!');
          });
      });
      
      app.listen(3000, () => {
          console.log('Servidor iniciado na porta 3000');
      });
      