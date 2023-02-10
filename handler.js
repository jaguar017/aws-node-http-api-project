'use strict';

const databaseManager = require('./databaseManager');

function createResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}

module.exports.saveItem = (event, context, callback) => {
  const item = JSON.parse(event.body);
  console.log(item);
  let id=1;
  item.itemId = "ID_"+id;
  id++;

  databaseManager.saveItem(item).then(response => {
    console.log(response);
    callback(null, createResponse(200, response));
  });
};

module.exports.getItem = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;

  databaseManager.getItem(itemId).then(response => {
    console.log(response);
    callback(null, createResponse(200, response));
  });
};