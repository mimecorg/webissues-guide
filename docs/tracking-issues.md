# Tracking Issues

WebIssues has many features which facilitate team collaboration and communication. The simplest one is tracking new and modified issues. When an issue has never been opened by the current user, it is marked with a green circle next to its name. When an issue has been modified by someone else since it was last opened, it is marked with a blue circle.

When you open the details of an issue, it is automatically marked as read. You can manually mark it as unread or read using the menu in the top right corner of the issue details window.

To mark all issues matching the current view and filters as read or unread, select the **Mark All As Read** or **Mark All As Unread** option from the menu in the toolbar.

::: tip
The list of issues is automatically reloaded whenever you add or modify an issue of change the current view. However it is not refreshed when someone else adds or modifies an issue. To manually reload the list, use the **Reload** button in the toolbar.
:::

## Subscriptions

If sending emails is enabled on the server, you can subscribe to any issue. Whenever someone else edits a subscribed issue, adds a comment or attachment, you will receive an email containing the detailed list of changes. Subscribed issues are marked with an envelope icon next to their name.

To subscribe to an issue, open its details and select **Subscribe** from the operations menu. If you are subscribed to an issue, you can select **Unsubscribe**.

To configure the email address used for sending subscription notifications, open **My Account** from the user menu in the navigation bar and click **Edit**.

## Alerts

The mechanism of alerts works in two ways. If there is at least one new or modified issue matching the alert criteria &mdash; the selected issue type, an optional view, project and folder &mdash; the notifications button in the navigation bar is marked with a green dot.

When you click on this button, the list of active alerts appears with the number of new or modified issues for each alert. To display all issues matching the alert criteria, simply click on the alert.

The status of notifications is automatically refreshed every minute.

In addition, if sending emails is enabled on the server, you will receive email notifications containing all unread changes related to issues matching the alert criteria.

To configure alerts, open the **Tools** menu and select **Alerts**. You can define any number of alerts. For each alert, you must select at least the type of issues. You can also select a public or personal view, a project and a folder to limit the number of issues that trigger the alert.

System administrators can also define public alerts which affect all users. Only members of a project will receive alert notifications for issues which belong to that project.

## Reports

If sending emails is enabled, you can configure automatic email reports which are sent periodically to your email address. There are two types of reports. Change reports contain a list of new and modified issues and the details of all changes, regardless of their read status. Issue reports contain a list of all issues matching the given filter and optional location, without history of changes.

To configure reports, open the **Tools** menu and select **Reports**. Just like with alerts, for each report you must select the type of issues; you can also select an optional view, project and folder. In addition, you can choose the type of the report. Reports can be sent once a day or once a week.

System administrators can define public reports which are sent to all users.

To change the default hour and day of week when daily and weekly reports are sent, open **Server Settings** and edit **Cron Job** settings. Note that the cron job must be running in order for reports to subscriptions, alerts and reports to work.

In order to manually generate a report, you can export the list of issues using the **Export to CSV** option from the menu in the toolbar. You can choose to export only the columns which are visible in the current view, or all available system and user columns for the given type of issues.
