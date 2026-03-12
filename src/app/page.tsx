"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Wrench, History, CheckCircle, Zap, Gauge, Circle, Loader, Droplet, Cpu, Calendar, Users, ThumbsUp, Clock, Star, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="One Stop Autos"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Professional Auto Service"
          bottomRightText="info@onestopauutos.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Expert Auto Care at One Stop Autos"
          description="Your trusted partner for comprehensive automotive maintenance, repairs, and diagnostics. With over 15 years of industry expertise, we deliver premium service you can rely on."
          tag="Professional Service"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11835.jpg", imageAlt: "Expert mechanic performing engine maintenance" },
            { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-arrangement-with-tools_23-2148932612.jpg", imageAlt: "Professional engine diagnostic service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11837.jpg", imageAlt: "Transmission system maintenance" },
            { imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11835.jpg", imageAlt: "Quality automotive repair work" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/mechanic-explaining-quotation-customer_1170-1554.jpg", imageAlt: "Precision brake system inspection" },
            { imageSrc: "http://img.b2bpic.net/free-photo/mechanic-fixing-car-brake_1170-1663.jpg", imageAlt: "Professional brake service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/young-mechanic-work-clothes-yellow-hardhat-using-wrench-changing-car-wheel-outdoor_574295-2003.jpg", imageAlt: "Tire alignment and maintenance" },
            { imageSrc: "http://img.b2bpic.net/free-photo/mechanic-explaining-quotation-customer_1170-1554.jpg", imageAlt: "Vehicle diagnostic service" }
          ]}
          carouselPosition="right"
          buttons={[
            { text: "Book Service", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          tagIcon={History}
          tagAnimation="slide-up"
          title="Trusted Auto Experts Since 2009"
          description="Founded on principles of integrity and excellence"
          subdescription="One Stop Autos - Your Complete Automotive Solution"
          icon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/exhausted-vehicle-mechanic-falling-asleep-his-workshop_342744-1346.jpg"
          imageAlt="One Stop Autos professional service facility"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBorderGlow
          title="Comprehensive Auto Services"
          description="From routine maintenance to complex repairs, we handle every aspect of vehicle care with precision and expertise."
          tag="Our Services"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          features={[
            { icon: Zap, title: "Engine Service", description: "Oil changes, timing belts, engine diagnostics, and complete engine overhauls with OEM-quality parts." },
            { icon: Gauge, title: "Transmission Repair", description: "Automatic and manual transmission service, fluid flushes, and major rebuild capabilities." },
            { icon: Circle, title: "Brake Service", description: "Brake pad replacement, rotor resurfacing, system diagnostics, and ABS servicing." },
            { icon: Loader, title: "Tire & Wheel", description: "Tire replacement, alignment, balancing, and suspension system maintenance." },
            { icon: Droplet, title: "Fluid Services", description: "Oil changes, coolant flushes, transmission fluid, brake fluid, and power steering service." },
            { icon: Cpu, title: "Diagnostics", description: "Computer diagnostics, electrical system troubleshooting, and check engine light analysis." }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View Full Menu", href: "contact" }]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Why Choose One Stop Autos"
          description="Proven track record of reliability and customer satisfaction."
          tag="Our Track Record"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "15", title: "Years", description: "Of trusted automotive service and expertise", icon: Calendar },
            { id: "2", value: "5000", title: "Plus", description: "Satisfied customers served annually", icon: Users },
            { id: "3", value: "99", title: "Percent", description: "Customer satisfaction rating", icon: ThumbsUp },
            { id: "4", value: "24", title: "Hours", description: "Emergency roadside assistance available", icon: Clock }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Real feedback from drivers who trust us with their vehicles."
          tag="Customer Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            { id: "1", name: "Michael Johnson", handle: "Regular Customer", testimonial: "One Stop Autos fixed my transmission issue in one day. Professional service and honest pricing. Highly recommended!", imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-taking-selfie-photo-winking_1262-18343.jpg", imageAlt: "Michael Johnson" },
            { id: "2", name: "Sarah Martinez", handle: "Fleet Manager", testimonial: "We take all our company vehicles here. Reliable, fast, and the team knows what they're doing. Five stars!", imageSrc: "http://img.b2bpic.net/free-photo/man-mechanic-woman-customer-discussing-repairs-done-her-vehicle_146671-14209.jpg", imageAlt: "Sarah Martinez" },
            { id: "3", name: "David Chen", handle: "Business Owner", testimonial: "Best mechanic shop in town. They saved me thousands by diagnosing the real problem instead of guessing.", imageSrc: "http://img.b2bpic.net/free-photo/young-worried-businessman-talking-with-african-american-auto-mechanic-about-costs-car-reparation-auto-repair-shop_637285-4251.jpg", imageAlt: "David Chen" },
            { id: "4", name: "Jennifer Lopez", handle: "Returning Customer", testimonial: "Been going to One Stop for 5 years. Never disappointed. Great customer service and quality work every time.", imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-car-showroom-dealership_23-2149117172.jpg", imageAlt: "Jennifer Lopez" },
            { id: "5", name: "Robert Taylor", handle: "Fleet Operator", testimonial: "Fast turnaround, competitive pricing, and they stand behind their work. Exactly what a business needs.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-taking-selfie-photo-winking_1262-18343.jpg", imageAlt: "Robert Taylor" },
            { id: "6", name: "Amanda White", handle: "Loyal Customer", testimonial: "The team took time to explain what was wrong and what needed to be done. Transparency and professionalism.", imageSrc: "http://img.b2bpic.net/free-photo/man-mechanic-woman-customer-discussing-repairs-done-her-vehicle_146671-14209.jpg", imageAlt: "Amanda White" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our services and policies."
          textPosition="left"
          useInvertedBackground={true}
          faqs={[
            { id: "1", title: "How long does a typical oil change take?", content: "A standard oil change typically takes 30-45 minutes depending on your vehicle type. We'll have you on your way quickly!" },
            { id: "2", title: "Do you offer warranties on repairs?", content: "Yes! All our repairs come with a 12-month/12,000-mile warranty. We stand behind our work completely." },
            { id: "3", title: "What payment methods do you accept?", content: "We accept cash, all major credit cards, debit cards, and financing options for larger repair jobs." },
            { id: "4", title: "Can you service imported vehicles?", content: "Absolutely! Our certified technicians have expertise with European, Japanese, and Korean vehicles." },
            { id: "5", title: "Do you offer free diagnostics?", content: "Yes, we provide free diagnostic testing for most issues. Our computer scanner identifies problems quickly and accurately." },
            { id: "6", title: "What are your hours of operation?", content: "We're open Monday-Friday 8am-6pm and Saturday 9am-3pm. We offer emergency roadside assistance 24/7." }
          ]}
          animationType="smooth"
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Get Your Vehicle Serviced?"
          description="Contact us today to schedule your appointment or get a free quote on any automotive service."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "vehicle", type: "text", placeholder: "Vehicle Make & Model", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Describe your service needs or ask a question...", rows: 5, required: true }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/young-attractive-black-businessman-buys-new-car-he-signs-contract-takes-keys-manager_146671-18402.jpg"
          imageAlt="One Stop Autos professional service team"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Schedule Service"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="One Stop Autos"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}