"use strict";

import Celebs from "../node_modules/celebs/";

let celeb = new Celebs("views","all");

celeb.then((elem) => console.log(elem[0])); // 11241 items
//{ en_curid: '307',
  // name: 'Abraham Lincoln',
  // numlangs: '131',
  // birthcity: 'Hodgenville', ...
