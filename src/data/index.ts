import {
  Bot,
  Workflow,
  BarChart3,
  Zap,
  Users,
  Search,
  Headphones,
  TrendingUp,
  Database,
  Shield,
  MessageSquare,
  FileSearch,
  PhoneCall,
  BookOpen,
  Settings,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  tag?: string
}

export interface UseCase {
  icon: LucideIcon
  title: string
  description: string
  metrics: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

export interface Agent {
  id: string
  label: string
  role: string
  color: string
  status: 'active' | 'idle' | 'running'
}

export const features: Feature[] = [
  {
    icon: Bot,
    title: 'Create Custom AI Agents',
    description:
      'Design agents with specific roles, knowledge bases, and tool access. No code required—configure via natural language.',
    tag: 'Core',
  },
  {
    icon: Users,
    title: 'Multi-Agent Collaboration',
    description:
      'Agents communicate, delegate, and coordinate in real time. Build hierarchies or peer networks that solve complex tasks together.',
    tag: 'Core',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Chain agents into intelligent pipelines. Define triggers, conditions, and handoffs that run autonomously 24/7.',
    tag: 'Automation',
  },
  {
    icon: TrendingUp,
    title: 'Sales Agents',
    description:
      'Automate outreach, qualification, follow-ups, and CRM updates. Your sales team gets warm leads, not cold lists.',
    tag: 'Sales',
  },
  {
    icon: Headphones,
    title: 'Support Agents',
    description:
      'Resolve tickets, answer FAQs, and escalate complex issues intelligently. Reduce first-response time to seconds.',
    tag: 'Support',
  },
  {
    icon: Search,
    title: 'Research Agents',
    description:
      'Monitor markets, synthesize reports, and surface insights from any data source. Stay ahead without the manual work.',
    tag: 'Research',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      "Real-time visibility into every agent's performance, task completion rates, and cost metrics from one unified view.",
    tag: 'Analytics',
  },
  {
    icon: Zap,
    title: 'Usage-Based Scaling',
    description:
      'Pay for what you use. Scale agents up during peak periods and dial back when demand drops—no infrastructure management.',
    tag: 'Infrastructure',
  },
]

export const useCases: UseCase[] = [
  {
    icon: PhoneCall,
    title: 'Sales Outreach Automation',
    description:
      'Research prospects, craft personalized messages, send sequences, and log responses into your CRM automatically.',
    metrics: '3.2× reply rate',
  },
  {
    icon: Headphones,
    title: 'Customer Support Automation',
    description:
      'Handle tier-1 tickets instantly, escalate edge cases to humans, and learn from every resolved conversation.',
    metrics: '78% auto-resolved',
  },
  {
    icon: FileSearch,
    title: 'Market Research Automation',
    description:
      'Agents scan news, reports, competitor sites, and databases to deliver daily intelligence briefings.',
    metrics: '6h → 12min',
  },
  {
    icon: Settings,
    title: 'Internal Operations',
    description:
      'Automate scheduling, approvals, status updates, and cross-team coordination without touching a single Slack message.',
    metrics: '40% time saved',
  },
  {
    icon: MessageSquare,
    title: 'Lead Qualification',
    description:
      'Score, enrich, and route inbound leads in real time. Only the most qualified prospects reach your team.',
    metrics: '2× pipeline quality',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base Assistant',
    description:
      'An always-on agent that answers employee questions, surfaces documentation, and keeps knowledge fresh.',
    metrics: '90% self-serve rate',
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small teams exploring AI automation.',
    features: [
      'Up to 5 AI agents',
      '10,000 task executions/mo',
      '3 active workflows',
      'Standard integrations',
      'Email support',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/month',
    description: 'For scaling teams that need more power and flexibility.',
    features: [
      'Up to 25 AI agents',
      '100,000 task executions/mo',
      'Unlimited workflows',
      'Priority integrations',
      'Slack & priority support',
      'Advanced analytics',
      'Custom agent personas',
      'API access',
    ],
    cta: 'Start Building',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for organizations with complex requirements.',
    features: [
      'Unlimited AI agents',
      'Unlimited task executions',
      'Dedicated infrastructure',
      'Custom integrations',
      'SLA + dedicated support',
      'SSO & RBAC',
      'On-premise option',
      'Custom model fine-tuning',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export const agentNodes: Agent[] = [
  { id: '1', label: 'Sales Agent', role: 'Outreach & Qualification', color: '#818cf8', status: 'active' },
  { id: '2', label: 'Support Agent', role: 'Ticket Resolution', color: '#34d399', status: 'running' },
  { id: '3', label: 'Research Agent', role: 'Market Intelligence', color: '#f472b6', status: 'active' },
  { id: '4', label: 'Workflow Agent', role: 'Orchestration', color: '#fb923c', status: 'running' },
  { id: '5', label: 'Data Agent', role: 'Analytics & Insights', color: '#38bdf8', status: 'idle' },
]

export const dashboardStats = [
  { label: 'Active Agents', value: '24', change: '+3 this week', positive: true },
  { label: 'Running Workflows', value: '12', change: '4 completing soon', positive: true },
  { label: 'Tasks Completed', value: '18,492', change: '+2,341 today', positive: true },
  { label: 'Time Saved', value: '847h', change: 'This month', positive: true },
]

export const steps = [
  {
    number: '01',
    title: 'Create your agents',
    description:
      "Define each agent's name, role, knowledge, and capabilities. Use templates or build from scratch with natural language instructions.",
    icon: Bot,
  },
  {
    number: '02',
    title: 'Assign roles and tools',
    description:
      'Give agents access to integrations, APIs, and data sources. Connect your CRM, helpdesk, Slack, email, and more.',
    icon: Settings,
  },
  {
    number: '03',
    title: 'Connect into workflows',
    description:
      'Chain agents together with triggers, conditions, and handoff logic. Build workflows visually or describe them in plain language.',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Deploy and monitor',
    description:
      'Launch with one click. Track every action, measure outcomes, and continuously improve performance from your dashboard.',
    icon: BarChart3,
  },
]

export const problemPoints = [
  {
    icon: Database,
    title: 'Siloed AI tools',
    description:
      'ChatGPT here, Jasper there, Zapier in the middle. Every tool requires manual input and produces isolated outputs with no shared context.',
  },
  {
    icon: Users,
    title: 'Manual coordination',
    description:
      'Humans still act as bridges between AI tools, defeating the purpose of automation and creating bottlenecks at scale.',
  },
  {
    icon: Shield,
    title: 'No intelligent delegation',
    description:
      "Current AI tools can't reason about task complexity, decide who should handle what, or adapt when something goes wrong.",
  },
]
