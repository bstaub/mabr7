// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const sendgridemail = require('@sendgrid/mail');
const MY_SENDGRID_API_KEY = functions.config().sendgrid.key;
sendgridemail.setApiKey(MY_SENDGRID_API_KEY);


exports.orderEmail = functions.firestore
  .document('orders_completed/{orderId}') //any write to this node will trigger email
  .onCreate((snapshot, context) => {
    const orderId = context.params.orderId;
    const fsdb = admin.firestore()
    return fsdb.collection('orders_completed').doc(orderId).get()
      .then(doc => {
        const orderdata = doc.data()
        const msgbody = {
          to: orderdata.customerBillingAddress.mail,
          bcc: 'mabrweb@gmail.com',
          from: 'mabrweb@gmail.com',
          subject: 'Deine Bestellung bei mabr-web',
          templateId: 'd-0efa1b117040446485a43bdb1727d96b',
          substitutionWrappers: ['{{', '}}'],
          dynamicTemplateData: {
            name: orderdata.customerBillingAddress.firstname,
            orderId: orderdata.shopOrderId
          }
        };
        console.log(msgbody);
        return sendgridemail.send(msgbody)
      })
      .then(() => console.log('order mail sent success'))
      .catch(err => console.log("error " + err))
  });
