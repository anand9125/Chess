import { useState } from 'react';
import { ChevronRight, CheckCircle, Award, Users, Book, Clock, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate= useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb23jnvQV4WihJRvY5tXZGOVOHc36s8_kY4g&s`} alt="Chess Logo" className="h-12 w-12" />
                <span className="ml-2 text-xl font-bold text-slate-800">ChessMaster</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-800">Features</a>
                <a href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-800">Pricing</a>
                <a href="#learn" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-800">Learn</a>
                <a href="#community" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-800">Community</a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="px-4 py-2 mx-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign Up Free</button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#features" className="block pl-3 pr-4 py-2 text-base font-medium text-slate-800 border-l-4 border-blue-500">Features</a>
              <a href="#pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-slate-600 border-l-4 border-transparent hover:bg-slate-50 hover:text-slate-800">Pricing</a>
              <a href="#learn" className="block pl-3 pr-4 py-2 text-base font-medium text-slate-600 border-l-4 border-transparent hover:bg-slate-50 hover:text-slate-800">Learn</a>
              <a href="#community" className="block pl-3 pr-4 py-2 text-base font-medium text-slate-600 border-l-4 border-transparent hover:bg-slate-50 hover:text-slate-800">Community</a>
            </div>
            <div className="pt-4 pb-3 border-t border-slate-200">
              <div className="flex items-center px-4">
                <button className="block w-full px-4 py-2 text-center text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
              </div>
              <div className="mt-3 px-4">
                <button className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign Up Free</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Master Chess With Advanced Training & Play</h1>
              <p className="text-lg text-slate-600 mb-8">Improve your skills, play with others, and climb the ranks with our powerful chess platform designed for players of all levels.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center" onClick={()=>navigate("/game")}>
                  Start Playing Free
                  <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="px-6 py-3 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 font-medium flex items-center justify-center">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUKJVOqPu8Hh0paw_4X3AuHBclrUyAsYH3b1HxHYwk762btw_2U3n7VieTpMMnxSdpcI&usqp=CAU`} alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
                  <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUKJVOqPu8Hh0paw_4X3AuHBclrUyAsYH3b1HxHYwk762btw_2U3n7VieTpMMnxSdpcI&usqp=CAU`} alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
                  <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WywLwfJktH6g6_7Mqukq9GnZr02IKYOsL35x7XFLoLf5pSgjtYBEw_Cr2Af7ktzIEDo&usqp=CAU`} alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
                </div>
                <span className="ml-2 text-sm text-slate-600">Join over 500,000 chess players worldwide</span>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <img src="/chess.png" alt="Chess Game" className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose ChessMaster?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Our platform combines advanced AI, personalized training, and a vibrant community to help you excel at chess.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Advanced AI Opponents</h3>
              <p className="text-slate-600">Play against our adjustable AI that adapts to your skill level and helps you improve with every game.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mb-4">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Personalized Learning</h3>
              <p className="text-slate-600">Get customized puzzles, lessons, and analysis based on your playing style and skill gaps.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Community</h3>
              <p className="text-slate-600">Connect with players from around the world, join tournaments, and participate in our active forums.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-time Analysis</h3>
              <p className="text-slate-600">Review your games with powerful analysis tools that highlight mistakes and suggest better moves.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Progress Tracking</h3>
              <p className="text-slate-600">Track your improvement with detailed statistics, rating history, and performance insights.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Tournaments & Prizes</h3>
              <p className="text-slate-600">Participate in daily and weekly tournaments with ratings and prizes for winners.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Our Players Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/48/48" alt="User" className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">Alex Johnson</h4>
                  <p className="text-sm text-slate-600">Rating: 1820</p>
                </div>
              </div>
              <p className="text-slate-600">"The personalized training has helped me improve my middlegame significantly. I've gained over 200 rating points in just 3 months!"</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/48/48" alt="User" className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">Maria Chen</h4>
                  <p className="text-sm text-slate-600">Rating: 2150</p>
                </div>
              </div>
              <p className="text-slate-600">"The analysis tools are incredible. Being able to instantly see where I went wrong has transformed my understanding of positional play."</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/48/48" alt="User" className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">David Kowalski</h4>
                  <p className="text-sm text-slate-600">Rating: 1540</p>
                </div>
              </div>
              <p className="text-slate-600">"As a beginner, I was intimidated by chess apps, but the friendly community and progressive learning path have made it fun to improve."</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="pricing" className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Improve Your Chess Game?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of players who are mastering chess with our powerful platform. Get started for free today.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Free</h3>
                <p className="text-4xl font-bold text-slate-900 mb-6">$0<span className="text-lg text-slate-500 font-normal">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>5 games per day</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Basic game analysis</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Community forums</span>
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200 font-medium">Get Started</button>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 transform scale-105">
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Premium</h3>
                <p className="text-4xl font-bold text-slate-900 mb-6">$9.99<span className="text-lg text-slate-500 font-normal">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Unlimited games</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Advanced game analysis</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Personalized training</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Tournament access</span>
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">Start 7-Day Free Trial</button>
              </div>
            </div>
            
            {/* Master Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Master</h3>
                <p className="text-4xl font-bold text-slate-900 mb-6">$19.99<span className="text-lg text-slate-500 font-normal">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>1-on-1 coaching sessions</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Master-level AI opponents</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Premium study materials</span>
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200 font-medium">Get Master Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/40/40" alt="Chess Logo" className="h-10 w-10" />
                <span className="ml-2 text-xl font-bold text-white">ChessMaster</span>
              </div>
              <p className="text-sm text-slate-400">Elevate your chess game with advanced training, global competition, and powerful analysis tools.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">AI Opponents</a></li>
                <li><a href="#" className="hover:text-white">Game Analysis</a></li>
                <li><a href="#" className="hover:text-white">Training</a></li>
                <li><a href="#" className="hover:text-white">Tournaments</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Learning Center</a></li>
                <li><a href="#" className="hover:text-white">Chess Theory</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-sm text-slate-400">&copy; 2025 ChessMaster. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;