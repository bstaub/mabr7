// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const sendgridemail = require('@sendgrid/mail');
const MY_SENDGRID_API_KEY = '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'
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
          from: 'auto-reply@xyzshopping.com',
          subject:  'Payment Success - xyzshopping.com',
          templateId: 'd-0efa1b117040446485a43bdb1727d96b',
          substitutionWrappers: ['{{', '}}'],
          substitutions: {
            'name': orderdata.customerBillingAddress.firstname
          }
        };
        console.log(msgbody);
        return sendgridemail.send(msgbody)
      })
      .then(() => console.log('order mail sent success') )
      .catch(err => console.log("shit "+ err) )
  });
