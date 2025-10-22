import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const MealTracker = () => {
  const meals = [
    {
      id: 1,
      time: '08:30',
      type: 'Завтрак',
      items: ['Овсянка с ягодами', 'Греческий йогурт', 'Зелёный чай'],
      calories: 420,
      balance: { vegetables: 20, grains: 45, protein: 25, fruits: 10 },
      status: 'complete',
    },
    {
      id: 2,
      time: '13:00',
      type: 'Обед',
      items: ['Куриная грудка', 'Киноа', 'Салат из свежих овощей', 'Яблоко'],
      calories: 580,
      balance: { vegetables: 40, grains: 25, protein: 30, fruits: 5 },
      status: 'complete',
    },
    {
      id: 3,
      time: '18:30',
      type: 'Ужин',
      items: [],
      calories: 0,
      balance: { vegetables: 0, grains: 0, protein: 0, fruits: 0 },
      status: 'pending',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon name="UtensilsCrossed" size={20} className="text-primary" />
            Приёмы пищи сегодня
          </CardTitle>
          <Button variant="default" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить приём
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className={`p-4 rounded-lg border ${
                meal.status === 'complete'
                  ? 'border-border bg-card'
                  : 'border-dashed border-muted-foreground/30 bg-muted/20'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-muted-foreground">
                    {meal.time}
                  </div>
                  <div className="text-base font-semibold">{meal.type}</div>
                  {meal.status === 'complete' && (
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      <Icon name="Check" size={12} className="mr-1" />
                      Записано
                    </Badge>
                  )}
                  {meal.status === 'pending' && (
                    <Badge variant="outline" className="text-muted-foreground">
                      Запланировано
                    </Badge>
                  )}
                </div>
                {meal.status === 'complete' && (
                  <div className="text-sm font-medium">
                    {meal.calories} <span className="text-muted-foreground">ккал</span>
                  </div>
                )}
              </div>

              {meal.items.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {meal.items.map((item, index) => (
                      <span
                        key={index}
                        className="text-sm px-3 py-1 bg-muted rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center p-2 bg-secondary/10 rounded">
                      <div className="text-xs text-muted-foreground mb-1">Овощи</div>
                      <div className="text-sm font-semibold text-secondary">
                        {meal.balance.vegetables}%
                      </div>
                    </div>
                    <div className="text-center p-2 bg-orange-100 rounded">
                      <div className="text-xs text-muted-foreground mb-1">Злаки</div>
                      <div className="text-sm font-semibold text-orange-700">
                        {meal.balance.grains}%
                      </div>
                    </div>
                    <div className="text-center p-2 bg-primary/10 rounded">
                      <div className="text-xs text-muted-foreground mb-1">Белки</div>
                      <div className="text-sm font-semibold text-primary">
                        {meal.balance.protein}%
                      </div>
                    </div>
                    <div className="text-center p-2 bg-yellow-100 rounded">
                      <div className="text-xs text-muted-foreground mb-1">Фрукты</div>
                      <div className="text-sm font-semibold text-yellow-700">
                        {meal.balance.fruits}%
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <Icon name="Plus" size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Нажмите, чтобы добавить данные о приёме пищи</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MealTracker;
