# System Administration

## Managing Projects and Folders

TODO

## Managing User Accounts

TODO

### Anonymous Access

TODO

### User Registration

TODO

## Email Inboxes

TODO

## Updating WebIssues

You can update your WebIssues server to the latest version, or upgrade from version 1.0.x or 1.1.x, by following the instructions in this section. 

Before starting the update, you should back up the database and all files in the web server root directory. You can also disable the web server to prevent other users from accessing the system.

Download the latest pre-built WebIssues server package from the [WebIssues website](https://webissues.mimec.org/).

Delete all files and subdirectories from the directory where you installed the WebIssues server, **except the `data/` subdirectory**, which contains important files specific to your server instance, including file attachments uploaded to your server.

Extract the contents of the package and upload all files to the directory where the WebIssues server was previously installed.

After copying the files, enable the web server, point your browser to the URL of your WebIssues server and click **Update Database**. You will be asked to enter the administrator's login and password and then the database will be updated to the current version.

::: tip
If you are upgrading from version 1.0.x or 1.1.x and you have a cron job configured, make sure that it is executed using the URL. Since version 2.0 it is no longer recommended to run the cron job in CLI mode using the `php` command. See the [Cron Job](./installation.md#cron-job) section for more information.
:::
