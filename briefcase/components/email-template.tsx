import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phone,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h1>¡Mensaje de, {firstName}!</h1>
    <p>Nos gustaria contactar contigo.</p>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Nombre:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{firstName}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Correo Electrónico:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{email}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Teléfono:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{phone}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Mensaje:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{message}</td>
        </tr>
      </tbody>
    </table>
    <p>Nos gustaria contactar contigo lo antes posible.</p>
    <p>Saludos</p>
  </div>
);
