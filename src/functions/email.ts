import { Resend } from "resend";

export const rememberAcount = async (email: string) => {
    const resend = new Resend(process.env.RESEND_API_KEY); 

    try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',       
      to: [email], 
      subject: 'Recuperación de cuenta',
            html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recuperación de cuenta</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0,0,0,0.1);
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .header h1 {
                    color: #2c3e50;
                    margin: 0;
                    font-size: 28px;
                }
                .content {
                    margin-bottom: 30px;
                }
                .content p {
                    font-size: 16px;
                    margin-bottom: 15px;
                }
                .btn {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 15px 30px;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    text-align: center;
                    margin: 20px 0;
                    transition: transform 0.2s;
                }
                .btn:hover {
                    transform: translateY(-2px);
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                    color: #666;
                    font-size: 14px;
                }
                .warning {
                    background-color: #fff3cd;
                    border: 1px solid #ffeaa7;
                    color: #856404;
                    padding: 15px;
                    border-radius: 5px;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🔐 Recuperación de Cuenta</h1>
                </div>
                
                <div class="content">
                    <p>¡Hola!</p>
                    <p>Hemos recibido una solicitud para recuperar tu cuenta en nuestro sistema de turnos.</p>
                    
                    <div class="warning">
                        <strong>⚠️ Importante:</strong> Si no fuiste tú quien solicitó esta recuperación, puedes ignorar este mensaje de forma segura.
                    </div>
                    
                    <p>Para continuar con la recuperación de tu cuenta, haz clic en el siguiente botón:</p>
                    
                    <div style="text-align: center;">
                        <a href="http://localhost:3000/reset-password" class="btn">🔑 Recuperar mi cuenta</a>
                    </div>
                    
                    <p><small>Este enlace expirará en 24 horas por seguridad.</small></p>
                </div>
                
                <div class="footer">
                    <p>Sistema de Turnos - Soporte Técnico</p>
                    <p>Este es un mensaje automático, por favor no respondas a este email.</p>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error enviando email:", error);
      return { success: false, error };
    }

    console.log("Email enviado con éxito:", data);
    return { success: true, data };

  } catch (err) {
    console.error("Error interno:", err);
    return { success: false, error: err };
  }
};