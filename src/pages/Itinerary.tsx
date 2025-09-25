import { useState, useEffect } from 'react';
import { Calendar, DollarSign, Heart, MapPin, Clock, Users, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Itinerary = () => {
  const [formData, setFormData] = useState({
    days: '',
    budget: '',
    interests: [] as string[],
    travelers: '2'
  });
  
  const [generatedItinerary, setGeneratedItinerary] = useState<any[]>([]);
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);
  const [showItinerary, setShowItinerary] = useState(false);

  const interestOptions = [
    { id: 'nature', label: 'Nature & Wildlife', icon: '🌲' },
    { id: 'adventure', label: 'Adventure Sports', icon: '🏔️' },
    { id: 'culture', label: 'Cultural Heritage', icon: '🏛️' },
    { id: 'spiritual', label: 'Spiritual Sites', icon: '🙏' },
    { id: 'photography', label: 'Photography', icon: '📸' },
    { id: 'trekking', label: 'Trekking & Hiking', icon: '🥾' }
  ];

  useEffect(() => {
    // Load saved destinations from localStorage
    const saved = JSON.parse(localStorage.getItem('itinerary') || '[]');
    setSavedDestinations(saved);
  }, []);

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }));
  };

  const generateItinerary = () => {
    const days = parseInt(formData.days);
    if (!days || days < 1) return;

    // Sample itinerary generation based on form data
    const sampleItinerary = [
      {
        day: 1,
        title: "Arrival & Ranchi Exploration",
        activities: [
          { time: "09:00", activity: "Arrive in Ranchi", location: "Birsa Munda Airport" },
          { time: "11:00", activity: "Visit Rock Garden", location: "Ranchi" },
          { time: "14:00", activity: "Lunch at local restaurant", location: "Main Road" },
          { time: "16:00", activity: "Hundru Falls excursion", location: "30km from Ranchi" },
          { time: "19:00", activity: "Check-in to homestay", location: "Ranchi" }
        ]
      },
      {
        day: 2,
        title: "Netarhat Hill Station",
        activities: [
          { time: "06:00", activity: "Early morning departure", location: "Ranchi" },
          { time: "09:00", activity: "Arrive at Netarhat", location: "Latehar District" },
          { time: "10:00", activity: "Sunrise Point visit", location: "Netarhat" },
          { time: "12:00", activity: "Pine forest walk", location: "Netarhat" },
          { time: "14:00", activity: "Local tribal lunch", location: "Village Restaurant" },
          { time: "17:00", activity: "Sunset viewing", location: "Sunset Point" },
          { time: "19:00", activity: "Overnight stay", location: "Netarhat Resort" }
        ]
      },
      {
        day: 3,
        title: "Betla Wildlife Safari",
        activities: [
          { time: "07:00", activity: "Depart for Betla", location: "Netarhat" },
          { time: "10:00", activity: "Tiger safari", location: "Betla National Park" },
          { time: "12:30", activity: "Wildlife photography", location: "Park" },
          { time: "14:00", activity: "Lunch break", location: "Forest Rest House" },
          { time: "16:00", activity: "Elephant spotting", location: "Core area" },
          { time: "18:00", activity: "Return to accommodation", location: "Betla" }
        ]
      }
    ].slice(0, days);

    setGeneratedItinerary(sampleItinerary);
    setShowItinerary(true);
  };

  const removeSavedDestination = (destination: string) => {
    const updated = savedDestinations.filter(d => d !== destination);
    setSavedDestinations(updated);
    localStorage.setItem('itinerary', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Plan Your Jharkhand Journey</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let our AI create a personalized itinerary based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-1">
            <div className="card-gradient rounded-lg p-6 sticky top-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                Trip Preferences
              </h2>

              <div className="space-y-6">
                {/* Duration */}
                <div>
                  <Label htmlFor="days" className="text-base font-medium">Number of Days</Label>
                  <Select value={formData.days} onValueChange={(value) => setFormData(prev => ({...prev, days: value}))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7].map(day => (
                        <SelectItem key={day} value={day.toString()}>{day} Day{day > 1 ? 's' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div>
                  <Label className="text-base font-medium flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Budget Range (per person)
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget (₹3,000-5,000)</SelectItem>
                      <SelectItem value="mid">Mid-range (₹5,000-10,000)</SelectItem>
                      <SelectItem value="luxury">Luxury (₹10,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Travelers */}
                <div>
                  <Label className="text-base font-medium flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Number of Travelers
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.travelers}
                    onChange={(e) => setFormData(prev => ({...prev, travelers: e.target.value}))}
                    className="mt-2 form-input"
                  />
                </div>

                {/* Interests */}
                <div>
                  <Label className="text-base font-medium flex items-center mb-3">
                    <Heart className="h-4 w-4 mr-1" />
                    Your Interests
                  </Label>
                  <div className="space-y-3">
                    {interestOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={formData.interests.includes(option.id)}
                          onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                        />
                        <Label htmlFor={option.id} className="flex items-center cursor-pointer">
                          <span className="text-lg mr-2">{option.icon}</span>
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={generateItinerary}
                  className="btn-hero w-full"
                  disabled={!formData.days || formData.interests.length === 0}
                >
                  Generate AI Itinerary
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            {/* Saved Destinations */}
            {savedDestinations.length > 0 && (
              <div className="card-gradient rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Saved Destinations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {savedDestinations.map((destination, index) => (
                    <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border">
                      <span className="font-medium">{destination}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeSavedDestination(destination)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Generated Itinerary */}
            {showItinerary ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Your Personalized Itinerary</h2>
                  <p className="text-muted-foreground">
                    {formData.days} day{parseInt(formData.days) > 1 ? 's' : ''} of amazing experiences awaits!
                  </p>
                </div>

                {generatedItinerary.map((dayPlan) => (
                  <div key={dayPlan.day} className="card-gradient rounded-lg overflow-hidden">
                    <div className="bg-primary text-white px-6 py-4">
                      <h3 className="text-xl font-semibold">Day {dayPlan.day}: {dayPlan.title}</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {dayPlan.activities.map((activity: any, index: number) => (
                          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                            <div className="flex-shrink-0">
                              <div className="w-16 text-center">
                                <Clock className="h-4 w-4 mx-auto text-primary mb-1" />
                                <span className="text-sm font-medium text-primary">{activity.time}</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground">{activity.activity}</h4>
                              <p className="text-sm text-muted-foreground flex items-center mt-1">
                                <MapPin className="h-3 w-3 mr-1" />
                                {activity.location}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-center mt-8">
                  <Button className="btn-hero mr-4">
                    Book This Itinerary
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    Customize Further
                  </Button>
                </div>
              </div>
            ) : (
              <div className="card-gradient rounded-lg p-12 text-center">
                <div className="text-6xl mb-6">🗺️</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Plan Your Adventure?</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Fill in your preferences on the left, and our AI will create a personalized itinerary 
                  showcasing the best of Jharkhand based on your interests.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;