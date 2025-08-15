import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients?: string[];
  allergens?: string[];
  isHit?: boolean;
}

const menuItems: MenuItem[] = [
  // КОФЕ
  {
    id: "1",
    name: "Ристретто, эспрессо",
    description: "Американо, лунго - классические черные кофейные напитки",
    price: 189,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Specialty кофе", "Горячая вода 92°C"],
    allergens: []
  },
  {
    id: "2",
    name: "Капучино",
    description: "Идеальный баланс эспрессо и бархатистой молочной пены",
    price: 199,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Эспрессо", "Молоко 3.2%"],
    allergens: ["Молоко"],
    isHit: true
  },
  {
    id: "3",
    name: "Латте",
    description: "Нежный кофейный напиток с большим количеством молока",
    price: 199,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Эспрессо", "Молоко 3.2%"],
    allergens: ["Молоко"]
  },
  {
    id: "4",
    name: "Флэт уайт",
    description: "Двойной эспрессо с микропеной молока",
    price: 279,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Двойной эспрессо", "Молоко"],
    allergens: ["Молоко"],
    isHit: true
  },
  {
    id: "5",
    name: "Мокачино",
    description: "Кофе с шоколадом и взбитыми сливками",
    price: 319,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Эспрессо", "Шоколад", "Молоко", "Сливки"],
    allergens: ["Молоко"]
  },
  {
    id: "6",
    name: "Аффогато",
    description: "Ванильное мороженое с горячим эспрессо",
    price: 319,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Эспрессо", "Ванильное мороженое"],
    allergens: ["Молоко"]
  },
  {
    id: "7",
    name: "Латте халва/мёд",
    description: "Ароматный латте с восточными нотами",
    price: 319,
    category: "coffee",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Эспрессо", "Молоко", "Халва", "Мёд"],
    allergens: ["Молоко", "Орехи"]
  },

  // СЛИВОЧНЫЙ РАФ
  {
    id: "raf-1",
    name: "Классический ванильный раф 0.3л",
    description: "Нежный сливочный кофе с ванилью, большая порция",
    price: 379,
    category: "raf",
    image: "/img/c97ab207-dca5-439d-a656-099e8e6e18d8.jpg",
    ingredients: ["Эспрессо", "Сливки", "Ваниль", "Сахар"],
    allergens: ["Сливки"],
    isHit: true
  },
  {
    id: "raf-2",
    name: "Классический ванильный раф 0.2л",
    description: "Нежный сливочный кофе с ванилью, стандартная порция",
    price: 269,
    category: "raf",
    image: "/img/c97ab207-dca5-439d-a656-099e8e6e18d8.jpg",
    ingredients: ["Эспрессо", "Сливки", "Ваниль", "Сахар"],
    allergens: ["Сливки"]
  },
  {
    id: "raf-3",
    name: "Сгущёнка-гвоздика раф 0.3л",
    description: "Ароматный раф со сгущённым молоком и пряной гвоздикой",
    price: 379,
    category: "raf",
    image: "/img/65901b96-0754-4d33-825e-e7130b596998.jpg",
    ingredients: ["Эспрессо", "Сливки", "Сгущённое молоко", "Гвоздика"],
    allergens: ["Сливки"],
    isHit: true
  },
  {
    id: "raf-4",
    name: "Сгущёнка-гвоздика раф 0.2л",
    description: "Ароматный раф со сгущённым молоком и пряной гвоздикой",
    price: 269,
    category: "raf",
    image: "/img/65901b96-0754-4d33-825e-e7130b596998.jpg",
    ingredients: ["Эспрессо", "Сливки", "Сгущённое молоко", "Гвоздика"],
    allergens: ["Сливки"]
  },
  {
    id: "raf-5",
    name: "Лавандовый раф 0.3л",
    description: "Изысканный раф с нотами лаванды для истинных ценителей",
    price: 379,
    category: "raf",
    image: "/img/9637bcfc-96ac-4dff-9e4b-4b16c1a823cd.jpg",
    ingredients: ["Эспрессо", "Сливки", "Цветы лаванды", "Сахар"],
    allergens: ["Сливки"],
    isHit: true
  },
  {
    id: "raf-6",
    name: "Лавандовый раф 0.2л",
    description: "Изысканный раф с нотами лаванды для истинных ценителей",
    price: 269,
    category: "raf",
    image: "/img/9637bcfc-96ac-4dff-9e4b-4b16c1a823cd.jpg",
    ingredients: ["Эспрессо", "Сливки", "Цветы лаванды", "Сахар"],
    allergens: ["Сливки"]
  },

  // ЧАЙ И НАПИТКИ
  {
    id: "8",
    name: "V60",
    description: "Альтернативный способ заваривания кофе",
    price: 259,
    category: "tea",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Specialty кофе", "Горячая вода"],
    allergens: []
  },
  {
    id: "9",
    name: "Дрип кофе",
    description: "Медленно заваренный кофе капельным методом",
    price: 139,
    category: "tea",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Specialty кофе", "Горячая вода"],
    allergens: []
  },
  {
    id: "10",
    name: "Матча латте",
    description: "Японская матча с молоком",
    price: 269,
    category: "tea",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Матча", "Молоко"],
    allergens: ["Молоко"]
  },
  {
    id: "11",
    name: "Какао",
    description: "Горячий шоколад с молоком",
    price: 239,
    category: "tea",
    image: "https://cdn.poehali.dev/files/026e404d-442f-45ca-8640-5429e13a14e5.jpg",
    ingredients: ["Какао", "Молоко", "Сахар"],
    allergens: ["Молоко"]
  },

  // ЗАВТРАКИ
  {
    id: "12",
    name: "Каша дня",
    description: "Овсяная каша на выбор с разными топпингами",
    price: 179,
    category: "breakfast",
    image: "https://cdn.poehali.dev/files/9f3c66b8-0bbe-4691-b437-deed4db23231.jpg",
    ingredients: ["Овсяные хлопья", "Молоко", "Фрукты", "Орехи"],
    allergens: ["Молоко", "Орехи", "Глютен"]
  },
  {
    id: "14",
    name: "Запеканка творожная",
    description: "Нежная творожная запеканка. Топпинги по желанию: сметана, джем, сгущёнка +49₽",
    price: 199,
    category: "breakfast",
    image: "/img/c9c1dc62-a72f-4179-b1cc-1ec3298287f5.jpg",
    ingredients: ["Творог 9%", "Манка", "Сахар", "Яйцо", "Сметана", "Соль", "Ванилин", "Разрыхлитель"],
    allergens: ["Молоко", "Яйца", "Глютен"]
  },
  {
    id: "15",
    name: "Английский завтрак",
    description: "Традиционный сытный завтрак",
    price: 429,
    category: "breakfast",
    image: "/img/6950fb67-b5db-432e-8ced-abcd44d2c2cf.jpg",
    ingredients: ["2 яйца", "Огурец", "Томат", "Фасоль", "Салат айсберг", "Бекон", "Охотничья колбаска", "Перец", "Смесь семян", "Оливковое масло", "Хрустящий лук", "Тост в гриле"],
    allergens: ["Яйца", "Глютен"]
  },

  // ОСНОВНЫЕ БЛЮДА И СУПЫ
  {
    id: "17",
    name: "Печень куриная",
    description: "Нежная куриная печень с гарниром",
    price: 239,
    category: "main",
    image: "https://cdn.poehali.dev/files/9f3c66b8-0bbe-4691-b437-deed4db23231.jpg",
    ingredients: ["Куриная печень", "Лук", "Специи"],
    allergens: []
  },
  {
    id: "18",
    name: "Щёки говяжьи с черносливом и розовым перцем",
    description: "Деликатесное мясное блюдо",
    price: 379,
    category: "main",
    image: "https://cdn.poehali.dev/files/9f3c66b8-0bbe-4691-b437-deed4db23231.jpg",
    ingredients: ["Говяжьи щёки", "Чернослив", "Розовый перец"],
    allergens: []
  },
  {
    id: "19",
    name: "Рагу овощное с цыплёнком",
    description: "Домашнее рагу с сезонными овощами",
    price: 279,
    category: "main",
    image: "https://cdn.poehali.dev/files/9f3c66b8-0bbe-4691-b437-deed4db23231.jpg",
    ingredients: ["Цыплёнок", "Овощи сезонные", "Специи"],
    allergens: []
  },

  // ПЕЛЬМЕНИ И ВАРЕНИКИ
  {
    id: "20",
    name: "Пельмени которые любят все",
    description: "Тесто: мука высшего сорта, яйцо, масло подсолнечное, соль. Начинка: фермерская говядина и свинина, репчатый лук, соль, чёрный перчик",
    price: 349,
    category: "dumplings",
    image: "https://cdn.poehali.dev/files/80da94aa-a173-441b-af1a-c938ea2661dd.jpg",
    ingredients: ["Говядина", "Свинина", "Мука", "Яйца"],
    allergens: ["Глютен", "Яйца"],
    isHit: true
  },
  {
    id: "21",
    name: "Пельмени из сочной курочки",
    description: "Отборное филе грудки куриной, репчатый лук, соль, чёрный перчик, чеснок сушёный, ароматная паприка",
    price: 349,
    category: "dumplings",
    image: "https://cdn.poehali.dev/files/80da94aa-a173-441b-af1a-c938ea2661dd.jpg",
    ingredients: ["Куриная грудка", "Лук", "Специи", "Мука", "Яйца"],
    allergens: ["Глютен", "Яйца"]
  },
  {
    id: "22",
    name: "Вареники с вишней",
    description: "Вишня из бабушкиного сада, сахар",
    price: 339,
    category: "dumplings",
    image: "https://cdn.poehali.dev/files/80da94aa-a173-441b-af1a-c938ea2661dd.jpg",
    ingredients: ["Вишня", "Сахар", "Мука", "Яйца"],
    allergens: ["Глютен", "Яйца"],
    isHit: true
  },
  {
    id: "23",
    name: "Вареники с картофелем",
    description: "Фермерский картофель, коровье молоко, сливочное масло, соль",
    price: 319,
    category: "dumplings",
    image: "https://cdn.poehali.dev/files/80da94aa-a173-441b-af1a-c938ea2661dd.jpg",
    ingredients: ["Картофель", "Молоко", "Сливочное масло", "Мука"],
    allergens: ["Глютен", "Яйца", "Молоко"]
  },
  {
    id: "24",
    name: "Вареники с творогом",
    description: "Сливочный творог 5-9%, яркий куриный желток, сметана 15%, сахар, соль",
    price: 339,
    category: "dumplings",
    image: "https://cdn.poehali.dev/files/80da94aa-a173-441b-af1a-c938ea2661dd.jpg",
    ingredients: ["Творог", "Яйца", "Сметана", "Сахар"],
    allergens: ["Глютен", "Яйца", "Молоко"]
  },
  {
    id: "25",
    name: "Вареники с грибочками и картофелем",
    description: "Свежие шампиньоны, фермерский картофель, коровье молоко, сливочное масло, соль",
    price: 339,
    category: "dumplings",
    image: "https://cdn.poehali.dev/files/80da94aa-a173-441b-af1a-c938ea2661dd.jpg",
    ingredients: ["Шампиньоны", "Картофель", "Молоко", "Масло"],
    allergens: ["Глютен", "Яйца", "Молоко"]
  }
];

const categories = [
  { id: "all", name: "Все", icon: "Utensils" },
  { id: "coffee", name: "Кофе", icon: "Coffee" },
  { id: "raf", name: "Сливочный Раф", icon: "Heart" },
  { id: "tea", name: "Чай и напитки", icon: "Leaf" },
  { id: "breakfast", name: "Завтраки", icon: "Sunrise" },
  { id: "main", name: "Основные блюда", icon: "ChefHat" },
  { id: "dumplings", name: "Пельмени и вареники", icon: "Cake" }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/'}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-bold text-primary">Меню XO COFFEE</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск блюд..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 px-6 py-3 rounded-full"
              >
                <Icon name={category.icon as any} size={20} />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            {searchQuery && `Результаты поиска "${searchQuery}": `}
            {filteredItems.length} {filteredItems.length === 1 ? 'блюдо' : 'блюд'}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {item.isHit && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                          ХИТ
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        {item.price}₽
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Info" size={16} className="mr-1" />
                        Подробнее
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {item.price}₽
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Modal */}
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-primary flex items-center gap-2">
                    {item.name}
                    {item.isHit && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        ХИТ
                      </Badge>
                    )}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.ingredients && (
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Состав:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {item.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex items-center">
                              <Icon name="Dot" size={16} className="mr-1" />
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.allergens && item.allergens.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Аллергены:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.allergens.map((allergen, index) => (
                            <Badge key={index} variant="destructive" className="text-xs">
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <div className="text-3xl font-bold text-primary">
                          {item.price}₽
                        </div>
                        <Button size="lg" className="px-8">
                          <Icon name="ShoppingCart" size={20} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Ничего не найдено
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить фильтры или поисковый запрос
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-secondary/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Все цены указаны в рублях. Возможны изменения без предварительного уведомления.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            💛 Рекомендуем попробовать наше сезонное меню напитков
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Если у вас есть аллергии или особые диетические требования, сообщите нашим бариста
          </p>
        </div>
      </footer>
    </div>
  );
}