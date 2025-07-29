import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [attending, setAttending] = useState<boolean | null>(null);

  const weddingDate = "15 сентября 2024";
  const venue = "Загородный клуб 'Усадьба'";
  const time = "15:00";

  const schedule = [
    { time: "15:00", event: "Регистрация гостей" },
    { time: "15:30", event: "Церемония бракосочетания" },
    { time: "16:00", event: "Фотосессия и коктейль" },
    { time: "18:00", event: "Праздничный ужин" },
    { time: "20:00", event: "Первый танец" },
    { time: "20:30", event: "Танцы до утра" }
  ];

  const gifts = [
    "Путешествие в медовый месяц",
    "Предметы для дома (постельное белье, посуда)",
    "Техника для кухни",
    "Денежные подарки приветствуются"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('/img/73202e56-9db8-4c73-ad37-81e95c0082c8.jpg')` }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-light text-wedding-black mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Анна & Михаил
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-wedding-black w-16"></div>
              <Icon name="Heart" className="text-wedding-black" size={24} />
              <div className="h-px bg-wedding-black w-16"></div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {weddingDate}
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Приглашаем вас разделить с нами радость нашего особенного дня
            </p>
            <Button 
              className="bg-wedding-black hover:bg-wedding-black/90 text-white px-8 py-3 text-lg rounded-full"
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Подтвердить участие
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Venue Information */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-wedding-black mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Место проведения
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-gray-300/30 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Icon name="MapPin" className="text-wedding-black" size={24} />
                    <h3 className="text-2xl font-medium" style={{ fontFamily: 'Cormorant, serif' }}>
                      {venue}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Московская область, Красногорский район<br />
                    деревня Путилково, ул. Садовая, 5
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Icon name="Clock" className="text-wedding-black" size={20} />
                    <span className="text-lg">{time}</span>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="text-center">
                    <Icon name="Car" className="text-wedding-black mx-auto mb-2" size={32} />
                    <p className="text-sm text-gray-600">
                      Организован трансфер от метро Мякинино<br />
                      Отправление в 14:00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="text-center">
          <h2 className="text-4xl font-light text-wedding-black mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Подтверждение участия
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-gray-300/30 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Введите ваше имя"
                    className="border-gray-300/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Сможете ли вы присутствовать?
                  </label>
                  <div className="flex gap-4 justify-center">
                    <Button
                      variant={attending === true ? "default" : "outline"}
                      onClick={() => setAttending(true)}
                      className={attending === true ? "bg-wedding-black hover:bg-wedding-black/90" : "border-gray-300"}
                    >
                      <Icon name="Check" size={16} className="mr-2" />
                      Да, буду
                    </Button>
                    <Button
                      variant={attending === false ? "default" : "outline"}
                      onClick={() => setAttending(false)}
                      className={attending === false ? "bg-gray-500 hover:bg-gray-600" : "border-gray-300"}
                    >
                      <Icon name="X" size={16} className="mr-2" />
                      Не смогу
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Пожелания молодоженам
                  </label>
                  <Textarea
                    value={guestMessage}
                    onChange={(e) => setGuestMessage(e.target.value)}
                    placeholder="Ваши теплые пожелания..."
                    className="border-gray-300/50"
                    rows={3}
                  />
                </div>

                <Button className="w-full bg-wedding-black hover:bg-wedding-black/90 text-white">
                  Отправить ответ
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dress Code */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-wedding-black mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Дресс-код
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-gray-300/30 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Icon name="Shirt" className="text-wedding-black mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    Для мужчин
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Классический костюм</p>
                    <p>Рубашка и галстук</p>
                    <p>Предпочтительные цвета: темно-синий, серый, черный</p>
                  </div>
                </div>
                <div className="text-center">
                  <Icon name="Sparkles" className="text-wedding-black mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    Для женщин
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Коктейльное или вечернее платье</p>
                    <p>Избегайте белого цвета</p>
                    <p>Приветствуются пастельные тона</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-wedding-black mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Программа торжества
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-gray-300/30 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-6 p-4 rounded-lg bg-gray-50">
                    <Badge variant="outline" className="text-wedding-black border-wedding-rose min-w-[80px]">
                      {item.time}
                    </Badge>
                    <span className="text-lg">{item.event}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gift Registry */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-wedding-black mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Список желаемых подарков
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-gray-300/30 shadow-xl">
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6">
                Ваше присутствие - лучший подарок для нас! Но если вы хотите нас порадовать:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {gifts.map((gift, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
                    <Icon name="Gift" className="text-wedding-black" size={20} />
                    <span>{gift}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-wedding-black mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Контакты
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-gray-300/30 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    Вопросы по организации
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" className="text-wedding-black" size={18} />
                      <span>+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" className="text-wedding-black" size={18} />
                      <span>anna.wedding2024@email.com</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    Координатор мероприятия
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" className="text-wedding-black" size={18} />
                      <span>+7 (999) 765-43-21</span>
                    </div>
                    <p className="text-sm text-gray-600">Елена Смирнова</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-wedding-black/10 py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-wedding-black w-16"></div>
            <Icon name="Heart" className="text-wedding-black" size={24} />
            <div className="h-px bg-wedding-black w-16"></div>
          </div>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Cormorant, serif' }}>
            С любовью, Анна и Михаил
          </p>
          <p className="text-sm text-gray-500 mt-2">
            15 сентября 2024 • {venue}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;