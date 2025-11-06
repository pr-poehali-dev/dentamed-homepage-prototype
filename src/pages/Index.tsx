import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-champagne/30 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-fade-in">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="font-serif">С 2005 года</span>
            <span>•</span>
            <span className="font-serif">Более 5000 довольных пациентов</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-graphite mb-6 leading-tight">
            Эстетическая стоматология<br />премиум-класса в центре Москвы
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Dentamed — клиника, где забота, технологии и комфорт объединены в совершенство
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-graphite hover:bg-graphite/90 text-white px-8 py-6 text-lg">
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
              Посмотреть клинику
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={18} className="text-teal-gold" />
              <span className="font-serif">Персональный ассистент клиники</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" size={18} className="text-teal-gold" />
              <span className="font-serif">WhatsApp для клиентов</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-white to-champagne/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/9f384c4d-e9d5-4379-bcd5-8d134bfb5d61.jpg"
                alt="Д-р Набахад Хамед"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div className="md:w-2/3 animate-fade-in">
              <h2 className="font-display text-4xl font-bold text-graphite mb-6">
                Обращение главного врача
              </h2>
              <div className="font-serif text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  «<span className="font-semibold text-graphite">Совершенство</span> в стоматологии начинается с уважения к пациенту. 
                  Мы создаём не просто красивые улыбки — мы восстанавливаем гармонию, <span className="font-semibold text-graphite">уверенность</span> и качество жизни.
                </p>
                <p>
                  Современные технологии, внимание к деталям и искренняя <span className="font-semibold text-graphite">забота</span> — вот философия нашей клиники.»
                </p>
                <p className="text-sm italic pt-4">
                  — д-р Набахад Хамед, главный врач
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-graphite mb-6">О клинике</h2>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы создаём безупречные улыбки для тех, кто привык к совершенству.<br />
            Индивидуальные решения, технологии экспертного уровня, абсолютный комфорт.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://cdn.poehali.dev/files/06e564fd-4ced-4499-8380-20a12b79266d.png"
            alt="Наша клиника"
            className="rounded-3xl shadow-2xl w-full animate-fade-in"
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-champagne/20 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-graphite mb-12 text-center">
            Основные направления
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Эстетическая реставрация", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400" },
              { title: "Имплантация без боли", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400" },
              { title: "Голливудская улыбка", img: "https://images.unsplash.com/photo-1609840114035-3c981736dfa8?w=400" },
              { title: "Ортодонтия", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400" }
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-none bg-white hover:scale-105 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-graphite mb-12 text-center">
            Преимущества элитной клиники
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Lock", title: "Конфиденциальность", desc: "и приватность" },
              { icon: "Award", title: "Идеальная эстетика", desc: "Швейцария, Германия" },
              { icon: "Coffee", title: "Безупречный сервис", desc: "Ассистент на приёме" },
              { icon: "GraduationCap", title: "Врачи", desc: "с международной сертификацией" }
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-champagne to-teal-gold/30 flex items-center justify-center">
                    <Icon name={item.icon} size={36} className="text-graphite" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-graphite mb-2">
                  {item.title}
                </h3>
                <p className="font-serif text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-graphite mb-4 text-center">
            Фото наших работ
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-12 text-center">
            Результаты, которыми мы гордимся
          </p>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
                "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800",
                "https://images.unsplash.com/photo-1609840112855-9ab5710e7d4f?w=800",
                "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
                "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
              ].map((img, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none overflow-hidden">
                      <img 
                        src={img}
                        alt={`Работа ${idx + 1}`}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-champagne/20 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-graphite mb-4 text-center">
            Отзывы пациентов
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-12 text-center">
            Мнение тех, кто доверил нам свою улыбку
          </p>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  text: "Благодарю команду Dentamed за внимание и мастерство. Атмосфера доверия и уверенности с первого визита.",
                  author: "Елена М.",
                  role: "Предприниматель"
                },
                {
                  text: "Впервые за много лет не испытывала страха перед стоматологом. Профессионализм на высшем уровне.",
                  author: "Александр К.",
                  role: "Управляющий директор"
                },
                {
                  text: "Результат превзошёл все ожидания. Это не просто лечение — это искусство. Рекомендую всем своим знакомым.",
                  author: "Мария С.",
                  role: "Дизайнер интерьеров"
                },
                {
                  text: "Клиника мирового уровня в Москве. Индивидуальный подход, внимание к деталям, безупречный сервис.",
                  author: "Дмитрий В.",
                  role: "Инвестор"
                }
              ].map((review, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-8">
                    <Card className="border-none shadow-xl">
                      <CardContent className="p-12 text-center">
                        <div className="mb-6">
                          <Icon name="Quote" size={48} className="text-teal-gold mx-auto" />
                        </div>
                        <p className="font-serif text-xl text-muted-foreground leading-relaxed mb-8 italic">
                          «{review.text}»
                        </p>
                        <div className="border-t pt-6">
                          <p className="font-display text-lg font-semibold text-graphite">
                            {review.author}
                          </p>
                          <p className="font-sans text-sm text-muted-foreground">
                            {review.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-graphite mb-12 text-center">
            Наши врачи
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Д-р Набахад Хамед", 
                role: "Главный врач клиники",
                spec: "Член Европейской ассоциации эстетической стоматологии",
                img: "https://cdn.poehali.dev/files/9f384c4d-e9d5-4379-bcd5-8d134bfb5d61.jpg"
              },
              { 
                name: "Д-р Анна Петрова", 
                role: "Стоматолог-имплантолог",
                spec: "15 лет опыта, сертификат Nobel Biocare",
                img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
              },
              { 
                name: "Д-р Михаил Соколов", 
                role: "Врач-ортодонт",
                spec: "Специалист по невидимым элайнерам",
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
              }
            ].map((doctor, idx) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-none">
                <div className="relative overflow-hidden">
                  <img 
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button variant="secondary" size="sm">
                      Записаться к доктору
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-graphite mb-2">
                    {doctor.name}
                  </h3>
                  <p className="font-serif text-muted-foreground mb-2">{doctor.role}</p>
                  <p className="font-sans text-sm text-muted-foreground">{doctor.spec}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-graphite mb-12 text-center">
            Записаться на консультацию
          </h2>
          
          <Card className="border-none shadow-2xl">
            <CardContent className="p-10">
              <form className="space-y-6">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="h-14 text-lg border-2 focus:border-teal-gold"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="h-14 text-lg border-2 focus:border-teal-gold"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg bg-graphite hover:bg-graphite/90"
                >
                  Получить консультацию
                </Button>
                <p className="text-center text-sm text-muted-foreground font-serif">
                  Мы свяжемся с вами в течение 10 минут<br />
                  <span className="text-xs">Персональный ассистент клиники ответит на все вопросы</span>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-graphite to-graphite/90 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-4 font-serif text-lg">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-teal-gold mt-1" />
                  <p>Москва, 5-й Котельнический пер., 12</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-teal-gold" />
                  <p>+7 (495) 123-45-67</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={24} className="text-teal-gold" />
                  <p>WhatsApp</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white/10">
                  <Icon name="Navigation" size={20} />
                  Маршрут
                </Button>
              </div>
            </div>
            
            <div className="h-80 bg-champagne/20 rounded-2xl flex items-center justify-center">
              <p className="font-serif text-muted">Карта</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-graphite text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-bold mb-4">Dentamed</h3>
            <p className="font-serif text-sm text-white/70">Эстетическая стоматология премиум-класса</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-serif mb-8">
            <a href="#" className="hover:text-teal-gold transition-colors">Услуги</a>
            <a href="#" className="hover:text-teal-gold transition-colors">Врачи</a>
            <a href="#" className="hover:text-teal-gold transition-colors">О клинике</a>
            <a href="#" className="hover:text-teal-gold transition-colors">Контакты</a>
            <a href="#" className="hover:text-teal-gold transition-colors">Политика конфиденциальности</a>
          </div>
          
          <div className="text-center text-xs text-white/50 font-sans">
            © 2024 Dentamed. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;