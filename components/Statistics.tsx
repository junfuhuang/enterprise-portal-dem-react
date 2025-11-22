import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: '企业用户',
    trend: '+25%',
    color: 'blue',
  },
  {
    icon: Globe,
    value: '150+',
    label: '覆盖城市',
    trend: '+18%',
    color: 'green',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: '系统稳定性',
    trend: '+0.2%',
    color: 'purple',
  },
  {
    icon: Award,
    value: '30+',
    label: '行业奖项',
    trend: '+12',
    color: 'orange',
  },
];

export function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">我们的成就</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            数字见证我们的成长，携手客户共创未来
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <Icon className="h-8 w-8 text-white mb-4" />
                <div className="text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 mb-2">{stat.label}</div>
                <div className="inline-flex items-center text-green-300">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
