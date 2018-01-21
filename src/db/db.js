import PouchDB from "pouchdb";


export function addQue(que){
var db = new PouchDB('http://localhost:5984/dbatz');
db.put(que);
}