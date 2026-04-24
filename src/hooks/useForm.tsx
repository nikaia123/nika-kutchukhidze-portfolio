import { useState } from 'react';

export const useForm = <T extends Record<string, unknown>>(initialValues: T) => {
  const [form, setForm] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return { form, setForm, handleChange };
};
