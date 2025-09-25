import { useState } from 'react';
import { Calendar, Users, Home, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    accommodation: '',
    guide: '',
    specialRequests: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const accommodationOptions = [
    { value: 'luxury-resort', label: 'Luxury Forest Resort - ₹8,000/night', description: 'Premium amenities with nature views' },
    { value: 'eco-lodge', label: 'Eco Lodge - ₹4,500/night', description: 'Sustainable accommodation in nature' },
    { value: 'homestay', label: 'Tribal Homestay - ₹2,500/night', description: 'Authentic cultural experience' },
    { value: 'guesthouse', label: 'Government Guesthouse - ₹1,800/night', description: 'Budget-friendly option' }
  ];

  const guideOptions = [
    { value: 'local-expert', label: 'Local Expert Guide - ₹2,000/day', description: 'Knowledgeable about tribal culture' },
    { value: 'nature-guide', label: 'Nature & Wildlife Guide - ₹2,500/day', description: 'Specialized in flora & fauna' },
    { value: 'adventure-guide', label: 'Adventure Sports Guide - ₹3,000/day', description: 'For trekking and outdoor activities' },
    { value: 'no-guide', label: 'Self-Guided Tour - Free', description: 'Explore at your own pace' }
  ];

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (!formData.accommodation) newErrors.accommodation = 'Accommodation selection is required';
    if (!formData.guide) newErrors.guide = 'Guide preference is required';
    
    // Validate dates
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const today = new Date();
      
      if (checkIn < today) newErrors.checkIn = 'Check-in date cannot be in the past';
      if (checkOut <= checkIn) newErrors.checkOut = 'Check-out must be after check-in';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: null }));
    }
  };

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut || !formData.accommodation || !formData.guide) return 0;
    
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    const accommodationRates: any = {
      'luxury-resort': 8000,
      'eco-lodge': 4500,
      'homestay': 2500,
      'guesthouse': 1800
    };
    
    const guideRates: any = {
      'local-expert': 2000,
      'nature-guide': 2500,
      'adventure-guide': 3000,
      'no-guide': 0
    };
    
    const accommodationCost = (accommodationRates[formData.accommodation] || 0) * nights;
    const guideCost = (guideRates[formData.guide] || 0) * (nights + 1); // Guides work during days
    
    return accommodationCost + guideCost;
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-8">
        <div className="max-w-2xl w-full mx-auto px-4">
          <Card className="card-gradient">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you, {formData.name}! Your Jharkhand adventure is all set.
              </p>
              
              <div className="bg-forest-light rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold text-foreground mb-4">Booking Details:</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Dates:</span> {formData.checkIn} to {formData.checkOut}</p>
                  <p><span className="font-medium">Guests:</span> {formData.guests}</p>
                  <p><span className="font-medium">Accommodation:</span> {accommodationOptions.find(a => a.value === formData.accommodation)?.label}</p>
                  <p><span className="font-medium">Guide:</span> {guideOptions.find(g => g.value === formData.guide)?.label}</p>
                  <p><span className="font-medium">Total Cost:</span> ₹{calculateTotal().toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  📧 Confirmation details have been sent to {formData.email}<br />
                  📱 We'll contact you at {formData.phone} for further arrangements
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => setShowConfirmation(false)}
                  variant="outline"
                >
                  Book Another Trip
                </Button>
                <Button className="btn-hero">
                  View Itinerary
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Jharkhand Adventure</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your spot for an unforgettable journey through Jharkhand's natural wonders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-primary" />
                  Booking Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Trip Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="checkIn">Check-in Date *</Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => handleInputChange('checkIn', e.target.value)}
                          className={`form-input ${errors.checkIn ? 'border-red-500' : ''}`}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="checkOut">Check-out Date *</Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => handleInputChange('checkOut', e.target.value)}
                          className={`form-input ${errors.checkOut ? 'border-red-500' : ''}`}
                          min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        />
                        {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                          <SelectTrigger>
                            <Users className="h-4 w-4 mr-2" />
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} Guest{num > 1 ? 's' : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Home className="h-5 w-5 mr-2 text-primary" />
                      Accommodation *
                    </h3>
                    
                    <Select value={formData.accommodation} onValueChange={(value) => handleInputChange('accommodation', value)}>
                      <SelectTrigger className={errors.accommodation ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Choose your accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        {accommodationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.accommodation && <p className="text-red-500 text-sm mt-1">{errors.accommodation}</p>}
                  </div>

                  {/* Guide Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Guide Services *</h3>
                    
                    <Select value={formData.guide} onValueChange={(value) => handleInputChange('guide', value)}>
                      <SelectTrigger className={errors.guide ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Choose guide service" />
                      </SelectTrigger>
                      <SelectContent>
                        {guideOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.guide && <p className="text-red-500 text-sm mt-1">{errors.guide}</p>}
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Special Requests</h3>
                    <Textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Any dietary restrictions, accessibility needs, or special preferences..."
                      className="form-input min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="card-gradient sticky top-8">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.checkIn && formData.checkOut && (
                  <div>
                    <h4 className="font-semibold mb-2">Trip Duration</h4>
                    <p className="text-sm text-muted-foreground">
                      {Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24))} nights
                    </p>
                  </div>
                )}

                {formData.accommodation && (
                  <div>
                    <h4 className="font-semibold mb-2">Accommodation</h4>
                    <p className="text-sm text-muted-foreground">
                      {accommodationOptions.find(a => a.value === formData.accommodation)?.label}
                    </p>
                  </div>
                )}

                {formData.guide && (
                  <div>
                    <h4 className="font-semibold mb-2">Guide Service</h4>
                    <p className="text-sm text-muted-foreground">
                      {guideOptions.find(g => g.value === formData.guide)?.label}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-2">Guests</h4>
                  <p className="text-sm text-muted-foreground">{formData.guests} Guest{formData.guests !== '1' ? 's' : ''}</p>
                </div>

                {calculateTotal() > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Total Cost</h4>
                      <p className="text-xl font-bold text-primary">₹{calculateTotal().toLocaleString()}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      *Final price may vary based on seasonal rates
                    </p>
                  </div>
                )}

                <div className="bg-forest-light rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-sm mb-2">What's Included:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✓ Accommodation as selected</li>
                    <li>✓ Local transportation</li>
                    <li>✓ Entry tickets to attractions</li>
                    <li>✓ Traditional meals</li>
                    <li>✓ Cultural experiences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;