import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">XO COFFEE</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Меню</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/5988c6b6-8f01-4758-bd9e-046fe2bf4b15.jpg" 
            alt="Интерьер XO Coffee" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              XO COFFEE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Specialty Coffee с душой с 2016 года.<br />
              Не просто кофе — искусство в каждой чашке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
              >
                Наше меню
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Как добраться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                О нашей кофейне
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  С 2016 года мы создаем особую атмосферу для ценителей настоящего кофе. 
                  XO Coffee — это место, где каждая чашка рассказывает историю.
                </p>
                <p>
                  Мы работаем только с зерном класса Specialty (оценка SCA от 80+ баллов) 
                  и обновляем регионы каждые 2 недели — от эфиопских высокогорий 
                  до колумбийских терруаров.
                </p>
                <p>
                  Наши бариста с сертификацией SCA готовы раскрыть уникальные ноты 
                  вашего напитка и создать авторские композиции, которые удивят даже 
                  самых взыскательных гурманов.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">9</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5.0</div>
                  <div className="text-muted-foreground">рейтинг на Яндекс Картах</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/4d486bd4-7aab-48a7-a551-e9be558306e2.jpg" 
                alt="Наш кофе" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <Icon name="Coffee" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Наше меню
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гимн вкусу и сезонности. Каждое блюдо и напиток создан с любовью к деталям.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coffee */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Icon name="Coffee" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Кофе</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Альтернатива V60</span>
                    <span className="font-semibold">340₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Кофейная пара</span>
                    <span className="font-semibold">280₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Эспрессо</span>
                    <span className="font-semibold">160₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Капучино</span>
                    <span className="font-semibold">220₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tea */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Icon name="Leaf" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Чай</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Матча-латте</span>
                    <span className="font-semibold">280₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Чай черный</span>
                    <span className="font-semibold">150₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Чай зеленый</span>
                    <span className="font-semibold">150₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Травяной сбор</span>
                    <span className="font-semibold">180₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Desserts */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Icon name="Cake" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Десерты</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Чизкейк манго-маракуйя</span>
                    <span className="font-semibold">299₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Веган-брауни</span>
                    <span className="font-semibold">199₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Канеле</span>
                    <span className="font-semibold">120₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тирамису</span>
                    <span className="font-semibold">250₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Breakfast */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Icon name="Utensils" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Завтраки</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Сырники с малиной</span>
                    <span className="font-semibold">279₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Омлет с трюфелем</span>
                    <span className="font-semibold">339₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Авокадо-тост</span>
                    <span className="font-semibold">259₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Гранола</span>
                    <span className="font-semibold">239₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Приходите к нам за кофе и эмоциями!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Всеволожск, Коралловская, 16
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 8:00–21:00<br />
                    Сб-Вс: 10:00–21:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (812) 123-45-67
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Star" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Специальное предложение</h3>
                  <p className="text-muted-foreground">
                    Скажите кодовое слово <strong>"Я ваш фанат"</strong> — 
                    получите канеле в подарок к любому заказу!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Интерактивная карта<br />
                    будет добавлена позже
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">XO COFFEE</h3>
            <p className="mb-6">
              Основано в 2016 году. Каждый день пишем новую главу вашей кофейной истории.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="tel:+78121234567" className="hover:text-accent transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm opacity-80">
                © 2025 XO Coffee. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}