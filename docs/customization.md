# Customization

## Managing Issue Types

By default, during the installation of WebIssues, predefined types of issues are created They can be used to track bugs and tasks in a typical software project, and to create discussion forums. You can modify these built-in issue types to adapt them to your needs and create entirely new types of issues.

To manage user accounts, open the **Tools** menu an select **Issue Types**. Only system administrators can manage issue types, attributes and public views. Regular users can manage their personal views for each issue type.

Each issue type can have any number of attributes. The following types of attributes are available:

- **Text** attributes can store any value up to 255 characters. You can specify an optional minimum and maximum length. If you select **Allow entering multiple lines of text**, the value of the attribute can be edited using a multi-line edit box. Like for any other type of attribute, you can select **Attribute is require** to force entering a value when adding an issue, and an optional default value.

- **Dropdown list** attributes can store one or more values from a predefined list of items. When **Allow entering custom values** is selected, the user can type any value in addition to selecting one of the predefined items. When **Allow selecting multiple items** is selected, it is possible to select multiple values, separated by commas. You can also specify an optional minimum and maximum length, but only when entering custom values is enabled and selecting multiple items is disabled.

- **Numeric** attributes can store an integer or decimal number with up to six decimal places. You can specify an optional minimum and maximum value. If **Strip trailing decimal zeros** is enabled, zeros after the decimal point are not displayed.

- **Date & time** attributes can store a date or date and time. The date and time format depends on the language of the system. When **Date and time without time zone conversion** is selected, the displayed date and time will be always the same, regardless of the user's time zone. When **Date and time using local time zone** is selected, the displayed date and time is automatically converted to the user's local time zone.

  The default value of a Date & time attribute can be set to a special value `[Today]`, which will be replaced with the current date and time when adding an issue. You can also add or subtract a given number of days from the current date, for example `[Today]+3` or `[Today]-7`.

- **User** attributes can store one or more user names. When **Allow selecting only project members** is selected, it is only possible to select users which are members of the project in which the given issue is located. Otherwise all enabled users are available. When **Allow selecting multiple items** is selected, it is possible to select multiple values, separated by commas.

  The default value of a User attribute can be set to `[Me]`, which will be replaced with the name of the current user when adding an issue.

It is possible to rename existing attributes and change their definition, however numeric and date & time attributes cannot be converted to other types. When the attribute definition is changed, existing values of that attribute are not validated until an issue is edited by the user.

Click **Change Order** to change the order in which attributes are displayed in the issue details window and the window for adding and editing issues. You can drag the attributes in the list to change their order.

## Managing Views

In order to manage view settings of an issue type, open the details of an issue type and click **View Settings**. System administrators can modify the default view, manage public views and personal views. Regular users can only manage their personal views.

The default view is used when **All Issues** is selected from the dropdown list in the toolbar above the list of issues. This view defines the visible columns and the default sort order; it cannot have any filters. You can add columns, remove them and drag them in the list to change their order.

A public or personal view defines the visible columns and the default sort order; it can also have one or more filters which specify which issues are visible in the given view. Each filter can be defined using one of the system columns, such as the ID, name, created date, created by, modified date and modified by, or any attribute defined by the administrator. The same column can be used in multiple filters.

The operands of the filter depend on the type of column. In addition to "is equal to" and "is not equal to", for numeric and date attributes you can select "is less than", "is less than or equal", "is greater than" and "is greater than or equal". For text, dropdown and user attributes, "begins with", "contains", "ends with" and "in list" operands are supported.

When specifying the operand for the filter, you can use the special value `[Today]`, which will be replaced with the current date and time, and optionally add or subtract a given number of days from the current date, for example `[Today]+3` or `[Today]-7`. You can also use the value `[Me]`, which will be replaced with the name of the current user.

The operand can be empty when using the "is equal to" or "is not equal to" operator. If multiple filters are defined, an issue must match all filters in order to be included in the view.

Views can be created, modified, cloned and deleted; a system administrator can also unpublish a public view to convert it to a personal view, or publish a personal view to convert it to a public view.

::: tip
You can quickly open the view settings for the current issue type using the **View Settings** option in the operations menu in the toolbar above the list of issues.
:::

## Server Settings

To manage server settings, open the **Tools** menu and select **Server Settings**. Only system administrator have access to this function.

The **Server Settings** section displays the name of the server. It is possible to change the name and to generate a new unique ID of the server. The unique ID should be different for each server, so if you clone an existing server, for example to create a test environment and a production environment, you should reset the ID of one of the environments.

The **Regional Settings** contain settings such as the language of the server and the default time zone. Each user can select a different language by editing their user account. The time zone setting only affects email notifications; all dates and times displayed in the web and desktop applications always use the local time zone of the user.

It is also possible to customize the format of numbers, date and time. By default these formats depend on the selected language.

The **Email Settings** section contains settings for related to [Sending Emails](./installation.md#sending-emails).

The **Cron Job** section shows if the cron job is running; see [Cron Job](./installation.md#cron-job) for more information. It also allows changing the schedule of reports; see [Reports](./tracking-issues.md#reports) for more information.

The **Access Settings** contain settings related to [Anonymous Access](./system-administration.md#anonymous-access) and [User Registration](./system-administration.md#user-registration).

**Email Inboxes** are described in the [Email Inboxes](./system-administration.md#email-inboxes) section.

The **Advanced Settings** contain various other settings related to displaying and editing information, storing attachments etc.

When the **Hide the ID column** option is enabled, the ID column is not displayed in the list of issues. You can still see the identifier of an issue by opening the issue details. When the **Hide empty attribute values** option is enabled, attributes which have no value are not displayed in the issue details. The **Order of issue history** option controls the order in which changes, comments and attachments are displayed in the issue details; by default they are displayed from oldest to newest items.

The **Default text format** option controls the default format used for comments and descriptions. By default the text with markup is used, but this can be changed to plain text. The user can still change the format of an individual comment or description.

In the **Limits** section you can specify the maximum length of comments and descriptions, in characters, and the maximum allowed size of file attachments that can be uploaded to the server.

In the **Attachment Storage** section you can configure how uploaded files are stored on the server. Files smaller than the threshold size are stored in the database; larger files are stored in the file system. You can also configure the system so that attachments are never stored in the database, or always stored in the database, regardless of their size.

The **Session lifetime** option defines the time after which user sessions expire if there is no activity. The **Registration and reset password request lifetime** option specifies the time after which links used to reset password and confirm user registration become invalid. The **Event log time** option specifies the time after which old events are removed from the WebIssues event log. To view the event log, open the **Tools** menu and select **Event Log**. The log contains information about errors and warnings, successful and failed login attempts, cron job execution and important administrative operations.
