# Installation

::: tip
In order to update an existing WebIssues server to the latest version, see the instructions in the [Updating WebIssues](./system-administration.md#updating-webissues) section.
:::

## Requirements

WebIssues requires [PHP](https://www.php.net/) version 5.6 or newer and one of the following database servers:
* [MySQL](https://www.mysql.com/) version 5.0 or newer
* [PostgreSQL](https://www.postgresql.org/) version 8.0 or newer
* [SQL Server](https://www.microsoft.com/sql-server) version 2012 or newer

The following PHP extensions are required:

* mbstring
* mysqli (when using MySQL)
* pgsql (when using PostgreSQL)
* com_dotnet (when using SQL Server)

WebIssues supports the [Apache](https://httpd.apache.org/) and [IIS](https://www.iis.net/) web servers and includes the `.htaccess` and `web.config` files which contain the necessary rewrite rules. When using Apache, mod_rewrite is required. On IIS, the [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite) extension is required. When installing WebIssues on a different web server, for example [nginx](https://nginx.org/), it must be configured manually.

## Copying Files

In order to install WebIssues on your server, download the pre-built WebIssues server package unless you are planning to build WebIssues yourself. The pre-built server packages can be found on the [WebIssues website](https://webissues.mimec.org/).

Extract the contents of the package and upload all files to the root directory of your web server.

During the setup process, WebIssues will create a `data/` subdirectory in the root directory. Make sure that the web server has appropriate permissions to create this directory. You can also create it manually and grant read/write access to it to the web server.

::: warning
If you are updating an existing installation of WebIssues server, make sure that you don't delete the `data/` subdirectory, because it contains important files specific to your server instance, including file attachments uploaded to your server.
:::

## Database Setup

Create a database for WebIssues on your server and a database user with privileges for accessing and modifying it.

If you are installing WebIssues on a hosted server, you may already have an existing database, or you may have access to a control panel that will automatically create it for you. Otherwise, use a dedicated tool for managing your database server, such as phpMyAdmin, pgAdmin or SQL Server Management Studio to create a database and login.

Point your browser to the URL of the WebIssues server and click **Configure Database**. Select the language in which WebIssues will be configured and proceed to the next step. Choose the type of your database server and enter the host name, database name, user name and password used to connect to the database server.

If you have only one database which is already used for other purposes, you can enter a unique prefix for database tables, for example `wi_`.

Go to the next step and enter the name of your WebIssues server.

To get started quickly you can select the **Install the default set of issue types** option and the setup will create default Bugs, Tasks and Forum issue types. You will be able to customize or delete these types later. You can also choose **Do not install any issue types** if you are planning to configure all your issue types on your own.

Finally, enter the password and optional email address for the administrator account. Verify the configuration and click **Install**. The setup will create the necessary database tables. It will also create a configuration file in the `data/sites/default/` subdirectory of your web server.

## Optional Features

### Sending Emails

By default, WebIssues is configured not to send any emails. However, some features, including alert notifications, subscriptions and resetting password are only available when sending emails is enabled. In order to do that, select **Server Settings** from the **Tools** menu, go to **Email Settings** and select **Enable sending emails**. You must also provide the email address which will be used as the sender of all emails.

If your web server does not allow sending emails directly, you can use an external SMTP server, such as Gmail or Exchange. Select the **Use custom SMTP server** option and enter the address of the server, port number, user name and password. It is recommended to enable encryption if your SMTP server supports it. If your server supports OAuth, you can select the **Authenticate using OAuth** option; you need to [configure OAuth](./installation.md#oauth-configuration) first to enable that option.

You can use the **Test** button to send a test message to the server's own email address to make sure that everything works correctly. If there is a problem, you can check the WebIssues event log for the error details.

In some cases, additional information may be necessary and enabling the detailed debug log may be useful. In order to do that, set the `debug_level` option to `DEBUG_MAIL`, as described in [Site Options](./installation.md#site-options) below. You can find more information about troubleshooting SMTP connections in the [PHPMailer documentation](https://github.com/PHPMailer/PHPMailer/wiki/Troubleshooting).

### Cron Job

Features such as alert notifications, subscriptions and email inboxes also require setting up a cron job in order to work. If you are using a control panel to manage your web server, create a cron job which executes the `cron/job.php` script on your server, for example `https://www.example.com/cron/job.php`.

If you are managing your server on your own, use the system cron to periodically execute the request to the appropriate URL, for example using the `wget` command:

```bash
wget -O - -q -t 1 https://www.example.com/cron/job.php
```

The cron job should be configured to run at least once every hour. However, for the notifications and email inboxes to be processed more often, you can increase the frequency of the cron job, for example to once per 5 minutes.

## Advanced Configuration

### Multisite Mode

You can install multiple instances of WebIssues on one web server. If each instance has a separate root directory, just follow the instructions above to install each instance. However, you can also configure your web server in such way that multiple domains point to the same root directory.

In that case, WebIssues needs to be configured so that each domain is mapped to a different site. Each site has a separate configuration file and a separate subdirectory for storing uploaded attachments. Sites can use separate databases or the same database with a different prefix.

To enable the multisite mode, create a file called `data/site.ini` and add a section for each site, for example:

```ini
[example]
match = example.com

[test]
match = test.example.com
```

Each section should contain at least the `match` option, which consist of a domain name, optional port and optional path.

Domains are tested from the full domain name up to the top level domain, and the first matching site is used. So in the example above, both `www.example.com` and `example.com` will be mapped to the `example` site, however `www.test.example.com` will be mapped to the `test` site.

Paths are also matched in the order from the full path to the root directory. For example, `example.com/dir/subdir` is matched first, followed by `example.com/dir`, and then `example.com`.

When a non-standard port is used, it is matched first, for example `example.com:8080`, followed by `example.com`.

If no site can be matched, the built-in `default` site is used.

If a single site uses multiple domain names, you can use the `alias` option, for example:

```ini
[example]
match = example.com

[test]
match = test.com
alias = example
```

In this case, both the `example.com` and `test.com` domains will be mapped to the `example` site.

### Site Options

In order to control advanced settings in WebIssues, create a file called `data/site.ini`. This is only recommended for troubleshooting, during development and in advanced configurations such as the multisite mode described above.

You can change the location of the site subdirectory, which contains the configuration file and uploaded attachments, using the `site_dir` option, for example:

```ini
[default]
site_dir = /var/data/webissues
```

The path can be absolute or relative to the directory where WebIssues is installed.

In multisite mode, you can assign options to each site, or change them globally by placing them in the `[global]` section. In that case, site-specific options will take precedence over global options.

The `%site%` placeholder will be replaced with the name of the site. For example, to change the default location of all sites:

```ini
[global]
site_dir = /var/data/webissues/%site%
```

To enable displaying detailed error messages, enable the `debug_info` option. To enable logging detailed information to a log file, change the `debug_level` option. For example:

```ini
[default]
debug_info = on
debug_level = DEBUG_ALL
```

This is useful for development and troubleshooting, but these options should not be used on a production server. By default, the log file is written to the `data/log` directory; you can change the location and file name by configuring the `debug_file` option.

You can customize the logging level, for example `DEBUG_ERRORS` only logs PHP errors and warnings, and `DEBUG_MAIL` is useful for diagnosing problems with sending and receiving emails.

During development, you can enable loading assets from the development sever:

```ini
[default]
dev_mode = on
```

The development server can be started by running the following command:

```bash
npm run dev:web
```

### OAuth Configuration

WebIssues can use OAuth to authenticate connections to any email server that supports it, for both sending and receiving emails. In order to use OAuth, you have to create a file called `oauth.inc.php` and place it in your site directory, usually `data/sites/default`.

The following example shows the OAuth configuration file for receiving emails using an Office 365 Exchange server:

```php
<?php

if ( !defined( 'WI_VERSION' ) ) die( -1 );

$oauth[ 'clientId' ] = '[CLIENT_ID]';
$oauth[ 'clientSecret' ] = '[CLIENT_SECRET]';

$oauth[ 'redirectUri' ] = 'https://www.example.com/client/oauth.php';

$oauth[ 'urlAuthorize' ] = 'https://login.microsoftonline.com/[TENANT_ID]/oauth2/v2.0/authorize';
$oauth[ 'urlAccessToken' ] = 'https://login.microsoftonline.com/[TENANT_ID]/oauth2/v2.0/token';
$oauth[ 'urlResourceOwnerDetails' ] = '';

$oauth[ 'scopes' ] = 'openid profile email offline_access https://outlook.office365.com/IMAP.AccessAsUser.All';
```

In order to use OAuth with an Exchange server, you must register your WebIssues server as an application in Azure AD, as described in the [Exchange server documentation](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth).

When creating the application, enter the Redirect URI using the address of your server, for example `https://www.example.com/client/oauth.php`. The same address should be entered in the OAuth configuration file. Take a note of the Application (client) ID and Directory (tenant) ID and put them in the OAuth configuration file in place of `[CLIENT_ID]` and `[TENANT_ID]`. For a multitenant application, enter `common` instead of the tenant ID.

Go to the **Certificates & secrets** section and create a client secret. Take a note of the secret's value and enter it in place of `[CLIENT_SECRET]`.

Go to the **API permissions** section and add the appropriate permissions for the application:

 - From Microsoft Graph, choose **Delegated permissions** and select `openid`, `profile`, `email`, `offline_access` and `IMAP.AccessAsUser.All` (for receiving emails). For sending emails, select `SMTP.Send`.

 - From Office 365 Exchange Online, choose **Application permissions** and select `IMAP.AccessAsApp` (for receiving emails) and/or `Mail.Send` (for sending emails).

Then, choose the **Grant admin consent** option for all the configured permissions.

In order to use OAuth for sending emails using an Exchange server, add the `https://outlook.office365.com/SMTP.Send` scope to the `oauth.inc.php` configuration file.

If you are using a different email server, refer to its documentation to learn how to register the application and obtain the client ID, client secret, URLs and scopes that should be entered in the configuration file.

After uploading the `oauth.inc.php` file to the WebIssues server, a new section called **OAuth Configuration** should appear in the **Server Settings** window. Click **Edit** and then **Authenticate**, log in to your Azure AD account and grant permissions for the registered application. WebIssues should then receive an access token that can be used to send and/or receive emails via the Exchange server.

In order to use OAuth for receiving emails, select the email inbox in the **Server Settings** window and enable the **Authenticate using OAuth** option.

To use OAuth for sending emails, go to **Email Settings** and enable the **Authenticate using OAuth** option.
