# System Administration

## Managing Projects and Folders

To manage projects and folders, open the **Tools** menu and select **Projects**. System administrators can manage all projects and create new projects. Project administrators can change the description, folders and members or their projects. Regular users can only view the description of their projects, but cannot modify anything.

When adding a new project, you can enter an optional description. It can also be added, modified and deleted later. The description can contain simple markup to change the style of text, see the [Text with Markup](./working-with-issues.md#text-with-markup) section.

The project details window contains a list of folders available for that project. Each folder can store a specific type of issues; a project can contain multiple folders of the same type. If you are a system or project administrator, you can add folders, rename and delete folders and move them to another project.

::: warning
Deleting a project or folder is an irreversible operation. If you no longer need a project, consider archiving it instead.
:::

### Project Permissions

To change the permissions of a project, open the project details and click **Permissions**.

There are two types of projects: regular and public. Regular projects are only visible to system administrators and members assigned to these projects. Public projects are visible to all users in the system. If anonymous access is enabled, public projects are visible to anonymous users as well, though only registered users can add or edit issues.

The project permissions window contains a list of project members. There are two types of members: regular members and project administrators. Regular members can view, add and edit issues that belong to the project. Project administrators can also delete or move issues to another folder and edit or delete descriptions, comments and attachments added by other users.

### Projects Archive

If you are a system administrator, you can move a project to the archive. In order to do that, open the project details and select **Archive Project** from the operations menu.

Archived projects no longer appear in the list of projects. Issues that belong to archived projects are not accessible to any user. In order to manage archived projects, open the **Tools** menu, select **Projects** and then click **Archive**. You can restore an archived project, rename it or permanently delete it.

::: tip
It is not possible to archive a single folder. However, you can create a new project, move a folder to that project and then archive it.
:::

## Managing User Accounts

To manage user accounts, open the **Tools** menu and select **User Accounts**. Only system administrators have access to this function.

Each user has a unique login, a name with is visible to other users, and an optional email address. When adding a new user, the administrator can set the initial password and optionally force the user to change that password when logging in for the first time.

If sending emails is enabled, the **Send an invitation email to the user** option is also available. When enabled, there is no need to enter an initial password; the user can set the password by opening the link in the invitation email.

The user details window displays the information about the account, global access and access for individual projects. The administrator can change or reset any user's password, edit account information and permissions.

There are three global access levels. Regular users have access to all public projects and projects that they are members of. System administrators have full access to the system, including all project, they can also manage user account, customize issue types and change the settings of the server. Disabled users cannot log in to the system.

::: tip
It is not possible to delete an existing user account, but the user's global access can be changed to disabled and that user will no longer have access to the system.
:::

### My Account

You can display and edit your own account by opening the user menu and selecting **My Account**. You can modify the name, login, email address and preferred language.

You can change your password by entering both the old password and the new one. If sending emails is enabled, you can also request a password reset. In that case, you can enter the new password by opening the link sent to your email address.

### Anonymous Access

A system administrator can enable anonymous access to the system. This option can be enabled in the **Server Settings** window in the **Access Settings** section.

When anonymous access is enabled, anyone can view issues in public projects, without logging in to the system. The entire issue history, including comments and file attachments is also available, and the project description can be viewed by anonymous users.

Anonymous users cannot make any changes; they cannot add or edit issues, add comments or upload attachments. Anonymous users can use public views, but cannot create personal views.

Anonymous access does not affect regular projects, which are only accessible to logged in users which are their members.

### User Registration

A system administrator can enable user registration in the system. It works in two modes: automatic and manual. In automatic mode, anyone can register an account and get access to public projects. New users can add and edit issues in public projects, add comments and upload attachments.

In manual mode, user registration must be confirmed by the administrator. When approving a registration request, the administrator can select projects that the new user will have access to.

To configure user registration, open **Server Settings** and go to the **Access Settings** section. You can enable or disable user registration and choose the manual or automatic approval method. If manual approval is used, you can enter an optional email address to receive notifications about pending registration requests.

In order to view pending registration requests, open the **Tools** menu, select **User Accounts** and then click **Registration Request**. You can view a registration request and either approve it or reject it. This option is only available when automatic approval is disabled.

User registration is only available when sending emails is enabled on the server.

## Email Inboxes

WebIssues can receive emails from selected email addresses and automatically register them as issues. It is also possible to add comments and attachments to existing issues by email. Combined with email subscriptions, this allows for setting up two way email communication with the WebIssues system.

In order to manage email inboxes, open the **Tools** menu and select **Server Settings**. The list of inboxes is displayed in the **Email Inboxes** section.

To configure a new email inbox, select the protocol used to communicate with the email server; it is recommended to use IMAP if it is supported. Enter the email address of the inbox. In the **Server Communication** section, enter the address of the server and port number, select encryption mode if available, and enter the user name and password if the server requires authentication. You can also specify an optional name of the mailbox, i.e. the dot-separated path of the folder from which messages will be retrieved, for example `INBOX.Projects`. If not specified, the default `INBOX` mailbox will be used.

Enable the **Do not validate server certificate** option if you are using an encrypted connection to a local server which uses a self-signed certificate. When using an IMAP server, you can also enable the **Leave processed messages on the server**. By default, processed emails will be automatically deleted; if you enable this option, emails will be marked as read and left on the server.

If your mail server supports OAuth, you can select the **Authenticate using OAuth** option; you need to [configure OAuth](./installation.md#oauth-configuration) first to enable that option.

You can use the **Test** button to check the connection to the server. If there are any errors, you can check the WebIssues event log for details. In additional troubleshooting is necessary, you may enable the detailed debug log by setting the `debug_level` option to `DEBUG_MAIL`, as described in the [Site Options](./installation.md#site-options) section.

By default only emails sent from addresses associated with WebIssues user accounts will be accepted. When **Accept messages from external users** is enabled, emails from other addresses will be accepted and added in the context of the selected "robot user" account.

In the simplest scenario, all issues are created in a single folder, which can be selected using the **Default folder** option. You can also enable the **Map address extensions to project and folder** option  which makes it possible to determine the target project and folder based on the address used to send the message to the inbox.

The mapping can use an email address extension or an alias. For example, if the inbox address is `service@example.com`, an email sent to either `service+myproject-bugs@example.com` or `service-myproject-bugs@example.com` will be registered as an issue in the "My Project" project in the "Bugs" folder.

When an email is received, the message subject, sender and recipient and the plaintext content of the email message is added as the issue description. By default, the HTML content and any additional attachments and images are added as separate attachments to the issue. You can change this by setting the **Email format** option to **Save as EML file**; in that case, the entire message is attached to the issue as a single EML file which can be downloaded and opened using any email client.

When the **Send responses when issues are created** option is enabled, a confirmation message is sent to the sender when a new issue is registered through the inbox. By responding to this message, additional comments and attachments can be created.

When the **Subscribe senders to created issues** option is enabled, the sender of the message is automatically subscribed to the created issue. In that case any changes made by other users, including comments and attachments, are automatically sent as notification emails. See [Subscriptions](./tracking-issues.md#subscriptions) for more information.

Note that the cron job must be running in order for email inboxes to work. See [Cron Job](./installation.md#cron-job) for more details.

## Updating WebIssues

You can update your WebIssues server to the latest version, or upgrade from version 1.0.x or 1.1.x, by following the instructions in this section. 

::: warning
When upgrading from version 1.0.x or 1.1.x, make sure that your environment meets the [requirements](./installation.md#requirements) for version 2.0. In particular, make sure that you have mod_rewrite on Apache or the URL Rewrite extension on IIS, and you copy the rewrite rules from the `.htaccess` or `web.config` file included in the server package.
:::

Before starting the update, you should back up the database and all files in the web server root directory. You can also disable the web server to prevent other users from accessing the system.

Download the latest pre-built WebIssues server package from the [WebIssues website](https://webissues.mimec.org/).

Delete all files and subdirectories from the directory where you installed the WebIssues server, **except the `data/` subdirectory**, which contains important files specific to your server instance, including file attachments uploaded to your server.

Extract the contents of the package and upload all files to the directory where the WebIssues server was previously installed.

After copying the files, enable the web server, point your browser to the URL of your WebIssues server and click **Update Database**. You will be asked to enter the administrator's login and password and then the database will be updated to the current version.

::: tip
If you are upgrading from version 1.0.x or 1.1.x and you have a cron job configured, make sure that it is executed using the URL. Since version 2.0 it is no longer recommended to run the cron job in CLI mode using the `php` command. See the [Cron Job](./installation.md#cron-job) section for more information.
:::
