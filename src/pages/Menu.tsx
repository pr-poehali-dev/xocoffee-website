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
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Альтернатива V60",
    description: "Фильтр-кофе методом пуровер. Раскрывает яркие фруктовые ноты specialty зерна",
    price: 340,
    category: "coffee",
    image: "/img/f4c1e072-171f-4843-8db7-4a5443bb3c26.jpg",
    ingredients: ["Specialty кофе", "Горячая вода 92°C"],
    allergens: []
  },
  {
    id: "2",
    name: "Кофейная пара",
    description: "Эспрессо + кортадо для полного понимания вкуса зерна",
    price: 280,
    category: "coffee",
    image: "/img/f4c1e072-171f-4843-8db7-4a5443bb3c26.jpg",
    ingredients: ["Эспрессо", "Молоко 3.2%"],
    allergens: ["Молоко"]
  },
  {
    id: "3",
    name: "Эспрессо",
    description: "Классический двойной эспрессо из свежеобжаренного зерна",
    price: 160,
    category: "coffee",
    image: "/img/f4c1e072-171f-4843-8db7-4a5443bb3c26.jpg",
    ingredients: ["Specialty кофе 18г"],
    allergens: []
  },
  {
    id: "4",
    name: "Капучино",
    description: "Идеальный баланс эспрессо и бархатистой молочной пены",
    price: 220,
    category: "coffee",
    image: "/img/f4c1e072-171f-4843-8db7-4a5443bb3c26.jpg",
    ingredients: ["Эспрессо", "Молоко 3.2%"],
    allergens: ["Молоко"]
  },
  {
    id: "5",
    name: "Матча-латте",
    description: "Премиальная японская матча с молоком и легкой сладостью",
    price: 280,
    category: "tea",
    image: "/img/4d486bd4-7aab-48a7-a551-e9be558306e2.jpg",
    ingredients: ["Матча ceremonial grade", "Молоко", "Агавный сироп"],
    allergens: ["Молоко"]
  },
  {
    id: "6",
    name: "Чай черный",
    description: "Цейлонский черный чай с насыщенным вкусом",
    price: 150,
    category: "tea",
    image: "/img/4d486bd4-7aab-48a7-a551-e9be558306e2.jpg",
    ingredients: ["Черный чай листовой"],
    allergens: []
  },
  {
    id: "7",
    name: "Чизкейк манго-маракуйя",
    description: "Нежный чизкейк с тропическим муссом и хрустящей основой",
    price: 299,
    category: "desserts",
    image: "/img/1dfd8c68-4085-431d-bee3-9e7f13b50874.jpg",
    ingredients: ["Творожный сыр", "Манго", "Маракуйя", "Печенье"],
    allergens: ["Глютен", "Молоко", "Яйца"]
  },
  {
    id: "8",
    name: "Веган-брауни",
    description: "Шоколадный брауни без продуктов животного происхождения",
    price: 199,
    category: "desserts",
    image: "/img/1dfd8c68-4085-431d-bee3-9e7f13b50874.jpg",
    ingredients: ["Темный шоколад", "Миндальная мука", "Кокосовое молоко"],
    allergens: ["Орехи"]
  },
  {
    id: "9",
    name: "Тирамису",
    description: "Классический итальянский десерт с маскарпоне и кофе",
    price: 250,
    category: "desserts",
    image: "/img/1dfd8c68-4085-431d-bee3-9e7f13b50874.jpg",
    ingredients: ["Маскарпоне", "Савоярди", "Эспрессо", "Какао"],
    allergens: ["Глютен", "Молоко", "Яйца"]
  },
  {
    id: "10",
    name: "Сырники с малиной",
    description: "Воздушные сырники из фермерского творога с малиновым соусом",
    price: 279,
    category: "breakfast",
    image: "/img/4d486bd4-7aab-48a7-a551-e9be558306e2.jpg",
    ingredients: ["Творог фермерский", "Малина", "Мед", "Мука"],
    allergens: ["Глютен", "Молоко", "Яйца"]
  },
  {
    id: "11",
    name: "Омлет с трюфелем",
    description: "Нежный омлет из органических яиц с трюфельным маслом",
    price: 339,
    category: "breakfast",
    image: "/img/4d486bd4-7aab-48a7-a551-e9be558306e2.jpg",
    ingredients: ["Яйца органические", "Трюфельное масло", "Сливки"],
    allergens: ["Яйца", "Молоко"]
  },
  {
    id: "12",
    name: "Авокадо-тост",
    description: "Тост из цельнозернового хлеба с гуакамоле и пошированным яйцом",
    price: 259,
    category: "breakfast",
    image: "/img/4d486bd4-7aab-48a7-a551-e9be558306e2.jpg",
    ingredients: ["Авокадо", "Цельнозерновой хлеб", "Яйцо", "Лайм"],
    allergens: ["Глютен", "Яйца"]
  }
];

const categories = [
  { id: "all", name: "Все", icon: "Utensils" },
  { id: "coffee", name: "Кофе", icon: "Coffee" },
  { id: "tea", name: "Чай", icon: "Leaf" },
  { id: "desserts", name: "Десерты", icon: "Cake" },
  { id: "breakfast", name: "Завтраки", icon: "Sunrise" }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

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
                onClick={() => window.history.back()}
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
                    <div className="absolute top-4 right-4">
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
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
                  <DialogTitle className="text-2xl text-primary">{item.name}</DialogTitle>
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
            Если у вас есть аллергии или особые диетические требования, сообщите нашим бариста
          </p>
        </div>
      </footer>
    </div>
  );
}