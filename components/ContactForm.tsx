// 'use client';

// import { useState, FormEvent } from 'react';
// import MainButton from './MainButton';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message. We will get back to you soon!');
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };
  
//   return (
//     <div className="right-contact">
//       <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
//         <div className="input-control i-c-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input 
//             type="text" 
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required 
//             placeholder="YOUR NAME" 
//             className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
//           />
//           <input 
//             type="email" 
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required 
//             placeholder="YOUR EMAIL" 
//             className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
//           />
//         </div>
//         <div className="input-control">
//           <input 
//             type="text" 
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required 
//             placeholder="ENTER SUBJECT" 
//             className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
//           />
//         </div>
//         <div className="input-control">
//           <textarea 
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             cols={15} 
//             rows={8} 
//             placeholder="Message Here..." 
//             className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
//           ></textarea>
//         </div>
//         <div className="submit-btn mt-2">
//           <MainButton text="Send Message" icon="fas fa-paper-plane" />
//         </div>
//       </form>
//     </div>
//   );
// }

'use client';

import { useState, FormEvent } from 'react';
import MainButton from './MainButton';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      email: formData.email,
    };

    emailjs.send(
      'service_a2usnks',       // Service ID
      'template_69ycv0d',      // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '5gsTiHX1HsGmMOc3w'        // Public Key
    )
    
    .then(() => {
      alert('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('❌ Failed to send message. Please try again.');
    });
  };

  return (
    <div className="right-contact">
      <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
        <div className="input-control i-c-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            placeholder="YOUR NAME" 
            className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="YOUR EMAIL" 
            className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
          />
        </div>
        <div className="input-control">
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required 
            placeholder="ENTER SUBJECT" 
            className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
          />
        </div>
        <div className="input-control">
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols={15} 
            rows={8} 
            placeholder="Message Here..." 
            className="w-full p-4 rounded-lg bg-[color:var(--color-jacarta)]/20 border border-gray-700 focus:outline-none focus:border-[color:var(--color-scampi)]"
          ></textarea>
        </div>
        <div className="submit-btn mt-2">
          <MainButton text="Send Message" icon="fas fa-paper-plane" />
        </div>
      </form>
    </div>
  );
}
