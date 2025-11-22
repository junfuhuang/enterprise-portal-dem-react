import { Cloud, Shield, Zap, Users, BarChart, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: '云端服务',
    description: '基于云架构的稳定可靠服务，支持弹性扩展，保障业务连续性',
    color: 'blue',
  },
  {
    icon: Shield,
    title: '安全防护',
    description: '企业级安全防护体系，多重加密机制，保护数据资产安全',
    color: 'green',
  },
  {
    icon: Zap,
    title: '高效性能',
    description: '优化的系统架构，毫秒级响应速度，提升用户体验',
    color: 'yellow',
  },
  {
    icon: Users,
    title: '团队协作',
    description: '强大的协作工具，打破信息孤岛，提升团队效率',
    color: 'purple',
  },
  {
    icon: BarChart,
    title: '数据分析',
    description: '智能数据分析平台，洞察业务趋势，辅助科学决策',
    color: 'red',
  },
  {
    icon: Smartphone,
    title: '移动办公',
    description: '随时随地移动办公，跨平台无缝衔接，提升工作灵活性',
    color: 'indigo',
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  red: { bg: 'bg-red-100', text: 'text-red-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
};

export function Features() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            核心功能
          </div>
          <h2 className="text-gray-900 mb-4">全方位的企业服务</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们提供完整的企业数字化解决方案，涵盖云计算、安全、协作等多个领域
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
