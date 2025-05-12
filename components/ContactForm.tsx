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
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully!', { id: toastId });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again later.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
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
            className="w-full p-4 rounded-lg dark:bg-[color:var(--color-jacarta-d)]/20 light:bg-[color:var(--color-jacarta-l)]/20 dark:border-gray-700 light:border-gray-300 border focus:outline-none dark:focus:border-[color:var(--color-scampi-d)] light:focus:border-[color:var(--color-scampi-l)]"
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="YOUR EMAIL" 
            className="w-full p-4 rounded-lg dark:bg-[color:var(--color-jacarta-d)]/20 light:bg-[color:var(--color-jacarta-l)]/20 dark:border-gray-700 light:border-gray-300 border focus:outline-none dark:focus:border-[color:var(--color-scampi-d)] light:focus:border-[color:var(--color-scampi-l)]"
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
            className="w-full p-4 rounded-lg dark:bg-[color:var(--color-jacarta-d)]/20 light:bg-[color:var(--color-jacarta-l)]/20 dark:border-gray-700 light:border-gray-300 border focus:outline-none dark:focus:border-[color:var(--color-scampi-d)] light:focus:border-[color:var(--color-scampi-l)]"
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
            className="w-full p-4 rounded-lg dark:bg-[color:var(--color-jacarta-d)]/20 light:bg-[color:var(--color-jacarta-l)]/20 dark:border-gray-700 light:border-gray-300 border focus:outline-none dark:focus:border-[color:var(--color-scampi-d)] light:focus:border-[color:var(--color-scampi-l)]"
          ></textarea>
        </div>
        <div className="submit-btn mt-2">
          <MainButton 
            text={isSubmitting ? 'Sending...' : 'Send Message'} 
            icon={isSubmitting ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'} 
            type="submit" 
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
