export class NotificationNotFound extends Error {
  constructor(notificationId: string) {
    super(`Notification with id ${notificationId} not found`);
  }
}
