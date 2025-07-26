import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Events Planned', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '100%', label: 'Client Satisfaction', icon: Heart }
  ];

  const team = [
    {
      name: 'Anna Siby',
      role: 'Founder & Lead Planner',
      image: '',
      bio: 'With over 10 years of experience in event planning, Sarah brings creativity and precision to every celebration.'
    },
    {
      name: 'Elsa Siby',
      role: 'Corporate Events Specialist',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fauthor-cute-worker-work-job-profession-professional-occupation-cartoon-character_372381732.htm&psig=AOvVaw28vo--PZxHVjB3YcvjgxDA&ust=1753608102217000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDtw7eZ2o4DFQAAAAAdAAAAABAK',
      bio: 'Michael specializes in corporate events and conferences, ensuring professional and memorable business gatherings.'
    },
    {
      name: 'Emily ',
      role: 'Wedding Coordinator',
      image: '',
      bio: 'Emily has a passion for creating magical wedding experiences, handling every detail with care and attention.'
    },
    {
      name: 'David ',
      role: 'Logistics Manager',
      image: '',
     // image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'David ensures smooth operations and flawless execution, managing all logistical aspects of our events.'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring your event exceeds expectations.',
      icon: Award
    },
    {
      title: 'Creativity',
      description: 'We bring innovative ideas and unique concepts to make your event truly memorable.',
      icon: Heart
    },
    {
      title: 'Reliability',
      description: 'You can count on us to deliver on our promises and handle every aspect professionally.',
      icon: Clock
    },
    {
      title: 'Personal Touch',
      description: 'We understand that every event is personal, and we tailor our services to your vision.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About EventCraft
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            We are passionate event planners dedicated to creating extraordinary experiences 
            that bring people together and create lasting memories.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, EventCraft began with a simple mission: to create unforgettable 
                  experiences that bring people together. What started as a small team of passionate 
                  event enthusiasts has grown into a full-service event planning company.
                </p>
                <p>
                  We believe that every event, whether it's an intimate gathering or a grand celebration, 
                  deserves meticulous attention to detail and creative flair. Our team combines years 
                  of experience with fresh perspectives to deliver events that exceed expectations.
                </p>
                <p>
                  From weddings and corporate events to birthday parties and milestone celebrations, 
                  we've had the privilege of being part of countless special moments. Each event 
                  teaches us something new and fuels our passion for what we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                alt="Event planning"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we approach each event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented professionals behind every successful event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your event vision and create something extraordinary together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}