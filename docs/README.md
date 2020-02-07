# Introduction

**WebIssues** is an open source, multi-platform system for issue tracking and team collaboration. It can be used to store, share and track issues with various attributes, description, comments and file attachments. It is easy to install and use but has many capabilities and is highly customizable.

## Getting Started

For information about installing WebIssues, see [Installation](./installation.md). If you are updating or upgrading an existing server, see [Updating WebIssues](./system-administration.md#updating-webissues).

For a general introduction to WebIssues, see the [Basic Concepts](#basic-concepts) section below.

If you are looking for information about using WebIssues, you can start with the [Working with Issues](./working-with-issues.md) chapter.

If you are an administrator, read the [System Administration](./system-administration.md) and [Customization](./customization.md) chapters.

::: tip
This guide is dedicated to version 2.0 of WebIssues. The manual for version 1.1 can be found [here](https://doc.mimec.org/webissues/1.1/en/). For information about upgrading WebIssues from older versions, see [here](./system-administration.md#updating-webissues).
:::

## Support

If you have problems related to installing, configuring and using WebIssues, or some other questions, please visit the [Support forum](https://webissues.mimec.org/forum/general) on the WebIssues website.

Ideas and suggestions for improvements can be submitted using the [Feature requests forum](https://webissues.mimec.org/forum/tracker) on the WebIssues website.

Use the [Issues tracker](https://github.com/mimecorg/webissues/issues) on GitHub to submit bugs. Please include the WebIssues version, information about your environment and detailed steps and symptoms of the problem.

## Basic Concepts

An **issue** is an equivalent of a record in a database or a row in a spreadsheet. It can represent a bug, task, test case, support request, contract, or anything else, depending on the purpose of the system.

Each issue can have any number of **attributes** which are the equivalent of a column in a database or spreadsheet. Some attributes are common to all issues, such as the unique ID and name, and other attributes are different for each **issue type**. The standard issue types in WebIssues are bugs, tasks and forum, but they can be customized or replaced by different types if necessary.

Each issue also has a description and a history. The history can include comments and attachments. All changes of attribute values are also automatically recorded in the issue history.

Each issue is assigned to a single **project**. Projects can be used to logically groups issues together and to assign permissions to users. Issues in each project are only visible to members of that project and system administrators.

Each project can contain any number of **folders** which are used to store issues of a given type. Different projects can contain folders of different types. It is also possible to create multiple folders of the same type within a single project, in order to divide issues into groups, for example by project version or date.
