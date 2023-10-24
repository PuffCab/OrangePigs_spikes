# Files upload

## Multer

### What is it?

Multer is a middleware for handling file uploads in Node.js applications. It simplifies the process of handling multipart/form-data requests, which are typically used for uploading files such as images, videos, documents, etc., from a client (e.g., a web browser) to a server.

- Ah cool, but what is a __multipart/form-data__? :
  It is a media type (MIMME: Multipurpose Internet Mail Extension) used in HTTP requests to transmit binary data, such as files, as part of a form submission.

Multipart/form-data is a format that allows for sending not only text-based data, but also binary files.

### Why we  need it?

Express doesn't have built-in support for parsing this format, so we need Multer to parse it and handle the incoming file data.

### What it does?

Multer is highly configurable, and allow us to specify various options to control how files are uploaded and processed such as:

- Check and validate the file extensions.
- Handle multiple files uploaded in a single request.
- decide about the storage of the files: on the memory, on a local file system, or on the cloud in storage services like Cloudinary or Amanzon S3

## Cloudinary

### What is it?

Is a cloud based storage platform, with a focus on media managment

### Why we  need it?

Using a platform like cloudinary reduces the layer of complexity and use of resources that involves media managment and optimization.

### What it does?

- Storage of our media assets and files
- API : provide an API to upload and manage files.
- Image and video manipulation : resize, crop, rotate, etc... .
- Public URL: Generate a user-friendly URL we can use directly in HTML/JSX
- Responsive delivery: we can receive images in different sizes and resolutions depending on the needs of our app.

## Bcrypt

### What is it?

A library to hash passwords

### Why we  need it?

To secure passwords stored in our servers, so we don't have direct access to the passwords stored by users.

### What it does?

- Hashing : convert a password into a complex string of characters, difficult to revert back to the original password.
- Salting : generate a random value that is added to the password that is gonna be hashed.

## multipart/form-data

### What is it?

A content type for _form data_ that represents the data sent from websites to APIs

### Why we  need it?

_form data_ is tipically used with HTML forms to upload files (images, videos, pdfs, and other binary data),along with text-based form fields

### What it does?

- Each field in the form is sent as a separate part, and every part can contain both name and value
- Boundary string: A boundary string (as string used as text separator) is used to separate the different parts of the data. This allows the server to distinguish between the fields and their associated data.

## x-www-form-urlencoded

### What is it?

A content type for _form data_ .
Sends encoded data to the server , using the same encoding as the one used for the URL parameters.
Is also known as the default content type.

### Why we  need it?

To send data to the server in the shape of value and pair (object like)

### What it does?

- Send data in simple text format.
- It is not efficient to send large amount of binary data or text containing non-ASCII characters. That is why is not suitable to send files.

[Form content types defined by the W3 commitee](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1)

## path

### What is it?

It is a package from nodejs that allow us to work with file and directory paths

### Why we  need it?

It provides utilites to handle file from paths ensuring cross-platform compatibility, e.g. some operative systems use different characters as path separators (linus and OS use "/", windows "\", and in URLs "/" is used to separate slugs), they also use different syntaxes for file paths, special characters, etc...  .
The path module is prepared to handle those differences and allow us to work with the paths without having to think about them.

### What it does?

- Getting information from a path : file name, file extension and directory name.
- Provide a list of utilities to work with  with paths, such as creating and absolute path, join different paths into one, normalize it or create a relative path.

[path documentation](https://nodejs.dev/en/learn/nodejs-file-paths/)
