import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    { value: '', label: 'Select a license type' },
    { value: 'microsoft', label: 'Microsoft (Office, Windows, Server)' },
    { value: 'adobe', label: 'Adobe (Creative Cloud, Acrobat)' },
    { value: 'autodesk', label: 'Autodesk (AutoCAD, Revit)' },
    { value: 'oracle', label: 'Oracle (Database, Cloud)' },
    { value: 'aws', label: 'AWS Credits or Reserved Instances' },
    { value: 'vmware', label: 'VMware (vSphere, Fusion)' },
    { value: 'other', label: 'Other Enterprise Software' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
      isValid = false;
    }

    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Get a Free License Valuation</h2>
            <p className="section-subheading">
              Fill out the form below with details about your software licenses and our team will provide a no-obligation quote within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center animate-fade-in">
              <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your request has been submitted successfully. Our team will contact you within 24 hours with a valuation for your software licenses.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500 dark:border-red-400' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="form-error flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <div className="form-error flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`form-input ${errors.company ? 'border-red-500 dark:border-red-400' : ''}`}
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <div className="form-error flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.company}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="licenseType" className="form-label">License Type</label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`form-input ${errors.licenseType ? 'border-red-500 dark:border-red-400' : ''}`}
                  >
                    {licenseTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.licenseType && (
                    <div className="form-error flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.licenseType}</span>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`form-input ${errors.message ? 'border-red-500 dark:border-red-400' : ''}`}
                    placeholder="Please provide details about your software licenses (quantity, purchase date, etc.)"
                  ></textarea>
                  {errors.message && (
                    <div className="form-error flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary text-base px-8 py-3 rounded-lg flex items-center gap-2 min-w-[200px] justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Get My Quote</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;