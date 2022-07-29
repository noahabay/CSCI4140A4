import {
  getProducts,
  insertXPo,
  insertYPo,
  insertLine,
} from "../models/productXYModel.js";

//list all parts
export const showProducts = (req, res) => {
  getProducts((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//insert purchase order and check poNo is unique
export const createXPo = (req, res) => {
  const data = req.body;
  insertXPo(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
/*This function checks if the parts in po from z po
can be found in either x or y. if not then returns error
as per assignment 4 reqirements.
*/
export const checkXYPo = (data) => {
  if(insertXPo && insertYPo != err){
    db.query("INSERT INTO y_POs204 SET ?", [data], (err, results) => {
      console.log(results);
    })
    db.query("INSERT INTO x_POs204 SET ?", [data], (err, results) => {
      console.log(results);
    })
  return;
  }
    else {
      console.log(err)
      return;
    }
  
};
//insert purchase order and check poNo is unique
export const createYPo = (req, res) => {
  const data = req.body;
  insertYPo(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//insert line order and check poNo is unique
export const createLine = (req, res) => {
  const data = req.body;
  console.log(data);
  insertLine(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
