import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import HarvardPlate from '@/components/HarvardPlate';
import MealTracker from '@/components/MealTracker';
import StatsOverview from '@/components/StatsOverview';

const Index = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Activity" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">Wellbeing</h1>
              <p className="text-xs text-sidebar-foreground/60">Platform</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'dashboard', icon: 'LayoutDashboard', label: 'Дашборд' },
              { id: 'nutrition', icon: 'Apple', label: 'Питание' },
              { id: 'activity', icon: 'Activity', label: 'Активность' },
              { id: 'analytics', icon: 'BarChart3', label: 'Аналитика' },
              { id: 'team', icon: 'Users', label: 'Команда' },
              { id: 'resources', icon: 'BookOpen', label: 'Ресурсы' },
              { id: 'profile', icon: 'User', label: 'Профиль' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  selectedTab === item.id
                    ? 'bg-sidebar-accent text-white'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-white'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">
                {selectedTab === 'dashboard' && 'Дашборд'}
                {selectedTab === 'nutrition' && 'Питание'}
                {selectedTab === 'activity' && 'Активность'}
                {selectedTab === 'analytics' && 'Аналитика'}
                {selectedTab === 'team' && 'Команда'}
                {selectedTab === 'resources' && 'Ресурсы'}
                {selectedTab === 'profile' && 'Профиль'}
              </h2>
              <p className="text-muted-foreground">
                {new Date().toLocaleDateString('ru-RU', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="px-3 py-1">
                <Icon name="Bell" size={16} className="mr-2" />
                3 уведомления
              </Badge>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                ИИ
              </div>
            </div>
          </div>

          {selectedTab === 'dashboard' && (
            <div className="space-y-6">
              <StatsOverview />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Apple" size={20} className="text-secondary" />
                      Баланс питания сегодня
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <HarvardPlate />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-primary" />
                      Прогресс за неделю
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Овощи и фрукты</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Цельнозерновые</span>
                        <span className="text-sm text-muted-foreground">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Белки</span>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Здоровые жиры</span>
                        <span className="text-sm text-muted-foreground">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <MealTracker />
            </div>
          )}

          {selectedTab === 'nutrition' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Гарвардская тарелка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <HarvardPlate />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Рекомендации</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <div className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Отличный баланс овощей</h4>
                          <p className="text-sm text-muted-foreground">
                            Вы достигли рекомендуемой нормы овощей за сегодня
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex items-start gap-3">
                        <Icon name="AlertCircle" size={20} className="text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Увеличьте потребление белка</h4>
                          <p className="text-sm text-muted-foreground">
                            Добавьте 50г белка к вечернему приёму пищи
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <MealTracker />
            </div>
          )}

          {selectedTab === 'activity' && (
            <Card>
              <CardHeader>
                <CardTitle>Физическая активность</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Activity" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Раздел в разработке</p>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedTab === 'analytics' && (
            <Card>
              <CardHeader>
                <CardTitle>Аналитика и отчёты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="BarChart3" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Раздел в разработке</p>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedTab === 'team' && (
            <Card>
              <CardHeader>
                <CardTitle>Команда</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Users" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Раздел в разработке</p>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedTab === 'resources' && (
            <Card>
              <CardHeader>
                <CardTitle>Образовательные ресурсы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="BookOpen" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Раздел в разработке</p>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedTab === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Профиль пользователя</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="User" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Раздел в разработке</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
