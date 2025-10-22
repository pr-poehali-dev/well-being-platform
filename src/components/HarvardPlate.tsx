import { useState } from 'react';

const HarvardPlate = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: 'vegetables', label: 'Овощи', percentage: 40, color: 'hsl(var(--secondary))', current: 35 },
    { id: 'grains', label: 'Цельнозерновые', percentage: 25, color: '#D4A574', current: 20 },
    { id: 'protein', label: 'Белки', percentage: 25, color: 'hsl(var(--primary))', current: 28 },
    { id: 'fruits', label: 'Фрукты', percentage: 10, color: '#F59E0B', current: 12 },
  ];

  return (
    <div className="space-y-6">
      <div className="relative w-full max-w-md mx-auto aspect-square">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />

          {sections.map((section, index) => {
            const startAngle = sections
              .slice(0, index)
              .reduce((sum, s) => sum + (s.percentage * 3.6), -90);
            const endAngle = startAngle + (section.percentage * 3.6);

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 100 + 90 * Math.cos(startRad);
            const y1 = 100 + 90 * Math.sin(startRad);
            const x2 = 100 + 90 * Math.cos(endRad);
            const y2 = 100 + 90 * Math.sin(endRad);

            const largeArc = section.percentage > 50 ? 1 : 0;

            const pathData = `M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArc} 1 ${x2} ${y2} Z`;

            return (
              <g key={section.id}>
                <path
                  d={pathData}
                  fill={section.color}
                  opacity={hoveredSection === section.id ? 0.9 : 0.7}
                  className="transition-all cursor-pointer"
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                />
              </g>
            );
          })}

          <circle
            cx="100"
            cy="100"
            r="30"
            fill="hsl(var(--card))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {hoveredSection
                ? `${sections.find(s => s.id === hoveredSection)?.current}%`
                : '95%'}
            </div>
            <div className="text-xs text-muted-foreground">
              {hoveredSection
                ? sections.find(s => s.id === hoveredSection)?.label
                : 'Баланс'}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className="p-3 rounded-lg border border-border bg-card cursor-pointer transition-all hover:shadow-md"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: section.color }}
              />
              <span className="text-sm font-medium">{section.label}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Рекомендовано: {section.percentage}%
            </div>
            <div className="text-lg font-semibold mt-1">
              {section.current}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HarvardPlate;
