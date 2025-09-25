import { useState } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm your Jharkhand travel assistant. I can help you with destinations, bookings, local culture, and travel tips. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const botResponses = [
    "Netarhat is perfect for sunrise views! The Queen of Chotanagpur offers stunning hilltop vistas. Would you like me to add it to your itinerary?",
    "Hundru Falls is breathtaking! At 320 feet, it's one of Jharkhand's most spectacular waterfalls. Best visited during monsoon season.",
    "For wildlife enthusiasts, I recommend Betla National Park. You might spot tigers, elephants, and diverse bird species. Shall I check availability?",
    "Deoghar is a sacred pilgrimage site with ancient temples. The spiritual energy there is incredible. Are you interested in cultural experiences?",
    "Patratu Dam offers serene lake views and water activities. Perfect for a peaceful getaway. Would you like accommodation suggestions nearby?",
    "The tribal handicrafts in our marketplace support local artisans directly. Each piece tells a story of traditional craftsmanship.",
    "I can help you plan a 3-day itinerary covering waterfalls, temples, and wildlife. What's your preferred travel style - adventure or relaxation?",
    "Local homestays offer authentic experiences with tribal families. You'll learn traditional cooking and cultural practices. Interested?",
    "The best time to visit Jharkhand is October to March for pleasant weather. Monsoon season (July-September) is ideal for waterfalls.",
    "Our AI itinerary planner considers your interests, budget, and duration. It creates personalized experiences based on your preferences."
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center bg-gradient-primary hover:scale-110`}
      >
        <MessageCircle className="h-6 w-6 text-black" />
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Travel Assistant</h3>
                <p className="text-xs opacity-90">Online • Instant responses</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 rounded-full p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-accent text-white'
                    }`}>
                      {message.sender === 'user' ? 
                        <User className="h-3 w-3" /> : 
                        <Bot className="h-3 w-3" />
                      }
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 opacity-70 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about destinations, bookings, culture..."
                className="flex-1 border-0 bg-white shadow-sm"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="btn-accent px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
