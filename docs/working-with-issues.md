# Working with Issues

To start using WebIssues, simply open the URL of the WebIssues server in a browser and log in using your login and password. You can use any modern web browser or mobile device to access WebIssues.

If you use WebIssues frequently, you can also install the WebIssues application on your computer. It is available for Windows, Mac and Linux. When you start the application for the first time, you have to enter the URL of the WebIssues server. You can change it later by clicking the **WebIssues Settings** button in the top right corner of the window.

::: tip
The functionality and user interface of the WebIssues application is identical to the web application. The application can be slightly faster because it caches details and history of opened issues, at the cost of memory and disk space. The application requires a connection to the internet and doesn't work in offline mode.
:::

The main user interface of WebIssues consists of three parts:

* The navigation bar contains the **Tools** menu, the user menu and access to some other frequently used actions, like adding a new issue or navigating to an issue, comment or attachment with a specific ID.

* The toolbar allows to select the type of issues to work with. You can filter the list of issues in various ways by selecting one of the pre-defined views, selecting a project and folder, and searching for a part of the name or any other attribute. If you switch between issue types, the last selected view is automatically remembered.

* The biggest part of the UI is the list of issues. You can display the details of an issue by clicking on it. You can change the sort order by clicking on a column header - the default sort order and the columns which are visible depend on the selected view. If there are more than 50 issues, you can navigate between pages using the buttons below the list.

## Creating and Editing Issues

In order to add a new issue, select the type of the issue from the blue drop-down list in the toolbar and click the green **Add** button in the navigation bar.

Enter the name of the issue and select the project and folder in which the issue will be created. You must be a member of a project, unless you are a system administrator, and it must contain at least one folder of the appropriate type; see [Managing Projects and Folders](./system-administration.md#managing-projects-and-folders) for more information.

Depending on the type of the issue, you may enter some attributes which describe it. Required attributes are marked with an asterisk.

You can also enter a description of the issue. Addresses and IDs will be converted to links. When you select the **Text with Markup** format, simple markup can be used to change the style of text, see the [Text with Markup](#text-with-markup) section below. If you leave the description empty, you can add it later; the description can also be edited or removed at any time.

When you add a new issue, its details will be automatically opened.

The issue details window contains the issue name at the top. On the right you can see the properties of the issue, such as its unique ID, type, the project and folder in which the issue is located, and information about the person and date when the issue was created and last modified. Below, the attributes of the issue are displayed.

The main part of the issue details window contains the description and history of the issue. You can use the filter button to switch between full history of changes, comments and attached files. By default, issue history is displayed from oldest to newest entries, but this can be changed by the administrator in the server settings.

Click the **Edit** button at the top of the window to change the name of the issue and the values of its attributes. All changes are automatically recorder in the issue history.

The menu available at the top of the window contains other operations, such as cloning, moving and deleting the issue, marking the issue as read or unread, and subscribing or unsubscribing the issue. Only the project or system administrator can move or delete an issue. Subscribing to an issue is only possible when sending emails is enabled by the system administrator; see [Subscriptions](./tracking-issues.md#subscriptions) for more information.

## Comments and Attachments

You can add a comment to an issue and it will be recorded in the issue history. To add a comment, open the issue details and click the **Add** button. The same text formatting can be used as in issue descriptions, see the [Text with Markup](#text-with-markup) section below.

To quote an issue description or another comment, use the **Reply** option from the menu available above the comment or description. You can edit or delete your own comment; a project or system administrator can also edit and delete comments made by other users.

To attach a file to an issue, open the issue details and click the **Attach** button. Select a file to upload and provide an optional description. The maximum allowed size of the attachment can be configured by the administrator in the server settings.

Attachments are displayed in the issue history. When you click on an image attachment, a preview will be displayed and you will be able to save the image to your computer or open it in a new browser tab. When you click on any other type of file, it will be automatically downloaded to your computer.

Just like issues, all comments and attachments have unique identifiers. You can easily find an issue, comment or attachment using the **Go To** button in the navigation bar. You can also create links to issues, comments and attachments by placing their identifiers in comments, descriptions and the values of attributes.

### Text with Markup

The markup used by WebIssues makes it possible to change the style of a fragment of text and to create links. For example:

```
This text is **bold**.
This text is __italic__.
This text is `monospace`.
This is a [webissues.mimec.org link with custom text].
```

The result looks like this:

<div class="formatted-text">
<p>This text is <strong>bold</strong>.<br>
This text is <em>italic</em>.<br>
This text is <code>monospace</code>.<br>
This is a <a href="http://webissues.mimec.org">link with custom text</a>.</p>
</div>

URLs and email addresses are automatically converted to links. IDs of issues, comments and attachments, for example `#123`, are also converted to links.

You can use special tags to apply block level formatting to a fragment of text. The `[list]` tag can be used to create a list:

```
[list]
* first item
** sub-item
* second item
* third item
[/list]
```

The result is:

<div class="formatted-text">
<ul><li>first item<ul><li>sub-item</li></ul></li><li>second item</li><li>third item</li></ul>
</div>

The `[qoute]` tag can be used to create a quote block:

```
[quote Title]
This is a quote.
[/quote]
```

The result is:

<div class="formatted-text">
<blockquote><strong>Title:</strong><br>
This is a quote.</blockquote>
</div>

A quote block can contain other blocks, including nested quotes.

The `[code]` block can be used to insert a block of code:

```
[code js]
for ( var i = 0; i < 10; i++ )
  console.log( i );
[/code]
```

Result:

```js
for ( var i = 0; i < 10; i++ )
  console.log( i );
```

All markup within the code block is ignored. If the language of the code block is specified, syntax highlighting is enabled. Supported languages include: Bash, C, C++, C#, CSS, HTML, Java, JavaScript, Perl, PHP, Python, Ruby, SQL, VB and XML.

Finally, the `[rtl]` block can be used to change the layout of a block of text to right-to-left.

The markup can be applied to comments, issue descriptions and project descriptions. To disable markup, you can select the **Plain Text** format from the drop-down list below the edit area. You can you the buttons above the edit area to insert markup and to display a preview of the formatted text.

The maximum allowed length of comments and descriptions can be configured by the administrator. It's generally better to attach larger amounts of text, for example log files, as file attachment.
