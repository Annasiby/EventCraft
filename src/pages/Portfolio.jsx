import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Portfolio() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const categories = ['All', 'Wedding', 'Corporate', 'Birthday', 'Anniversary', 'Other'];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEvents(eventsData);
        setFilteredEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Fallback data if Firebase is not set up yet
        const fallbackEvents = [
          {
            id: 1,
            title: 'Romantic Garden Wedding',
            category: 'Wedding',
            description: 'An intimate wedding ceremony in a beautiful garden setting with 100 guests.',
            image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-06-15',
            guests: 100
          },
          {
            id: 2,
            title: 'Corporate Annual Gala',
            category: 'Corporate',
            description: 'A sophisticated corporate gala dinner for 200 executives and employees.',
            image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-05-20',
            guests: 200
          },
          {
            id: 3,
            title: 'Sweet 16 Birthday Bash',
            category: 'Birthday',
            description: 'A fun and vibrant Sweet 16 birthday party with themed decorations.',
            image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-04-10',
            guests: 50
          },
          {
            id: 4,
            title: 'Golden Anniversary Celebration',
            category: 'Anniversary',
            description: 'A golden wedding anniversary celebration for a lovely couple.',
            image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-03-22',
            guests: 75
          },
          {
            id: 5,
            title: 'Product Launch Event',
            category: 'Corporate',
            description: 'An exciting product launch event with interactive demonstrations.',
            image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-07-08',
            guests: 150
          },
          {
            id: 6,
            title: 'Beachside Wedding',
            category: 'Wedding',
            description: 'A stunning beachside wedding ceremony at sunset.',
            image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-08-12',
            guests: 80
          },
          {
            id: 7,
            title: 'Milestone Birthday Party',
            category: 'Birthday',
            description: 'A milestone 50th birthday party with elegant decorations.',
            image: 'https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-02-14',
            guests: 60
          },
          {
            id: 8,
            title: 'Tech Conference',
            category: 'Corporate',
            description: 'A three-day technology conference with multiple speakers.',
            image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
            date: '2024-09-05',
            guests: 300
          }
        ];
        setEvents(fallbackEvents);
        setFilteredEvents(fallbackEvents);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === filter));
    }
  }, [filter, events]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Event Portfolio
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Explore our collection of successful events and celebrations we've had the privilege to plan and execute.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No events found for the selected category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Guests: {event.guests}</span>
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{events.length}+</div>
              <div className="text-indigo-200">Events Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-indigo-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-indigo-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Your Own Memorable Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to start planning your perfect event.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            Start Planning
          </a>
        </div>
      </section>
    </div>
  );
}