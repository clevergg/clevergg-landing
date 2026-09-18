import type { Project } from '../types';
import SpectreBoost1 from '../../../assets/media/SpectreBoost-1.png';
import SpectreBoost2 from '../../../assets/media/SpectreBoost-2.png';

export function getProjects(): Project[] {
  return [
    {
      id: 'spectre',
      title: 'Spectre Boost',
      description: 'Сервис с оплатой, ролями и Telegram-ботом',
      href: '/projects/spectre-boost',
      cover: SpectreBoost1,
    },
    {
      id: 'education',
      title: 'Family Education Center',
      description: 'Сайт с админ-панелью, сотрудники правят сами',
      href: '/projects/family-education-center',
      cover: SpectreBoost2,
    },
    {
      id: 'swift',
      title: 'Swift CRM',
      description: 'Канбан-доска с real-time обновлениями',
      href: '/projects/swift-crm',
      cover: SpectreBoost1,
    },
    {
      id: 'swift3',
      title: 'Swift CRM',
      description: 'Канбан-доска с real-time обновлениями',
      href: '/projects/swift-crm',
      cover: SpectreBoost1,
    },
  ];
}