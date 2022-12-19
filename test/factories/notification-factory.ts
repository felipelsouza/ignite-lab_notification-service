import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'example-recipient-id',
    content: new Content('You have a new notification.'),
    category: 'social',
    ...override
  });
}
