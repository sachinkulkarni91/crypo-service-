tech stacks used
Node.js and expressJS
MongoDB Atlas
Nodemailer for sending emails.

.env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database_name>?retryWrites=true&w=majority
EMAIL=your-email@gmail.com
PASS=your-email-password



API links

GET '/'

POST ' /api/notifications/send -- to send email notification

GET "/api/notifications" --- to  list all notification

DELETE "/api/notifications/:id" to delete notification by ID

PUT /api/notifications/:id to update the notification by ID
