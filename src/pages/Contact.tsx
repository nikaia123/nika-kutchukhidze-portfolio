import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const Contact: React.FC = () => {
  usePageTitle('Contact');

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required("სახელი სავალდებულოა"),
      email: Yup.string().email("არასწორი ელ. ფოსტა (მაგ. example@gmail.com)").required("ელ. ფოსტა სავალდებულოა"),
      message: Yup.string().min(10, 'მინ. 10 სიმბოლო').required("შეტყობინება სავალდებულოა")
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSuccessMessage("თქვენი შეტყობინება წარმატებით გაიგზავნა!!");
      resetForm();
      setTimeout(() => setSuccessMessage(null), 5000);
    }
  });

  return (
    <div className="min-h-screen bg-primary text-text-main py-20">
      <Section title="დამიკავშირდით">
        <div className="max-w-[640px] mx-auto bg-secondary border border-white/5 p-14 relative group">
          <div className="absolute top-[-1px] left-[-1px] w-[20px] h-[20px] border-t border-l border-accent/40" />
          <div className="absolute top-[-1px] right-[-1px] w-[20px] h-[20px] border-t border-r border-accent/40" />
          <div className="absolute bottom-[-1px] left-[-1px] w-[20px] h-[20px] border-b border-l border-accent/40" />
          <div className="absolute bottom-[-1px] right-[-1px] w-[20px] h-[20px] border-b border-r border-accent/40" />

          <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
            {successMessage && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded text-center font-sans font-light text-[0.9rem] animate-fade-up">
                {successMessage}
              </div>
            )}

            <div className="flex flex-col gap-2.5">
              <label htmlFor="name" className="font-sans font-light text-[0.65rem] tracking-[0.25em] uppercase text-[#444]">
                სახელი
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="თქვენი სახელი"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-primary border rounded-[2px] py-3.5 px-5 text-text-main font-sans font-light text-[0.9rem] outline-none transition-colors duration-300 w-full ${
                  formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-white/5 focus:border-accent/30'
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs font-sans mt-1">{formik.errors.name}</div>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className="font-sans font-light text-[0.65rem] tracking-[0.25em] uppercase text-[#444]">
                ელ. ფოსტა
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-primary border rounded-[2px] py-3.5 px-5 text-text-main font-sans font-light text-[0.9rem] outline-none transition-colors duration-300 w-full ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-white/5 focus:border-accent/30'
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs font-sans mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="message" className="font-sans font-light text-[0.65rem] tracking-[0.25em] uppercase text-[#444]">
                შეტყობინება
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="მოკლედ აღწერეთ თქვენი იდეა..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-primary border rounded-[2px] py-3.5 px-5 text-text-main font-sans font-light text-[0.9rem] outline-none resize-none transition-colors duration-300 w-full ${
                  formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-white/5 focus:border-accent/30'
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-xs font-sans mt-1">{formik.errors.message}</div>
              )}
            </div>

            <div className="pt-2">
              <Button variant="primary" type="submit" className="w-full py-4">
                გაგზავნა
              </Button>
            </div>

          </form>
        </div>
      </Section>
    </div>
  );
};