'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      name: name === 'firstName' ? value + ' ' + (prev.name.split(' ')[1] || '') : (prev.name.split(' ')[0] || '') + ' ' + value
    }))
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-dark mb-6">Send Us a Query</h2>
      <p className="text-gray-600 mb-6">Got a question or need a custom solution? Reach out – we're ready to assist.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Name *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              onChange={handleNameChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="First"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={handleNameChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Last"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+91 9411253874"
            required
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="web-design">Web Design</option>
            <option value="ecommerce">E-commerce Solutions</option>
            <option value="seo">SEO Services</option>
            <option value="maintenance">Website Maintenance</option>
            <option value="consulting">Consulting</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
            Message Name Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Comment or Message"
          ></textarea>
        </div>
        
        <button type="submit" className="w-full btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}