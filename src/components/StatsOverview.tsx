import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const StatsOverview = () => {
  const stats = [
    {
      id: 1,
      label: 'Баланс питания',
      value: '95%',
      change: '+5%',
      trend: 'up',
      icon: 'TrendingUp',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      id: 2,
      label: 'Средняя калорийность',
      value: '2,150',
      change: 'норма',
      trend: 'neutral',
      icon: 'Flame',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: 3,
      label: 'Вода за день',
      value: '1.8 л',
      change: '+0.3 л',
      trend: 'up',
      icon: 'Droplet',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 4,
      label: 'Активность',
      value: '8,420',
      change: '+12%',
      trend: 'up',
      icon: 'Activity',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <Icon name={stat.icon} size={24} className={stat.color} />
              </div>
              {stat.trend === 'up' && (
                <div className="flex items-center gap-1 text-secondary text-xs font-medium">
                  <Icon name="ArrowUp" size={14} />
                  {stat.change}
                </div>
              )}
              {stat.trend === 'neutral' && (
                <div className="text-xs font-medium text-muted-foreground">
                  {stat.change}
                </div>
              )}
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
