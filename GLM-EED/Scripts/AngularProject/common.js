
if (!String.prototype.endsWith) { 
  Object.defineProperty(String.prototype, 'endsWith', { 
    enumerable: false, 
    configurable: false, 
    writable: false, 
    value: function (searchString) { 
      return this.match(searchString+"$") == searchString;
    } 
  }); 
}

