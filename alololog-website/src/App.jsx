import React from 'react';
import { CheckCircle, ShieldCheck, Truck, Zap, Bug, Sparkles, Building2, FileCheck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Janitorial & Cleaning Services',
    naics: 'Primary NAICS: 561720',
    description: 'Reliable commercial, federal, municipal, and facility cleaning services designed for offices, clinics, warehouses, and government buildings.',
    featured: true,
  },
  {
    icon: Bug,
    title: 'Pest Control Support',
    naics: 'NAICS: 561710',
    description: 'Coordinated exterminating and pest control support for facilities requiring routine maintenance, inspection, and responsive service coverage.',
  },
  {
    icon: Truck,
    title: 'Freight & Logistics',
    naics: 'NAICS: 484110 / 484230',
    description: 'Local and long-distance freight support, delivery coordination, and logistics services for public and private sector operations.',
  },
  {
    icon: Zap,
    title: 'Electrical Equipment & Supplies',
    naics: 'NAICS: 423610 / 335999',
    description: 'Sourcing and supply support for electrical apparatus, wiring supplies, components, and miscellaneous electrical equipment needs.',
  },
  {
  icon: ShieldCheck,
  title: 'PPE & Safety Supply Support',
  naics: 'Supply Capability',
  description: 'Sourcing and fulfillment support for personal protective equipment, safety supplies, gloves, masks, protective gear, and facility safety needs for government and commercial clients.',
},
];

const janitorialCapabilities = [
  'Daily, weekly, and scheduled facility cleaning',
  'Office, clinic, warehouse, and government building cleaning',
  'Restroom sanitation and supply restocking',
  'Floor care, sweeping, mopping, vacuuming, and trash removal',
  'Post-construction and move-in/move-out cleaning support',
  'Quality-control checks and responsive service coordination',
];

const differentiators = [
  'SDVOSB-focused contracting readiness',
  'Government and local contract pursuit strategy',
  'Multi-service operational support model',
  'Responsive owner-led communication',
  'Scalable subcontractor and partner network approach',
  'Professional documentation and proposal support readiness',
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <div>
            <p className="brand">Alolo Logistics LLC</p>
            <p className="domain">Alololog.com</p>
          </div>
          <nav className="navlinks">
            <a href="#services">Services</a>
            <a href="#janitorial">Janitorial</a>
            <a href="#contracting">Contracting</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">Request Capabilities</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">SDVOSB-ready government operations support company</div>
              <h1>Professional janitorial, logistics, and facility support for government and commercial clients.</h1>
              <p className="hero-text">
                Alolo Logistics LLC helps agencies, facilities, and private organizations keep operations clean, supplied, compliant, and moving. Our primary focus is dependable janitorial service, supported by logistics, pest control coordination, and supply capabilities.
              </p>
              <div className="button-row">
                <a className="btn btn-primary large" href="#contact">Discuss a Contract Opportunity <ArrowRight size={18} /></a>
                <a className="btn btn-secondary large" href="#services">View Core Services</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-title-row">
                <div className="icon-box"><ShieldCheck size={38} /></div>
                <div>
                  <h3>Contract-ready service focus</h3>
                  <p>Built for recurring facility needs</p>
                </div>
              </div>
              {[
                'Primary focus: Janitorial Services — NAICS 561720',
                'SDVOSB contracting advantage and partner-ready model',
                'Service coverage for federal, local, and commercial facilities',
                'Additional capabilities in logistics, pest control, and supply support',
              ].map((item) => (
                <div className="check-row" key={item}>
                  <CheckCircle size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <div className="section-heading">
            <p className="eyebrow">Core capabilities</p>
            <h2>One company. Multiple operational support paths.</h2>
            <p>Alolo Logistics is positioned to pursue government and commercial opportunities across cleaning, facilities support, logistics, pest control coordination, and equipment supply.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div className={`service-card ${service.featured ? 'featured' : ''}`} key={service.title}>
                  <div className="service-top">
                    <div className="icon-box"><Icon size={34} /></div>
                    {service.featured && <span className="primary-tag">Primary Focus</span>}
                  </div>
                  <h3>{service.title}</h3>
                  <p className="naics">{service.naics}</p>
                  <p>{service.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="janitorial" className="section dark-band">
          <div className="container split">
            <div>
              <p className="eyebrow">Janitorial services</p>
              <h2>Clean facilities are mission-critical.</h2>
              <p>
                Alolo Logistics places janitorial services at the center of its government contracting strategy. We support agencies, offices, clinics, warehouses, and commercial properties that require dependable cleaning, sanitation, and facility upkeep.
              </p>
              <a className="btn btn-primary large" href="#contact">Request a Cleaning Quote</a>
            </div>
            <div className="capability-grid">
              {janitorialCapabilities.map((item) => (
                <div className="capability" key={item}>
                  <CheckCircle size={24} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contracting" className="section container split">
          <div>
            <p className="eyebrow">Government contracting</p>
            <h2>Built to support public-sector operations.</h2>
            <p>
              Alolo Logistics LLC is developing a contract-ready operating model for federal, state, local, and subcontracting opportunities. Our approach is focused on responsiveness, clear documentation, scalable partners, and dependable service execution.
            </p>
            <div className="diff-grid">
              {differentiators.map((item) => (
                <div className="mini-card" key={item}>
                  <FileCheck size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="naics-card">
            <Building2 size={40} />
            <h3>NAICS Codes</h3>
            <p><strong>561720:</strong> Janitorial Services — Primary</p>
            <p><strong>561710:</strong> Exterminating and Pest Control Services</p>
            <p><strong>484110:</strong> General Freight Trucking, Local</p>
            <p><strong>484230:</strong> Specialized Freight Trucking, Long-Distance</p>
            <p><strong>423610:</strong> Electrical Apparatus and Equipment Merchant Wholesalers</p>
            <p><strong>335999:</strong> All Other Miscellaneous Electrical Equipment and Component Manufacturing</p>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div>
              <h2>Need a dependable SDVOSB-ready partner?</h2>
              <p>Contact Alolo Logistics LLC to discuss janitorial service opportunities, subcontracting partnerships, and government operations support.</p>
            </div>
            <a className="btn btn-dark large" href="#contact">Start the Conversation</a>
          </div>
        </section>

        <section id="contact" className="section container split">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s talk about the opportunity.</h2>
            <p>
              Share the scope, location, service schedule, contract type, and timeline. Alolo Logistics will review the opportunity and discuss the best path forward.
            </p>
            <div className="contact-list">
              <p><Mail size={20} /> info@alololog.com</p>
              <p><Mail size={20} /> bids@alololog.com</p>
              <p><Mail size={20} /> contracts@alololog.com</p>
              <p><Phone size={20} /> (817) 680-3339 </p>
              <p><MapPin size={20} /> Texas-based | Serving government and commercial clients</p>
            </div>
          </div>

          <form className="opportunity-card" action="https://formspree.io/f/xqejaygk" method="POST">
  <h3>Request a Quote</h3>

  <input name="name" placeholder="Your Name" required />
  <input name="company" placeholder="Company / Agency Name" />
  <input name="email" type="email" placeholder="Email Address" required />
  <input name="phone" placeholder="Phone Number" />

  <select name="service" required>
    <option value="">Select Service Needed</option>
    <option value="Janitorial Services">Janitorial Services</option>
    <option value="Pest Control Support">Pest Control Support</option>
    <option value="Freight / Logistics">Freight / Logistics</option>
    <option value="Electrical Supply Support">Electrical Supply Support</option>
    <option value="PPE / Safety Supplies">PPE / Safety Supplies</option>
    <option value="Government Contract / RFQ">Government Contract / RFQ</option>
  </select>

  <textarea name="message" placeholder="Describe the opportunity, location, deadline, or scope of work" required></textarea>

  <button className="btn btn-primary large" type="submit">
    Submit Quote Request
  </button>
</form>
        </section>
      </main>

      <footer>
        <p>© 2026 Alolo Logistics LLC. Government operations support, janitorial services, logistics, pest control coordination, and supply capabilities.</p>
      </footer>
    </div>
  );
}

export default App;
