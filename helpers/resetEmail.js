const { BASE_URL } = process.env;

const resetEmail = (email, resetToken) =>{
   const mail ={
    to: email,
    subject: 'Reset password',
    html: `<div style="font-style: medium; line-height: 1; letter-spacing: 0.04em; text-align: center; background-color: rgb(253, 247, 242); padding: 20px;">
    <p style=" font-size: 48px; color: black; margin-bottom: 20px;">Hi! If you forget your password, you can reset it for <span style="line-height: 48px; font-weight: 700; ont-size: 50px;">pe<span style="color: orange">t</span>ly</span>.</p>
    <p style=" font-size: 36px; color:orange; margin-bottom: 20px;">Follow the link for reset password</p>
    <button style="cursor: pointer; text-align: center; vertical-align: middle;line-height: 1.37;border-radius: 40px; margin-bottom: 20px; min-width: 64px; 
    padding: 5px 15px; border: 2px solid rgb(245, 146, 86);background-color: white;"><a style="text-decoration: none; font-size:36px; color:orange; line-height: 1.37;" target="_blank" href="https://reg-pet-support.netlify.app/resetpassword/${resetToken}">reset password</a></button>
    <p style="font-size: 36px; color: black;">If you don't want to reset your password and you received the email by mistake, ignore it.</p></div>`,
   };
   return mail;
  };

  module.exports = resetEmail;